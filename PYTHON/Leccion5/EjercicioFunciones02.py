'''
    Ejercicio 2:
    Función con *args para multiplicar
    Crear una función para multiplicar los valores recibidos de tipo numérico,
    utilizando argumentos variables *args como parámetro de la función y regresar
    como resultado la multiplicación de todos los valores pasados como argumentos.
'''

def multiplicar(*args):  # Parámetros indefinidos.
    resultado = 1
    for valor in args:
        resultado *= valor
    return resultado

print(f'La suma de los números es: {multiplicar(2,3,4,5)}')