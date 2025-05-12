import psycopg2 # Esto para poder conectarnos al postgres

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'SELECT * FROM persona WHERE id_persona IN %s'
            entrada = input("Digite los id_persona a buscar (separados por coma): ")
            llaves_primarias = (tuple(entrada.split(', ')),)
            cursor.execute(sentencia, llaves_primarias)  # De esta manera se ejecuta la sentencia
            registros = cursor.fetchall()  # Recuperamos todos los registros que serán una lista
            for registro in registros:
                print(registro)
except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()  # pero no cierra la conexión
