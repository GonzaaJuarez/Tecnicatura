import psycopg2 as bd # Esto para poder conectarnos al postgres

conexion = bd.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
            valores = ('Alejandro', 'Bravo', 'abravo@gmail.com')
            cursor.execute(sentencia, valores)  # De esta manera se ejecuta la sentencia

            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
            valores = ('Guillermo', 'Díaz', 'gdiaz@gmail.com', 13)
            cursor.execute(sentencia, valores)  # De esta manera se ejecuta la sentencia
except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()

print('Termina la transacción')