from ManejoArchivos import ManejoArchivos

# Manejo de contexto con with
# sintaxis simplificada, abre y cierra el archivo
# with open('Prueba.txt', 'r', encoding='utf8') as archivo:
    # print(archivo.read())
# no hace falta el try, ni el finally
# en el contexto del with lo que se ejecuta de manera automática
# utiliza diferentes métodos:
# __enter__ que es el que abre
# __exit__ que es el que cierra

with ManejoArchivos('Prueba.txt') as archivo:
    print(archivo.read())