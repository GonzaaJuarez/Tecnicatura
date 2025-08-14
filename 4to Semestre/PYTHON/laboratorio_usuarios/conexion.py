import os
from dotenv import load_dotenv
from psycopg_pool import ConnectionPool
from logger_base import log
from excepciones import DBError

load_dotenv()

def _must(k: str) -> str:
    v = os.getenv(k)
    if v is None or v == "":
        raise DBError(f"Falta variable de entorno: {k}")
    return v

class Conexion:
    _pool: ConnectionPool | None = None

    @classmethod
    def _crear_pool(cls):
        if cls._pool is None:
            try:
                DB_NAME = _must("DB_NAME")
                DB_USER = _must("DB_USER")
                DB_PASS = _must("DB_PASSWORD")
                DB_HOST = _must("DB_HOST")
                DB_PORT = int(_must("DB_PORT"))
                MIN_CON = int(os.getenv("DB_MIN_CON", "1"))
                MAX_CON = int(os.getenv("DB_MAX_CON", "5"))
                SSLMODE = os.getenv("DB_SSLMODE", "disable")

                dsn = (
                    f"dbname={DB_NAME} user={DB_USER} password={DB_PASS} "
                    f"host={DB_HOST} port={DB_PORT} sslmode={SSLMODE}"
                )
                cls._pool = ConnectionPool(dsn, min_size=MIN_CON, max_size=MAX_CON)
                log.info("Pool PostgreSQL creado (db=%s host=%s port=%s)", DB_NAME, DB_HOST, DB_PORT)
            except Exception as e:
                raise DBError(f"No se pudo crear el pool: {e}") from e
        return cls._pool

    @classmethod
    def obtener_pool(cls) -> ConnectionPool:
        return cls._crear_pool()

    @classmethod
    def cerrar_conexiones(cls):
        pool = cls._pool
        cls._pool = None
        if not pool:
            return
        try:
            # si no está cerrado, cerrarlo (close ya espera a los workers)
            if not getattr(pool, "closed", False):
                pool.close()
            log.info("Pool cerrado")
        except Exception as e:
            # si ya estaba cerrado o hubo un cierre concurrente, lo ignoramos
            log.debug(f"Cierre de pool: {e}")

