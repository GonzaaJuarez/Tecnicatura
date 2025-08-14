from conexion import Conexion
from logger_base import log
from excepciones import DBError

class CursorDelPool:
    def __enter__(self):
        try:
            self._pool = Conexion.obtener_pool()
            # psycopg_pool expone un *context manager* para la conexión:
            self._ctx_conn = self._pool.connection()
            self._conn = self._ctx_conn.__enter__()
            self._cursor = self._conn.cursor()
            return self._cursor
        except Exception as e:
            raise DBError(f"No se pudo obtener cursor del pool: {e}") from e

    def __exit__(self, tipo_excepcion, valor_excepcion, detalle):
        try:
            if tipo_excepcion:
                self._conn.rollback()
                log.error("Rollback por excepción: %s", valor_excepcion)
            else:
                self._conn.commit()
        except Exception as e:
            raise DBError(f"Commit/Rollback error: {e}") from e
        finally:
            try:
                self._cursor.close()
                # devolver la conexión al pool
                self._ctx_conn.__exit__(tipo_excepcion, valor_excepcion, detalle)
            except Exception as e:
                raise DBError(f"Cerrar cursor/conn error: {e}") from e
