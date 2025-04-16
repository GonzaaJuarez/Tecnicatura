# Declaramos una variable

try:
    archivo = open('Prueba.txt', 'w', encoding='utf8') # la 'w' es de write
    #puede abrir un archivo existente o en caso de que no exista crearlo
    # no hace falta especificar la ruta del archivo ya que se está trabajando en la misma carpeta.
    # archivo = open('C:\\Users\Gonzi\GitHub\Tecnicatura\\3er Semestre\PYTHON\Archivos\Leccion02\Prueba.txt', 'w', encoding='utf8')
    # tambien lo podría especificar así
    # se pone doble cuando el slash toma color jaja
    archivo.write('Programamos con diferentes tipos de archivos, ahora con .txt. \n')
    archivo.write('Los acentos son importantes para las palabras. \n')
    archivo.write('Como por ejemplo: acción, ejecución y producción. \n')
    archivo.write("Las letras son: \n'w' de write, que es para escribir en el archivo.\n'r' de read, que es para leer el archivo.\n'a' de append, que es opara anexar al archivo.\n'x' para crear un archivo que no existe.\n")
    archivo.write("'t' está es para texto o text.\n'b' para archivos binarios.\n'w+' y 'r+' que leen y escriben.\n")
    archivo.write('Saludos a todos. \n')
    archivo.write('Con esto terminamos.')
except Exception as e:
    print(e)
finally:
    archivo.close()  # con esto se cierra el archivo
# archivo.write('Tod0 quedo perfecto...') # El archivo ya está cerrado, no se puede editar