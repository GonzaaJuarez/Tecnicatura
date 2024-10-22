from Cuadrado import Cuadrado
from Rectangulo import Rectangulo

cuadrado1 = Cuadrado(5, 'Azul')
print(f'Ancho: {cuadrado1.ancho}')
print(f'Alto: {cuadrado1.alto}')
print(f'Calculo del área del cuadrado: {cuadrado1.calcular_area()}')

# MRO = Method Resolution Order
print(Cuadrado.mro())

print(cuadrado1)

print('CUADRADO 2')
cuadrado2 = Cuadrado(9, 'Naranja')
print(cuadrado2)
print(f'Calculo del área del cuadrado: {cuadrado2.calcular_area()}')

print('RECTÁNGULO 1')
rectangulo1 = Rectangulo(8, 5, 'Verde')
print(rectangulo1)
print(f'Calculo del área del rectángulo: {rectangulo1.calcular_area()}')

print('RECTÁNGULO 2')
rectangulo2 = Rectangulo(3, 4, 'Morado')
print(rectangulo2)
print(f'Calculo del área del rectángulo: {rectangulo2.calcular_area()}')