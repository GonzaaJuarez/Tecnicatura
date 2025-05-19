import psycopg2 as bd # Esto para poder conectarnos al postgres

conexion = bd.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    # conexion.autocommit = False # True para que se autocommitée o directamente no colocarlo y hacerlo manual
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    valores = ('Maria', 'Gallardo', 'mgallardo@gmail.com')
    cursor.execute(sentencia, valores)  # De esta manera se ejecuta la sentencia
    conexion.commit() # Hace el commit manualmente
    print('Termina la transacción')
except Exception as e:
    conexion.rollback()
    print(f'Ocurrió un error: {e}, se hizo un rollback')
finally:
    conexion.close()