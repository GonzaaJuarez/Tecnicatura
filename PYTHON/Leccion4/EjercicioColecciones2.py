'''
        Ejercicio 2:
    Operaciones de conjuntos con listas:
    Escriba un programa que tenga dos listas y que a continuación cree
    las siguientes listas (en las que no debe haber repetición)
    1 - Lista de palabras que aparecen en las listas
    2 - Lista de palabras que aparecen en la primera lista, pero no en la segunda
    3 - Lista de palabras que aparecen en la segunda lista, pero no en la primera
    4 - Lista de palabras que aparecen en ambas listas
'''

lista1 = [1, 2, 3, 4, 5, 4, 3, 2, 2, 1, 5]
lista2 = [4, 5, 6, 7, 8, 4, 5, 6, 7, 7, 8]

print("Lista1: ", lista1)
print("Lista2: ", lista2)

# Eliminar elementos repetidos
conjunto1 = set(lista1)
conjunto2 = set(lista2)

#  1 - Lista de palabras que aparecen en las listas
print("1 - Lista de palabras que aparecen en las listas")
union = list(conjunto1 | conjunto2)
print(union)

# 2 - Lista de palabras que aparecen en la primera lista, pero no en la segunda
print("2 - Lista de palabras que aparecen en la primera lista, pero no en la segunda")
soloLista1 = list(conjunto1 - conjunto2)
print(soloLista1)

# 3 - Lista de palabras que aparecen en la segunda lista, pero no en la primera
print("3 - Lista de palabras que aparecen en la segunda lista, pero no en la primera")
soloLista2 = list(conjunto2 - conjunto1)
print(soloLista2)

# 4 - Lista de palabras que aparecen en ambas listas
print("4 - Lista de palabras que aparecen en ambas listas")
ambasListas = list(conjunto1 & conjunto2)
print(ambasListas)
