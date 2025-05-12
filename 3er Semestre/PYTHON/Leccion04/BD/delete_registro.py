import psycopg2 # Esto para poder conectarnos al postgres

from v_registros import sentencia

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'DELETE FROM persona WHERE id_persona=%s'
            entrada = input('Digite el número de registro a eliminar: ')
            valores = (entrada,) # es una tupla de valores
            cursor.execute(sentencia, valores)  # De esta manera se ejecuta la sentencia
            registros_eliminados = cursor.rowcount
            print(f'Los registros eliminados son: {registros_eliminados}')

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()  # pero no cierra la conexión
