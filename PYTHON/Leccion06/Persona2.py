class Persona2:

    def __init__(self, nombre, apellido, edad):
        self._nombre = nombre
        self._apellido = apellido
        self._edad = edad

    def mostrar_detalles(self):
        print(f'Los datos a mostrar son los siguientes: {self._nombre} {self._apellido} de {self._edad} años')

    @property  # Decorador
    def nombre(self):  # Método Getter
        # print('Se está ejecutando el método Get') # para ver cuando se utiliza el método
        return self._nombre
    @nombre.setter
    def nombre(self, nombre):  # Método Setter
        # print('Se está ejecutando el método Set') # para ver cuando se utiliza el método
        self._nombre = nombre

    @property
    def apellido(self):  # Método Getter
        return self._apellido
    @apellido.setter
    def apellido(self, apellido):  # Método Setter
        self._apellido = apellido

    @property
    def edad(self):  # Método Getter
        return self._edad

    @edad.setter
    def edad(self, edad):  # Método Setter
        self._edad = edad

    def __del__(self):
        print(f'Se elimina: {self.nombre} {self.apellido} {self.edad}')


if __name__ == '__main__':
    persona1 = Persona2('Ariel', 'Juarez', 24)
    print(persona1.nombre)  # Usa Método get
    persona1.nombre = 'Gonzalo'  # Usa Método set
    print(persona1.nombre)  # Usa Método get
    print(persona1.mostrar_detalles())  # Usa el Método mostrar_detalle
    # Atributo de read-only, ya que no se puede modificar al no tener método set
    print(persona1.edad)

    '''
        Tarea:
        Crear tres objetos más, utilizando los métodos getter y setter
        Luego modificar cada variable (nombre, apellido y edad)
        Mostrar los cambios con el método mostrar_detalle.
    '''

    # Crear personas
    persona2 = Persona2('Martín', 'Lopez', 28)
    persona3 = Persona2('Sofía', 'Álvarez', 34)
    persona4 = Persona2('Luciano', 'Fernández', 22)

    # Imprimir personas
    print('Persona 2:')
    print(persona2.mostrar_detalles())
    print(persona2.nombre)
    print(persona2.apellido)
    print(persona2.edad)
    print('Persona 3:')
    print(persona3.mostrar_detalles())
    print(persona3.nombre)
    print(persona3.apellido)
    print(persona3.edad)
    print('Persona 4:')
    print(persona4.mostrar_detalles())
    print(persona4.nombre)
    print(persona4.apellido)
    print(persona4.edad)

    # Realizar cambios
    persona2.nombre = 'Federico'
    persona2.apellido = 'Pereira'
    persona2.edad = 40

    persona3.nombre = 'Valentina'
    persona3.apellido = 'Sánchez'
    persona3.edad = 18

    persona4.nombre = 'Ramiro'
    persona4.apellido = 'Gutiérrez'
    persona4.edad = 26

    # Imprimir cambios
    print('Persona 2 modificada:')
    print(persona2.mostrar_detalles())
    print(persona2.nombre)
    print(persona2.apellido)
    print(persona2.edad)
    print('Persona 3 modificada:')
    print(persona3.mostrar_detalles())
    print(persona3.nombre)
    print(persona3.apellido)
    print(persona3.edad)
    print('Persona 4 modificada:')
    print(persona4.mostrar_detalles())
    print(persona4.nombre)
    print(persona4.apellido)
    print(persona4.edad)

    # Comprobación del módulo principal en ejecución
    print(__name__)


