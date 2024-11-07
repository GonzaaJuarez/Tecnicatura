'''
    Ejercicio 2:
    Modificar los elementos de una lista
    Llenar una lista con los números del 1 al 10, luego modificar los elementos
    multiplicandolos por un valor ingresado por el usuario.
'''

# Creo e imprimo la lista
lista = list(range(1, 11))
print("Lista:")
for i in lista:
    print(i,end='-')

num= int(input("\nDigite el valor a multiplicar: "))
'''
for i in lista:
    multi = i * num
    print(multi,end='-')
'''

for indice, i in enumerate(lista): # Función para modificar los indices de una lista
    lista(indice) *= num # el iterador solo recorre los indices, en esta linea se multiplica

print(f'Lista con elementos multiplicados por {num}')
for i in lista:
    print(i,end='-')