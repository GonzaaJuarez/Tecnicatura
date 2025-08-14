class AppError(Exception):
    """Error base de la aplicación."""

class DBError(AppError):
    """Errores de base de datos."""

class ValidationError(AppError):
    """Datos inválidos por parte del usuario."""

class NotFoundError(AppError):
    """Recurso no encontrado."""
