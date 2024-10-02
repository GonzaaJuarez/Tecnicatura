'''
    Ejercicio 7:
    Realizar un juego para adivina un número.
    Generar un número aleatorio entre 1-100 y pedir números al usuario, indicando
    si es mayor o menor con respecto al número N. El proceso termina cuando el usuario
    acierta y se muestra el número de intentos
'''

import random
aleatorio = random.randint(0, 100)# toma de 0 a 100, es decir incluye al 0 y al 100
contador = 0
while True:
    num = int(input('Digite un número: '))
    contador += 1
    if num > aleatorio:
        print(f'\nNo es el número, Digite uno MENOR')
    elif num < aleatorio:
        print(f'\nNo es el número, Digite uno MAYOR')
    else:
        print(f'\n¡¡FELICIDADES!!\nAcabas de adivinar el número {aleatorio}')
        break # rompe el ciclo
print(f'\nNúmero de intentos: {contador}')