class Persona:
    contador_personas = 0  # Variable de clase

    @classmethod
    def generar_siguiente_valor(cls):
        cls.contador_personas += 1
        return cls.contador_personas

    def __init__(self, nombre, edad):
        self.idPersona = Persona.generar_siguiente_valor()
        self.nombre = nombre
        self.edad = edad


    def __str__(self):
        return f'Persona {self.idPersona} - {self.nombre}, {self.edad} años'


persona1 = Persona('Gonzalo',24)
print(persona1)
persona2 = Persona('Franco', 32)
print(persona2)
persona3 = Persona('Valentín', 27)
print(persona3)
Persona.generar_siguiente_valor()  # Al llamarlo incrementa, por lo que se salta la posición 4.
persona4 = Persona('Rodrigo', 48)
print(persona4)

print(f'Valor contador personas: {Persona.contador_personas}')

