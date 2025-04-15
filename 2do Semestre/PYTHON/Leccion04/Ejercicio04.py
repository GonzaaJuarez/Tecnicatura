'''
    Ejercicio 4:
    Sumar números pares dentro de un rango
    Hacer un programa para sumar números pares dentro de un rango
    Por ejemplo:
    Suma de numeros pares del 2 al 30
    Suma = 240
'''

comienzo = int(input('Digite el número de inicio del rango: '))
fin = int(input('Digite le número final del rango: '))

suma = 0
for i in range(comienzo, fin + 1):
    if(i % 2 == 0):
        suma += i

print(f'\nLa suma de los números pares del rango({comienzo}-{fin}) es: {suma}')