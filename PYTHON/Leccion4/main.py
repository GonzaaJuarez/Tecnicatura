# LISTAS
'''
listas = Gonzalo, Santiago, Leonel, Franco
puedo tener cualquier tipo de elemento en un lista y a cada elemento de la misma
se le asigna un valor, comenzando por el cero.
'''
nombres = ['Leonel', 'Gonzalo','Franco', 'Orlando']
print(nombres)
print(nombres[1])
print(nombres[-1]) # recorre el array hacia atras, mostrando el último
print(nombres[0:2])
# imprime desde el valor ingresado a la izq hasta el valor de la derecha, sin terlo en cuenta
print(nombres[ :3])
# si el primero queda vacío, comienza desde el principio
# y el programa imprime los tres primeros
print(nombres[1: ])
# al dejar el segundo vacío, comienza desde el valor asignado y imprime hasta el final

# Modificar un valor
nombres[3] = 'Santiago'
print(nombres)

# iterar la lista
for nombre in nombres: # nombre en singular y la lista en plural
    print(nombre)
else:
    print('Se acabaron los elementos de la lista')

# Función LEN
# ¿Cuántos elementos hay en una lista?
print(len(nombres)) # comienza desde 1, por ende tiene 4 valores

# Agregar un elemento
nombres.append('Valentín') # se agrega al final
print(nombres)

# Agregar un elemento en un índice específico
nombres.insert(2, 'Martín')
nombres.insert(4, 'Gabriel')
print(nombres)

# Eliminar un elemendo
nombres.remove('Martín')
print(nombres)

# Eliminar el último elemento (última posición de la lista)
nombres.pop()
print(nombres) # chau valen

# Eliminar un índice específico
del nombres[3]
print(nombres)

# Eliminar todos los elementos
nombres.clear()
print(nombres)

# Eliminar la lista
del nombres
# print(nombres) # ya no existe, por lo que da error

# TUPLAS
# no se puede cambiar ni editar las tuplas
cocina = ('cuchara', 'cuchillo', 'tenedor')
print(cocina)

#Ejemplo
verduras = ('papas',) # Una tupla de un solo elemento
# ya que tiene coma, de no tener coma solo sería un string

# Función LEN: ¿Cuántos elementos hay en la tupla?
print(len(cocina))
# Imprimir un elemento
print(cocina[0])
# Imprimir un rango
print(cocina[0:2])
#Recorremos la tupla
for cocinar in cocina:
    print(cocinar, end=' ')
    # print usa \n para saltos de línea
    # end =' ' para evitar el salto de línea
else:
    print('')

# Convercion de Tupla a lista y de Lista a Tupla
cocinaLista = list(cocina)
print(cocinaLista)
cocina = tuple(cocinaLista)
print(cocina)

# Eliminar la tupla
del cocina
# print(cocina) # ya no existe, por lo que da error

# Tipo SET
planetas = {"Marte","Júpiter","Venus"}
print(planetas) # se imprimen en orden aleatorio
print(len(planetas)) # para saver el largo

# Revisar si un elemento existe dentro del set
print("Marte" in planetas) # not in o in, para saber si está o no

# Agregar un elemento
planetas.add("Tierra")
planetas.add("Tierra") # no se pueden agregar elementos duplicados
print(planetas)

# Eliminar elemento
planetas.remove("Júpiter")
print(planetas)
