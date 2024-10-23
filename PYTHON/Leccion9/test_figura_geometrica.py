from FiguraGeometrica import FiguraGeometrica
from Cuadrado import Cuadrado
from Rectangulo import Rectangulo

print('Creacion de objeto clase Cuadrado'.center(50,'_'))
cuadrado1 = Cuadrado(5, 'Azul')  # los lados no pueden ser ni negativos ni mayores que 10
cuadrado1.ancho = -10  # como no es correcto, no lo cambia, y queda el valor anterior
#cuadrado1.alto = -10  # como no es correcto, no lo cambia, y queda el valor anterior
print(f'Ancho: {cuadrado1.ancho}')
print(f'Alto: {cuadrado1.alto}')
print(f'Calculo del área del cuadrado: {cuadrado1.calcular_area()}')

# MRO = Method Resolution Order
print(Cuadrado.mro())

print(cuadrado1)

print('CUADRADO 2')
cuadrado2 = Cuadrado(9, 'Naranja')  # los lados no pueden ser ni negativos ni mayores que 10
print(cuadrado2)
print(f'Calculo del área del cuadrado: {cuadrado2.calcular_area()}')

print('Creacion de objeto clase Rectangulo'.center(50,'_'))
print('RECTÁNGULO 1')
rectangulo1 = Rectangulo(8, 5, 'Verde')  # ancho y alto no pueden ser negativos, ni mayores que 10
rectangulo1.ancho = 15  # como no es correcto, no lo cambia, y queda el valor anterior
print(rectangulo1)
print(f'Calculo del área del rectángulo: {rectangulo1.calcular_area()}')

print('RECTÁNGULO 2')
rectangulo2 = Rectangulo(3, 4, 'Morado')  # ancho y alto no pueden ser negativos, ni mayores que 10
print(rectangulo2)
print(f'Calculo del área del rectángulo: {rectangulo2.calcular_area()}')

# figura1 = FiguraGeometrica(); # NO se puede iniciar, es abstracta

print(Cuadrado.mro())