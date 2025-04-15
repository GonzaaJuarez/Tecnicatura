'''
    Ejercicio 3:
    Insertar elementos y ordenarlos
    Pedir números y meterlos en una lista, hasta que el usuario introduzca un número cero
    Mostrar los números ordenados de mayor a menor.
'''

lista = []
bandera = False
while not bandera:
    num = int(input('Digite un número: '))
    if(num == 0):
        bandera = True
    else:
        lista.append(num)
lista.sort() # Función que ordena la lista
print(f'\nLista Ordenada:  \n{lista}')