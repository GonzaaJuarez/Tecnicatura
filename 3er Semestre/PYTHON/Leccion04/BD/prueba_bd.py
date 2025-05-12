import psycopg2 # Esto para poder conectarnos al postgres

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            # sentencia = 'SELECT * FROM persona # muestra todo
            # sentencia = 'SELECT id_persona, nombre FROM persona' # podemos filtrar para que muestre lo que queremos (id_persona y nombre en este caso)
            # sentencia = 'SELECT * FROM persona WHERE id_persona = 1' # podemos filtrar por registro, en este caso el id_persona 1
            sentencia = 'SELECT * FROM persona WHERE id_persona = %s' #parametro posicional o placeholder
            id_persona = input('Digite un número para el id persona: ')
            cursor.execute(sentencia, (id_persona,))  # De esta manera se ejecuta la sentencia
            registros = cursor.fetchone()  # Recuperamos todos los registros que serán una lista
            print(registros)
except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    # cursor.close() #el with lo cierra automáticamente
    conexion.close()  # pero no cierra la conexión



# https://www.psycopg.org/docs/usage.html