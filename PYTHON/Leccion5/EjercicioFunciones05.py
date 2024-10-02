'''
    Ejercicio 5:
    Convertidor de temperaturas.
    Realizar dos funciones para convertir de grados Celsius a Fahrenheit y viceversa.
    Investigar las fórmulas.
'''

def celsius_fahrenheit(celsius):# Celsius a Fahrenheit:
    return ((celsius * 9) / 5) + 32
def fahrenheit_celsius(fahrenheit): # Fahrenheit a Celsius:
    return (fahrenheit - 32) * 5 / 9

# Celsius:
celsius = float(input('Digite el valor en Celsius: '))
print(f'{celsius} °C es equivalente a {celsius_fahrenheit(celsius):.2f} °F')
# el .2f muestra dos números después de la coma

# Fahrenheit:
fahrenheit = float(input('Digite el valor en Fahrenheit: '))
resultado = fahrenheit_celsius(fahrenheit)
print(f'{fahrenheit} °F es equivalente a {resultado:.2f} °C')