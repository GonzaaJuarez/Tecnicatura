class Persona:  # Creamos una clase
    def __init__(self, nombre, apellido, dni, edad, *args, **kwargs):  # Método Init Dunder
        self.nombre = nombre
        self.apellido = apellido
        self._dni = dni # este atributo está encapsulado de manera sugerida
        self.edad = edad
        # no es común asignar valores por default
        self.args = args
        self.kwargs = kwargs

    def mostrar_detalle(self): #self es igual a this
        print(f'La clase Persona tiene los siguientes datos: {self.nombre} {self.apellido} de {self.edad} años, la dirección es {self.args}, los datos importantes son {self.kwargs}')


print(type(Persona))  # muestra que es una clase
print(Persona)

persona1 = Persona('Gonzalo', 'Juarez',47367845, 24)
print(persona1.nombre)
print(persona1.apellido)
print(persona1.edad)

persona2 = Persona('Leonel', 'Argente', 43785325,19)
print(f'El objeto1 de la clase persona: {persona1.nombre} {persona1.apellido}, su edad es: {persona1.edad}')
print(f'El objeto2 de la clase persona: {persona2.nombre} {persona2.apellido}, su edad es: {persona2.edad}')

persona1.nombre = 'Franco'
persona1.apellido = 'Rebeco'
persona1.edad = 23

print(f'El objeto1 modificado de la clase persona: {persona1.nombre} {persona1.apellido}, su edad es: {persona1.edad}')

# Los atributos son: características.
# Los métodos son: el comportamiento que van a tener los objetos (acciones).
# La referencia en estos casos se pasa de manera automática
persona1.mostrar_detalle()
persona2.mostrar_detalle()

# La referencia en este caso se pasa de manera manual
Persona.mostrar_detalle(persona1) # no se utiliza

# Crear un atributo superficial para el objeto persona 1
persona1.telefono = 2661248167
print(f'Este es el teléfono: {persona1.telefono}, de {persona1.nombre}')
# print(persona2.telefono) # No existe ese atributo para persona 2

persona3 = Persona('Rogelio','Romero',67365984, 22, 'Teléfono', '261646721', 'Calle Lopez', 823, 'Manzana', 77, 'Casa', 18, Altura=1.83, Peso=105, CFavorito='Azul', Auto='Citroen', Modelo=2021)
persona3.mostrar_detalle()
# print(persona3._dni) # esto no se debe utilizar, esto dice que lo desconocemos (está encapsulado)
# si colocamos __dni, el atributo queda totalmente encapsulado, y ya no se puede acceder
persona4 = Persona('Gonzalo','Juarez',42856543, 24, 'Teléfono', '2836495466', 'Calle San Martín', 1233, 'Manzana', 18, 'Casa', 2, Altura=1.68, Peso=55, CFavorito='Naranja', Auto='Fiat', Modelo=2022)
persona4.mostrar_detalle()





