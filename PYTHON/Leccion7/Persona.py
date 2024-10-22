class Persona:  # Clase que hereda de la clase Object
    def __init__(self, nombre, edad):
        self._nombre = nombre
        self._edad = edad

    @property
    def nombre(self):
        return self._nombre

    @nombre.setter
    def nombre(self, nombre):
        self._nombre = nombre

    @property
    def edad(self):
        return self._edad

    @edad.setter
    def edad(self, edad):
        self._edad = edad


    def __str__(self):  # Override = Sobreescribir
        return f'Persona: [Nombre: {self._nombre},Edad: {self._edad}]'


class Empleado(Persona):  # Clase hija de la clase Persona
    def __init__(self, nombre, edad, sueldo):
        super().__init__(nombre, edad)
        self._sueldo = sueldo

    @property
    def sueldo(self):
        return self._sueldo

    @sueldo.setter
    def sueldo(self, sueldo):
        self._sueldo = sueldo

    def __str__(self):
        return f'Empleado: [Sueldo: {self._sueldo}, {super().__str__()}]'

empleado1 = Empleado('Gonzalo', 24, 75000)
print(empleado1.nombre)
print(empleado1.edad)
print(empleado1.sueldo)

'''
    Tarea
    Encapsular los atributos y agregar los métodos Getter y Setters.
    Crear otro objeto, pasar los datos para nombre, edad y sueldo.
    Mostrar los datos, luego modificar y volver a mostrar.
'''
# Nuevo objeto
empleado2 = Empleado('Hector', 36, 148000)

# Imprimir Objeto Método GET
print(empleado2.nombre)
print(empleado2.edad)
print(empleado2.sueldo)

# Modificación de Objeto Método SET
empleado2.nombre = 'Franco'
empleado2.edad = 44
empleado2.sueldo = 418345

# Imprimir Objeto con modificaciones Método GET
print(empleado2.nombre)
print(empleado2.edad)
print(empleado2.sueldo)
