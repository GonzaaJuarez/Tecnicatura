
'''
    Ejercicio 1:
    Eliminar duplicados de una lista
    Escribir un programa donde tenga una lista y que a continuación
    elimine los elementos repetidos, por ultimo mostrar la lista
'''

lista = [13, 15, 13, "Gonzalo", 7, 72, 38, "Ariel", 15.4, "Gonzalo", 15.4]
print(lista)

conjunto = set(lista) # convertir la lista en conjunto
lista = list(conjunto) # convertir el conjunto a lista
# lista = list(set(lista))

# el conjunto no puede terner elementos repetidos, por lo que,
# al convertir la lista en conjunto y volverlo a convertir en lista
# se eliminarian los elementos repetidos
print(lista)
