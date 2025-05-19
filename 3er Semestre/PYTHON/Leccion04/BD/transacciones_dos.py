import psycopg2 as bd # Esto para poder conectarnos al postgres

conexion = bd.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    conexion.autocommit = False # True para que se autocommitée o directamente no colocarlo y hacerlo manual
    # se inicia la transacción
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    #valores = ('Arnold', 'Schwarzenegger', 'aschwarzenegger@gmail.com') # la variable apellido esta restringida a 10 caracteres.
    valores = ('Arnold', 'Schwarzenegger', 'aschwarzenegger@gmail.com') # se quitó la limitación
    cursor.execute(sentencia, valores)  # De esta manera se ejecuta la sentencia

    sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    valores = ('Juan', 'Juarez', 'jjuarez@gmail.com', 12)
    cursor.execute(sentencia, valores)  # De esta manera se ejecuta la sentencia

    conexion.commit() # Hace el commit manualmente
    # finaliza la transacción
    print('Termina la transacción')

except Exception as e:
    conexion.rollback()
    print(f'Ocurrió un error: {e}Se hizo un rollback')
finally:
    conexion.close()