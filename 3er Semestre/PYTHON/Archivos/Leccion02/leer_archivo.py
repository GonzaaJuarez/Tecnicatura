# Las letras son 'w' de write, 'r' de read, 'a'de append' y 'x' para crear un archivo que no existe.

archivo = open('Prueba.txt', 'r', encoding='utf8') # la 'r' es de read
# print(archivo.read())
# print(archivo.read(16)) # si se le asigna un valor, muestra ese número de caracteres.
# print(archivo.read(11)) # si se vuelve a llamar con un valor, continua donde quedo la vez anterior.
# print(archivo.readline()) # lee la primer linea.
# print(archivo.readline()) # lee la segunda linea.

# Iterar cada una de las lineas del archivo:
# for linea in archivo:
    # print(linea) # iteramos todos los elementos del archivo
# print(archivo.readlines()) # accedemos al archivo como si fuera una lista
# print(archivo.readlines()[0]) # si se asigna un valor muestra la linea que le corresponde.
# comienzan por 0, recordar

# Copiar el archivo:
archivo2 = open('Copia.txt', 'w', encoding='utf8')
archivo2.write(archivo.read())
# Las veces que se ejecute se va a seguir copiando la misma información.
# para que esto no ocurra, cambiamos la 'a' por la 'w'.
archivo.close() # Cerramos el primer archivo.
archivo2.close() # Cerramos el segundo archivo.
print('Se ha terminado el proceso de leer y copiar archivos.')
