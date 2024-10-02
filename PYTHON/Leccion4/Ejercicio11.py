'''
    Ejercicio 11:
    Agencia telefonica.
    Hacer un programa que simule una agenda de contactos.
    Crear un diccionario donde la clave sea el nombre del usuario y el valor
    sea el número de teléfono. El programa tendrá las siguientes funciones:
        1. Nuevo contacto
        2. Borrar contacto
        3. Ver contactos existentes
        4. Salir
'''

agenda = {}

while True:
    print()
    print("\t.:AGENDA TELEFÓNICA:.")
    print("1. Nuevo contacto")
    print("2. Borrar contacto")
    print("3. Ver contactos existentes")
    print("4. Salir")
    opcion = int(input('Digite una opción de agenda: '))
    print()

    if opcion == 1: # Nuevo contacto
        while True:
            clave = input("Digite el nombre del usuario: ")
            valor = input('Digite el número de teléfono: ')
            agenda[clave] = valor
            print(f'Se agrego el contacto:\n {clave}: {valor}')
            salir = input('Presione 1 para añadir otro contacto: ')
            if salir != '1':
                break
    elif opcion == 2: # Borrar contacto
        while True:
            borrar = input('Digite el nombre del usuario a borrar: ')
            if borrar in agenda:
                agenda.pop(borrar)
                print(f'El contacto {borrar} se eliminó.')
            else:
                print('El usuario ingresado no existe.')
            salir = input('Presione 1 para borrar otro contacto: ')
            if salir != '1':
                break
    elif opcion == 3: # Ver contactos existentes
        print(f'\nContactos existentes')
        for i in agenda:
            print(f'{i} -> {agenda[i]}')
    elif opcion == 4: # Salir
        print('Gracias por utilizar su agenda telefónica, hasta pronto')
        break
    else: # Valor incorrecto
        print(f'ERROR, {opcion} no corresponde a una opción de menú')
        print()