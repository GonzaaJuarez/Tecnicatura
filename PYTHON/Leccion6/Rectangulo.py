class Rectangulo:
    '''
    Crear una clase llamada Rectángulo, debe tener 2 atributos: base y altura
    el nombre del método será calcular área utilizando la fórmula:
    área = altura * base. Los datos deben ser ingresados por el usuario
    y deben ser 3 objetos.
    '''
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    # Método para sumar
    def area(self):
        return self.base * self.altura

# UTILIZANDO UN CICLO FOR
for i in range(1,4):
    print(f'Calcular Area {i}')
    base = float(input(f'Digite un valor para la base del rectángulo ({i}): '))
    altura = float(input(f'Digite un valor para la altura del rectángulo ({i}): '))
    rectangulo = Rectangulo(base, altura)
    print(f'El área del rectángulo {i} es: {rectangulo.area():.2f}')

'''
# MANUAL 3 OBJETOS (3 áreas)
# Rectangulo 1
print(f'Calcular Area Rectángulo 1')
base1 = float(input(f'Digite un valor para la base del primer rectángulo: '))
altura1 = float(input(f'Digite un valor para la altura del primer rectángulo: '))
rectangulo1 = Rectangulo(base1, altura1)
print(f'El área del primer rectángulo es: {rectangulo1.area():.2f}')
# Rectangulo 2
print(f'Calcular Area Rectángulo 2')
base2 = float(input(f'Digite un valor para la base del segundo rectángulo: '))
altura2 = float(input(f'Digite un valor para la altura del segundo rectángulo: '))
rectangulo2 = Rectangulo(base1, altura1)
print(f'El área del segundo rectángulo es: {rectangulo2.area():.2f}')
# Rectangulo 3
print(f'Calcular Area Rectángulo 3')
base3 = float(input(f'Digite un valor para la base del tercer rectángulo: '))
altura3 = float(input(f'Digite un valor para la altura del tercer rectángulo: '))
rectangulo3 = Rectangulo(base1, altura1)
print(f'El área del tercer rectángulo es: {rectangulo3.area():.2f}')
'''
