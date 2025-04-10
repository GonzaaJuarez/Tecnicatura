# Clase 1 Python
from NumerosIgualesException import NumerosIgualesException

resultado = None
# a = 10 # con '10' ocurre el TypeError
# b = 0
try:
    # Estas variables se encuentran solo dentro del bloque try
    a = int(input('Digite el primer número: '))
    b = int(input('Digite el segundo número:  '))

    if a == b:
        raise NumerosIgualesException('Son números iguales')

    resultado = a / b
except TypeError as e:
    print(f'TypeError - Ocurrió un ERROR: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un ERROR: {type(e)}')
except Exception as e: #podemos usar de forma más específica ZeroDivisionError
    print(f'Exception - Ocurrió un ERROR: {type(e)}')

else: # bloque opcional que se ejecuta en caso de que no haya ningún error
    print('No se arrojo ninguna excepción')
finally: # siempre se va a ejecutar
    print('Ejecución de esté bloque finally')

print(f'El resultado es: {resultado}')
# Al ocurrir un error, la variable mantiene el valor anterior, en este caso None
print('Seguimos...')