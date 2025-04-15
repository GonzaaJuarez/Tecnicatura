"""
#Ejercicio 1: Escribir la expesión en forma de expresión algoritmica
a = float(input("Digite el valor de a: "))
b = float(input("Digite el valor de b: "))
c = float(input("Digite el valor de c: "))
resultado = ((a**3)*((b**2)-(2*a*c)))/(2*b)
print(f'El resultado es: {resultado}')
"""

'''
#Ejercicio 2: Determinar la solución lógica para la operación
a = float(input("Digite el valor de a: "))
b = float(input("Digite el valor de b: "))
resultado = ((3+5*8)<3 and ((-6/3*4)+2)) or (a > b)
print(f'El resultado es: {resultado}')
'''

'''
#Ejercicio 3: Intercambiar el valor de dos variables
a = int(input("Digite el valor para a: "))
b = int(input("Digite el valor para b: "))
a , b = b , a
print(f'El valor de a es: {a}')
print(f'El valor de b es: {b}')

#aux = a
#a = b
#b = aux
'''


#Ejercicio 4: Área y Longitud de un círculo
import math
radio = float(input("Digite el valor del radio: "))
area = math.pi * (radio ** 2)
longitud = 2 * math.pi * radio

print(f"El área del círculo es: {area}")
print(f"La longitud de la circunferencia es: {longitud}")