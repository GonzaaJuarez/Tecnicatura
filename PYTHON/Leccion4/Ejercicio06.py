'''
    Ejercicio 6:
    Tabla de multiplicar
    Hacer un programa que pida un número por teclado y guarde en una lista su tabla
    de multiplicar hasta el 10. por ejemplo:
    se digita el 5: 5,10,15,20,25,30,35,40,45,50
'''

num = int(input('Digite un número: '))
lista = []
for i in range(1,11):
    lista.append(i * num)

# Formato de lista
print(f'\nTabla de multiplicar del número {num}: \n{lista}')
print('')
# Formato de tabla de multiplicar
for indice,i in enumerate(lista):
    print(f'{num} x {indice+1} = {lista[indice]}')