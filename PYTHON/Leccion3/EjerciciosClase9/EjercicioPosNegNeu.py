
'''
Ejercicio:
Leer 10 números e imprimir cuantos de ellos son positivos,
cuantos negativos y cuantos neutros.
'''

positivos = 0
negativos = 0
neutro = 0

for i in range(10):
    num = int(input(f"Digite el número {i + 1}: "))
    if num > 0:
        positivos += 1
    elif num < 0:
        negativos += 1
    else:
        neutro += 1

print(f'Los números positivos son: {positivos}')
print(f'Los números negativos son: {negativos}')
print(f'Los números neutros son: {neutro}')
