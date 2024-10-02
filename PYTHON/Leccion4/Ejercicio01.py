'''
    Ejercicio 1:
    Llenar una lista con los números del 1 al 50,
    Mostrar la lista con el ciclo for,
    Los elementos deben mostrarse de la siguiente forma:
    1-2-3-4-5-....-50
'''

# Primera forma
lista = []
i = 1
while i <= 50:
    lista.append(i)
    i += 1
'''
#Forma con range
lista = list(range(1, 51))
'''
for i in lista:
    print(i,end='-')