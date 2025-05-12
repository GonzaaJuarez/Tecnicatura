import psycopg2 # Esto para poder conectarnos al postgres

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'INSERT INTO persona (nombre, apellido, email)VALUES (%s, %s, %s)'
            valores = ('Carlos', 'Giménez', 'cgimenez@mgmail.com') # es una tupla
            cursor.execute(sentencia, valores)  # De esta manera se ejecuta la sentencia
            # conexion.commit() # guarda los datos en la bd, el with lo hace de manera automática
            registros_insertados = cursor.rowcount
            print(f'Los registros insertados son: {registros_insertados}')

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()  # pero no cierra la conexión
