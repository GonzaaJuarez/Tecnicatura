from typing import List
from cursor_del_pool import CursorDelPool
from usuario import Usuario
from excepciones import DBError, NotFoundError

class UsuarioDAO:
    _SELECCIONAR = "SELECT id_usuario, username, password FROM usuario ORDER BY id_usuario"
    _INSERTAR    = "INSERT INTO usuario (username, password) VALUES (%s, %s) RETURNING id_usuario"
    _ACTUALIZAR  = "UPDATE usuario SET username=%s, password=%s WHERE id_usuario=%s"
    _ELIMINAR    = "DELETE FROM usuario WHERE id_usuario=%s"

    @classmethod
    def seleccionar(cls) -> List[Usuario]:
        try:
            with CursorDelPool() as cursor:
                cursor.execute(cls._SELECCIONAR)
                rows = cursor.fetchall()
                return [Usuario(*row) for row in rows]
        except Exception as e:
            raise DBError(f"Error al seleccionar usuarios: {e}") from e

    @classmethod
    def insertar(cls, usuario: Usuario) -> int:
        try:
            with CursorDelPool() as cursor:
                cursor.execute(cls._INSERTAR, (usuario.username, usuario.password))
                new_id = cursor.fetchone()[0]
                return new_id
        except Exception as e:
            raise DBError(f"Error al insertar usuario: {e}") from e

    @classmethod
    def actualizar(cls, usuario: Usuario) -> int:
        try:
            with CursorDelPool() as cursor:
                cursor.execute(cls._ACTUALIZAR, (usuario.username, usuario.password, usuario.id_usuario))
                if cursor.rowcount == 0:
                    raise NotFoundError("No existe el usuario a actualizar")
                return cursor.rowcount
        except NotFoundError:
            raise
        except Exception as e:
            raise DBError(f"Error al actualizar: {e}") from e

    @classmethod
    def eliminar(cls, id_usuario: int) -> int:
        try:
            with CursorDelPool() as cursor:
                cursor.execute(cls._ELIMINAR, (id_usuario,))
                if cursor.rowcount == 0:
                    raise NotFoundError("No existe el usuario a eliminar")
                return cursor.rowcount
        except NotFoundError:
            raise
        except Exception as e:
            raise DBError(f"Error al eliminar: {e}") from e
