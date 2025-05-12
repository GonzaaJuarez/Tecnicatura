import psycopg2 # Esto para poder conectarnos al postgres

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
            valores = (
                ('Florencia', 'López', 'flopez@gmail.com', 6),
                ('Mateo', 'Várgas', 'mvargas@gmail.com', 5)
            )# es una tupla de tuplas
            cursor.executemany(sentencia, valores)  # De esta manera se ejecuta la sentencia
            registros_actualizados = cursor.rowcount
            print(f'Los registros actualizados son: {registros_actualizados}')

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()  # pero no cierra la conexión
