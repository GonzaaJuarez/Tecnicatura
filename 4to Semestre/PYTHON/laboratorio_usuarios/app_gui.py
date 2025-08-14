# app_gui.py — UI moderna con tema claro/oscuro y estilos corregidos (sin dependencias extra)
import tkinter as tk
from tkinter import ttk, messagebox

from usuario import Usuario
from usuario_dao import UsuarioDAO
from excepciones import AppError, ValidationError, NotFoundError
from conexion import Conexion


def _tint(hex_color: str, factor: float) -> str:
    """Aclara u oscurece un color hex (factor >1 aclara, <1 oscurece)."""
    c = hex_color.lstrip("#")
    r, g, b = [int(c[i:i + 2], 16) for i in (0, 2, 4)]
    r = max(0, min(255, int(r * factor)))
    g = max(0, min(255, int(g * factor)))
    b = max(0, min(255, int(b * factor)))
    return f"#{r:02x}{g:02x}{b:02x}"


class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Usuarios • CRUD")
        self.geometry("820x560")
        self.minsize(760, 520)

        # --------- Paletas (light / dark) ----------
        self.theme = tk.StringVar(value="light")
        self.palettes = {
            "light": dict(
                bg="#F5F6F8", fg="#111", sub="#666", card="#FFFFFF",
                border="#E2E8F0", accent="#2563EB",
                tree_bg="#FFFFFF", tree_alt="#F7F7FB", tree_sel_bg="#DBEAFE", tree_sel_fg="#111",
                hdr_bg="#F3F4F6", hdr_fg="#111",
            ),
            "dark": dict(
                bg="#0F172A", fg="#E5E7EB", sub="#94A3B8", card="#0B1220",
                border="#1F2937", accent="#60A5FA",
                tree_bg="#0B1220", tree_alt="#0E1526", tree_sel_bg="#1D4ED8", tree_sel_fg="#E5E7EB",
                hdr_bg="#111827", hdr_fg="#E5E7EB",
            ),
        }

        # ---- Estilos base / tema ----
        self.style = ttk.Style()
        try:
            self.style.theme_use("clam")
        except tk.TclError:
            pass
        self._apply_theme()  # configura estilos según paleta

        # ---- Layout raíz (grid) ----
        self.configure(background=self.palette["bg"])
        self.columnconfigure(0, weight=1)
        self.rowconfigure(4, weight=1)  # tabla crece

        # ---- Header ----
        header = ttk.Frame(self, padding=(14, 12, 14, 6), style="Card.TFrame")
        header.grid(row=0, column=0, sticky="ew", padx=10, pady=(10, 6))
        header.columnconfigure(1, weight=1)

        left = ttk.Frame(header, style="Card.TFrame")
        left.grid(row=0, column=0, sticky="w")
        ttk.Label(left, text="Gestión de Usuarios", style="Title.TLabel").pack(side="left")
        ttk.Label(left, text="(PostgreSQL)", style="Sub.TLabel").pack(side="left", padx=(8, 0))

        right = ttk.Frame(header, style="Card.TFrame")
        right.grid(row=0, column=1, sticky="e")
        ttk.Label(right, text="Tema", style="Sub.TLabel").pack(side="left", padx=(0, 6))
        ttk.Checkbutton(
            right, text="Oscuro", style="Switch.TCheckbutton",
            command=self._toggle_theme, variable=self.theme, onvalue="dark", offvalue="light"
        ).pack(side="left")

        # ---- Barra de búsqueda ----
        search_bar = ttk.Frame(self, padding=(14, 6, 14, 8), style="Card.TFrame")
        search_bar.grid(row=1, column=0, sticky="ew", padx=10)
        search_bar.columnconfigure(1, weight=1)

        ttk.Label(search_bar, text="Buscar:", style="Body.TLabel").grid(row=0, column=0, sticky="w")
        self.search_var = tk.StringVar()
        self.search_entry = ttk.Entry(search_bar, textvariable=self.search_var, style="Search.TEntry")
        self.search_entry.grid(row=0, column=1, sticky="ew", padx=(8, 0))
        self.search_entry.bind("<KeyRelease>", lambda _e: self.load_users())
        # placeholder en búsqueda
        self._ph_text = "Buscar por username…"
        self._ph_active = False
        self._set_placeholder()
        self.search_entry.bind("<FocusIn>", self._ph_focus_in)
        self.search_entry.bind("<FocusOut>", self._ph_focus_out)

        # ---- Formulario ----
        form = ttk.Frame(self, padding=(14, 8, 14, 8), style="Card.TFrame")
        form.grid(row=2, column=0, sticky="ew", padx=10)
        for i in range(6):
            form.columnconfigure(i, weight=1 if i in (1, 3, 5) else 0)

        self.id_var = tk.StringVar()
        self.user_var = tk.StringVar()
        self.pass_var = tk.StringVar()
        self.show_pass = tk.BooleanVar(value=False)

        ttk.Label(form, text="ID", style="Body.TLabel").grid(row=0, column=0, sticky="w")
        self.id_entry = ttk.Entry(form, textvariable=self.id_var, width=8, state="readonly")
        self.id_entry.grid(row=0, column=1, sticky="w", padx=(6, 12))

        ttk.Label(form, text="Username", style="Body.TLabel").grid(row=0, column=2, sticky="w")
        self.user_entry = ttk.Entry(form, textvariable=self.user_var)
        self.user_entry.grid(row=0, column=3, sticky="ew", padx=(6, 12))

        ttk.Label(form, text="Password", style="Body.TLabel").grid(row=0, column=4, sticky="w")
        self.pass_entry = ttk.Entry(form, textvariable=self.pass_var, show="•")
        self.pass_entry.grid(row=0, column=5, sticky="ew", padx=(6, 0))
        ttk.Checkbutton(
            form, text="Mostrar", variable=self.show_pass, command=self._toggle_password,
            style="Switch.TCheckbutton"
        ).grid(row=0, column=6, padx=(10, 0))

        # ---- Botonera ----
        btns = ttk.Frame(self, padding=(14, 2, 14, 10), style="Card.TFrame")
        btns.grid(row=3, column=0, sticky="ew", padx=10)
        btns.columnconfigure(8, weight=1)
        ttk.Button(btns, text="Agregar", style="Accent.TButton", command=self.on_add).grid(row=0, column=0)
        ttk.Button(btns, text="Actualizar", command=self.on_update).grid(row=0, column=1, padx=6)
        ttk.Button(btns, text="Eliminar", command=self.on_delete).grid(row=0, column=2)
        ttk.Button(btns, text="Limpiar", command=self.clear_form).grid(row=0, column=3, padx=6)
        ttk.Button(btns, text="Refrescar", command=self.load_users).grid(row=0, column=4)
        ttk.Label(btns, text="Doble click para cargar en el formulario", style="Sub.TLabel").grid(
            row=0, column=8, sticky="e"
        )

        # ---- Tabla ----
        table_frm = ttk.Frame(self, padding=(10, 0, 10, 0), style="Flat.TFrame")
        table_frm.grid(row=4, column=0, sticky="nsew")
        table_frm.rowconfigure(0, weight=1)
        table_frm.columnconfigure(0, weight=1)

        cols = ("id", "username", "password")
        self.tree = ttk.Treeview(
            table_frm, columns=cols, show="headings", selectmode="browse", style="Treeview"
        )
        self.tree.grid(row=0, column=0, sticky="nsew")
        self.tree.tag_configure("odd", background=self.palette["tree_alt"])
        self.tree.tag_configure("even", background=self.palette["tree_bg"])

        self.tree.heading("id", text="Id", command=lambda: self._sort_by("id"))
        self.tree.heading("username", text="Username", command=lambda: self._sort_by("username"))
        self.tree.heading("password", text="Password", command=lambda: self._sort_by("password"))

        self.tree.column("id", width=90, anchor="center")
        self.tree.column("username", width=320, anchor="w")
        self.tree.column("password", width=260, anchor="w")

        vsb = ttk.Scrollbar(table_frm, orient="vertical", command=self.tree.yview)
        hsb = ttk.Scrollbar(table_frm, orient="horizontal", command=self.tree.xview)
        self.tree.configure(yscroll=vsb.set, xscroll=hsb.set)
        vsb.grid(row=0, column=1, sticky="ns")
        hsb.grid(row=1, column=0, sticky="ew")

        # Bindings
        self.tree.bind("<<TreeviewSelect>>", self.on_select)
        self.tree.bind("<Double-1>", self._on_double_click)
        self.bind("<Delete>", lambda _e: self.on_delete())
        self.bind("<Control-Return>", lambda _e: self.on_add())

        # ---- Status bar ----
        self.status = ttk.Label(self, text="", anchor="w", style="Sub.TLabel")
        self.status.grid(row=5, column=0, sticky="ew", padx=12, pady=(6, 10))

        # Cierre limpio del pool al salir
        self.protocol("WM_DELETE_WINDOW", self.on_close)

        self._sort_desc = {"id": False, "username": False, "password": False}
        self.load_users()

    # ---------- THEME ----------
    def _apply_theme(self):
        self.palette = self.palettes[self.theme.get()]
        p = self.palette

        # ventana
        self.configure(bg=p["bg"])

        # ----- estilos base -----
        self.style.configure("TFrame", background=p["bg"])
        self.style.configure("Flat.TFrame", background=p["bg"], borderwidth=0)
        self.style.configure("Card.TFrame", background=p["card"], borderwidth=1, relief="solid")
        self.style.configure("TLabel", background=p["bg"], foreground=p["fg"])
        self.style.configure("Title.TLabel", background=p["card"], foreground=p["fg"], font=("Segoe UI", 14, "bold"))
        self.style.configure("Body.TLabel", background=p["card"], foreground=p["fg"], font=("Segoe UI", 10))
        self.style.configure("Sub.TLabel", background=p["card"], foreground=p["sub"], font=("Segoe UI", 9))

        # Entries
        self.style.configure(
            "TEntry",
            fieldbackground=p["card"], background=p["card"], foreground=p["fg"],
            insertcolor=p["fg"], bordercolor=p["border"], lightcolor=p["border"], darkcolor=p["border"]
        )
        self.style.configure("Search.TEntry", fieldbackground=p["card"])

        # Buttons (normal)
        self.style.configure("TButton", padding=8, background=p["card"], foreground=p["fg"], borderwidth=1)
        self.style.map("TButton",
            background=[("active", p["hdr_bg"]), ("pressed", p["hdr_bg"])],
            foreground=[("disabled", p["sub"]), ("!disabled", p["fg"])]
        )

        # Accent button (Agregar) con hover/pressed
        accent = p["accent"]
        accent_hover = _tint(accent, 1.08 if self.theme.get() == "light" else 0.90)
        self.style.configure("Accent.TButton", padding=8, background=accent, foreground="#ffffff", borderwidth=1)
        self.style.map("Accent.TButton",
            background=[("active", accent_hover), ("pressed", accent_hover), ("disabled", p["border"])],
            foreground=[("disabled", "#bbbbbb"), ("!disabled", "#ffffff")]
        )

        # Checkbuttons (texto estable)
        for name in ("TCheckbutton", "Switch.TCheckbutton"):
            self.style.configure(name, background=p["card"], foreground=p["fg"])
            self.style.map(name,
                foreground=[("disabled", p["sub"]), ("!disabled", p["fg"]), ("selected", p["fg"]), ("active", p["fg"])],
                background=[("active", p["card"]), ("selected", p["card"])]
            )

        # Treeview
        self.style.configure(
            "Treeview",
            background=p["tree_bg"], fieldbackground=p["tree_bg"], foreground=p["fg"],
            rowheight=28, bordercolor=p["border"], lightcolor=p["border"], darkcolor=p["border"]
        )
        self.style.map("Treeview",
            background=[("selected", p["tree_sel_bg"])],
            foreground=[("selected", p["tree_sel_fg"])]
        )
        self.style.configure("Treeview.Heading",
            background=p["hdr_bg"], foreground=p["hdr_fg"], relief="flat", font=("Segoe UI", 10, "bold")
        )
        self.style.map("Treeview.Heading", background=[("active", p["hdr_bg"])])

        # actualizar tags si ya existe la tabla
        if hasattr(self, "tree"):
            self.tree.tag_configure("odd", background=p["tree_alt"])
            self.tree.tag_configure("even", background=p["tree_bg"])
            self._repaint_stripes()
            self.tree.update_idletasks()

    def _toggle_theme(self):
        self._apply_theme()
        self.load_users()

    # ---------- Placeholder búsqueda ----------
    def _set_placeholder(self):
        if not self.search_var.get():
            self._ph_active = True
            self.search_entry.insert(0, self._ph_text)
            self.search_entry.configure(foreground=self.palette["sub"])
    def _ph_focus_in(self, _e):
        if self._ph_active:
            self.search_entry.delete(0, "end")
            self.search_entry.configure(foreground=self.palette["fg"])
            self._ph_active = False
    def _ph_focus_out(self, _e):
        if not self.search_var.get():
            self._set_placeholder()

    # -------- Utils --------
    def _toggle_password(self):
        self.pass_entry.configure(show="" if self.show_pass.get() else "•")

    def _on_double_click(self, _evt):
        self.on_select(_evt)

    def _current_filter(self) -> str:
        if getattr(self, "_ph_active", False):
            return ""
        return self.search_var.get().strip().lower()

    def _filtered(self, usuarios):
        q = self._current_filter()
        if not q:
            return usuarios
        return [u for u in usuarios if (u.username or "").lower().find(q) >= 0]

    def _repaint_stripes(self):
        for i, iid in enumerate(self.tree.get_children("")):
            self.tree.item(iid, tags=("odd" if i % 2 else "even",))

    # -------- Data --------
    def load_users(self):
        try:
            usuarios = self._filtered(UsuarioDAO.seleccionar())
            self.tree.delete(*self.tree.get_children())
            for idx, u in enumerate(usuarios):
                tag = "odd" if idx % 2 else "even"
                self.tree.insert("", "end", values=(u.id_usuario, u.username, u.password), tags=(tag,))
            self.status.configure(text=f"{len(usuarios)} usuario(s) • filtro: '{self._current_filter() or '—'}'")
        except AppError as e:
            messagebox.showerror("Error", f"No se pudo cargar: {e}")

    def on_select(self, _evt):
        sel = self.tree.selection()
        if not sel:
            return
        idu, user, pwd = self.tree.item(sel[0], "values")
        self.id_var.set(idu); self.user_var.set(user); self.pass_var.set(pwd)

    def clear_form(self):
        self.id_var.set(""); self.user_var.set(""); self.pass_var.set("")
        self.tree.selection_remove(self.tree.selection())
        self.user_entry.focus_set()

    def _sort_by(self, col: str):
        data = [(self.tree.set(k, col), k) for k in self.tree.get_children("")]
        if col == "id":
            data.sort(key=lambda t: int(t[0]), reverse=getattr(self, "_sort_desc", {}).get(col, False))
        else:
            data.sort(key=lambda t: str(t[0]).lower(), reverse=getattr(self, "_sort_desc", {}).get(col, False))
        for i, (_, k) in enumerate(data):
            self.tree.move(k, "", i)
        self._sort_desc[col] = not self._sort_desc.get(col, False)
        self._repaint_stripes()

    # -------- Actions --------
    def on_add(self):
        u, p = self.user_var.get().strip(), self.pass_var.get().strip()
        if not u or not p:
            messagebox.showwarning("Validación", "username y password son obligatorios."); return
        try:
            new_id = UsuarioDAO.insertar(Usuario(username=u, password=p))
            messagebox.showinfo("OK", f"Insertado con id {new_id}")
            self.load_users(); self.clear_form()
        except AppError as e:
            messagebox.showerror("Error", str(e))

    def on_update(self):
        if not self.id_var.get():
            messagebox.showwarning("Validación", "Seleccioná un registro de la tabla."); return
        try:
            u = Usuario(id_usuario=int(self.id_var.get()),
                        username=self.user_var.get().strip(),
                        password=self.pass_var.get().strip())
            if not u.username or not u.password:
                messagebox.showwarning("Validación", "username y password son obligatorios."); return
            UsuarioDAO.actualizar(u)
            messagebox.showinfo("OK", "Actualizado correctamente")
            self.load_users()
        except NotFoundError as e:
            messagebox.showwarning("Aviso", str(e))
        except AppError as e:
            messagebox.showerror("Error", str(e))

    def on_delete(self):
        if not self.id_var.get():
            messagebox.showwarning("Validación", "Seleccioná un registro de la tabla."); return
        if not messagebox.askyesno("Confirmar", "¿Eliminar el usuario seleccionado?"):
            return
        try:
            UsuarioDAO.eliminar(int(self.id_var.get()))
            messagebox.showinfo("OK", "Eliminado")
            self.load_users(); self.clear_form()
        except NotFoundError as e:
            messagebox.showwarning("Aviso", str(e))
        except AppError as e:
            messagebox.showerror("Error", str(e))

    def on_close(self):
        try:
            Conexion.cerrar_conexiones()
        finally:
            self.destroy()


if __name__ == "__main__":
    App().mainloop()
