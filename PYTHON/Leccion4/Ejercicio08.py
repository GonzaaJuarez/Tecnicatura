'''
    Ejercicio 8:
    Menú interactivo - Cajero automático
    Hacer un programa que simule un cajero automático con un saldo inicial de $1000
    y que tenga el siguiente menú de opciones:
    1. Ingresar dinero a la cuenta
    2. Retirar dinero de la cuenta
    3. Mostrar dinero disponible
    4. Salir
'''

saldo = 1000
while True:
    print("\t.:MENÚ:.")
    print("1. Ingresar dinero a la cuenta")
    print("2. Retirar dinero de la cuenta")
    print("3. Mostrar dinero disponible")
    print("4. Salir")
    opcion = int(input('Digite una opción de menú: '))
    print()
    if opcion == 1:
        ingreso = float(input("Ingrese el monto de dinero a ingresar: "))
        saldo += ingreso
        print(f'EL dinero actual es ${saldo}')
        print()
    elif opcion == 2:
        retiro = float(input("Ingrese el monto de dinero a retirar: "))
        if retiro > saldo:
            print(f'No se puede retirar ${retiro}, dinero disponible ${saldo}')
            print()
        else:
            saldo -= retiro
            print(f'EL dinero actual es ${saldo}')
            print()
    elif opcion == 3:
        print(f'EL dinero disponible es ${saldo}')
        print()
    elif opcion == 4:
        print('Gracias por utilizar su cajero automático, hasta pronto')
        break
    else:
        print(f'ERROR, {opcion} no corresponde a una opción de menú')
        print()