'''
    Ejercicio 01:
    Crear una función para sumar los valores recibidos de tipo numéricos
    Utilizando argumentos variables (*args) como parámetro de la función
    Agregar como resultado la suma de todos los valores pasados como argumentos.
'''

def sumar(*args):  # Parámetros indefinidos.
    resultado = 0
    for valor in args:
        resultado += valor
    return resultado

print(f'La suma de los números es: {sumar(1,2,3,4,5)}')