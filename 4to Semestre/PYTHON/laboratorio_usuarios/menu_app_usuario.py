from logger_base import log
from usuario import Usuario
from usuario_dao import UsuarioDAO
from excepciones import AppError, ValidationError, NotFoundError
from conexion import Conexion

def pedir_int(msg: str) -> int:
    try:
        return int(input(msg))
    except Exception:
        raise ValidationError("Debes ingresar un número válido.")

def listar():
    usuarios = UsuarioDAO.seleccionar()
    if not usuarios:
        print("No hay usuarios.")
    for u in usuarios:
        print(f"{u.id_usuario:>3} | {u.username:15} | {u.password}")

def agregar():
    username = input("Username: ").strip()
    password = input("Password: ").strip()
    if not username or not password:
        raise ValidationError("username y password son obligatorios.")
    new_id = UsuarioDAO.insertar(Usuario(username=username, password=password))
    print(f"Insertado con id {new_id}")

def actualizar():
    idu = pedir_int("ID a actualizar: ")
    username = input("Nuevo username: ").strip()
    password = input("Nuevo password: ").strip()
    if not username or not password:
        raise ValidationError("username y password son obligatorios.")
    UsuarioDAO.actualizar(Usuario(id_usuario=idu, username=username, password=password))
    print("Actualizado correctamente")

def eliminar():
    idu = pedir_int("ID a eliminar: ")
    UsuarioDAO.eliminar(idu)
    print("Eliminado")

def main():
    opciones = {
        "1": ("Listar usuarios", listar),
        "2": ("Agregar usuario", agregar),
        "3": ("Actualizar usuario", actualizar),
        "4": ("Eliminar usuario", eliminar),
        "5": ("Salir", None),
    }
    try:
        while True:
            print("\n=== Menú Usuario ===")
            for k, (txt, _) in opciones.items():
                print(f"{k}) {txt}")
            op = input("Opción: ").strip()
            if op == "5":
                print("Hasta luego!")
                break
            accion = opciones.get(op, (None, None))[1]
            if not accion:
                print("Opción inválida.")
                continue
            try:
                accion()
            except NotFoundError as e:
                log.warning(str(e)); print(str(e))
            except ValidationError as e:
                log.warning(str(e)); print(f"Datos inválidos: {e}")
            except AppError as e:
                log.error(str(e)); print(f"Error de aplicación: {e}")
            except Exception as e:
                log.exception("Error inesperado"); print(f"Error inesperado: {e}")
    finally:
        # cierre limpio del pool (usa close() y wait() en tu conexion.py)
        Conexion.cerrar_conexiones()

if __name__ == "__main__":
    main()
