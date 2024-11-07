'''
    Definir una clase padre llamada Vehiculo y dos clases hijas llamadas Auto y bicicleta, las cuales
    heredan de la clase Vehiculo. La clase padre debe tener los sigientes atributos y métodos:

    Vehiculo (Clase Padre):
    - Atributos(color, ruedas)
    - Métodos(__init__(color, ruedas) y __str__())

    Auto (Clase Hija)
    - Atributos(Velocidad (Km/h))
    - Métodos(__init__(color, ruedas, velocidad) y __str__())

    Bicicleta (Clase Hija)
    - Atributos(tipo(urbana/montañe/etc.))
    - Métodos(__init__(color, ruedas, tipo) y __str__())

    Crear un objeto de cada clase
'''
class Vehiculo:
    def __init__(self, color, ruedas):
        self._color = color
        self._ruedas = ruedas

    @property
    def color(self):
        return self._color
    @color.setter
    def color(self, color):  # Método Setter
        self._color = color

    @property
    def ruedas(self):
        return self._ruedas
    @ruedas.setter
    def ruedas(self, ruedas):
        self._ruedas = ruedas

    def __str__(self):
        return f'Color: {self._color},Ruedas: {self._ruedas}'

class Auto(Vehiculo):
    def __init__(self, color, ruedas, velocidad):
        super().__init__(color, ruedas)
        self._velocidad = velocidad

    @property
    def velocidad(self):
        return self._velocidad

    @velocidad.setter
    def velocidad(self, velocidad):
        self._velocidad = velocidad

    def __str__(self):
        return f'{super().__str__()}, Velocidad: {self._velocidad} km/h'

class Bicicleta(Vehiculo):
    def __init__(self, color, ruedas, tipo):
        super().__init__(color, ruedas)
        self._tipo = tipo

    @property
    def tipo(self):
        return self._tipo

    @tipo.setter
    def tipo(self, tipo):
        self._tipo = tipo

    def __str__(self):
        return f'{super().__str__()}, Tipo: {self._tipo}'

# Objeto Vehiculo
vehiculo1 = Vehiculo('Rojo', 4)
print(f'Vehiculo:\n {vehiculo1}')

# Objeto Auto
auto1 = Auto('Negro', 4, 200)
print(f'Auto:\n {auto1}')

# Objeto Bicicleta
bicicleta1 = Bicicleta('Azul', 2, 'Carrera')
print(f'Bicicleta:\n {bicicleta1}')
