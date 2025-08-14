from dataclasses import dataclass

@dataclass
class Usuario:
    id_usuario: int | None = None
    username: str | None = None
    password: str | None = None

    def __str__(self):
        return f"Usuario(id={self.id_usuario}, username='{self.username}')"
