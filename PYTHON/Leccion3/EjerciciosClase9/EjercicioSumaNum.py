
'''
Ejercicio:
Calcular la suma de "N" primeros números.
'''

n = int(input("Digite la cantidad de números a sumar: "))
suma = 0

for i in range(n): # con +1 no tiene en cuenta el cero
    # 0 + 1 + 2  ... + n
    suma += i

print(f'El total de la suma es: {suma}')