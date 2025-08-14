# CRUD de Usuarios (Python + PostgreSQL + Tkinter)

Pequeña app para gestionar usuarios con dos interfaces: **CLI** (consola) y **GUI** (Tkinter/ttk).  
Usa **psycopg3** con **pool de conexiones**, configuración por **`.env`**, y patrón **DAO**.

---

## Requisitos
- Python **3.11+** (probado con 3.13)
- PostgreSQL **12+** (pgAdmin opcional)
- Windows / macOS / Linux

---

## Estructura del proyecto
```text
laboratorio_usuarios/
├─ .env                    # variables de entorno (NO subir al repo)
├─ requirements.txt
├─ crear_tabla.sql         # script para crear tabla y datos de ejemplo
├─ app_gui.py              # interfaz gráfica (Tkinter/ttk)
├─ menu_app_usuario.py     # interfaz por consola
├─ conexion.py             # pool de conexiones (psycopg_pool)
├─ cursor_del_pool.py      # context manager (abre cursor, commit/rollback)
├─ usuario.py              # entidad Usuario (dataclass)
├─ usuario_dao.py          # DAO con CRUD
├─ excepciones.py          # jerarquía de errores
└─ logger_base.py          # logger simple
```

## Instalación
-Ubicate en laboratorio_usuarios/.

## 1) Crear y activar venv
### Windows (PowerShell)
- py -m venv .venv
- .venv\Scripts\Activate.ps1


## 2) Instalar dependencias
- pip install -r requirements.txt


## 3) Configurar .env (crear en la raíz)
- DB_NAME=test_db
- DB_USER=postgres
- DB_PASSWORD=tu_clave
- DB_HOST=127.0.0.1
- DB_PORT=5432
- DB_MIN_CON=1
- DB_MAX_CON=5
- DB_SSLMODE=disable
- ### Opcional
- LOG_LEVEL=INFO


## 4) Crear la base y la tabla
- Crear la base test_db (o la que definas en DB_NAME).
- Ejecutar crear_tabla.sql (pgAdmin o psql):

- sql
- CREATE TABLE IF NOT EXISTS public.usuario(
  - id_usuario SERIAL PRIMARY KEY,
  - username   VARCHAR(50) UNIQUE NOT NULL,
  - password   VARCHAR(50) NOT NULL
- );

- INSERT INTO public.usuario(username, password)
- VALUES ('jperez', '123'), ('kgomez', '456')
- ON CONFLICT (username) DO NOTHING;



## Uso
- CLI
- python menu_app_usuario.py

- Opciones: listar, agregar, actualizar, eliminar, salir.

## GUI (Tkinter)
- python app_gui.py

- Búsqueda con placeholder (filtra por username).
- Orden por columna (clic en el encabezado).
- Filas cebra y tema claro/oscuro (switch).
- Doble click en una fila → carga en el formulario.
- Atajos: Ctrl+Enter agrega, Supr elimina.
- Cierre limpio del pool al salir.
