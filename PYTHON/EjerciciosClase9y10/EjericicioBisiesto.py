
'''
Ejercicio:
Diseñar un programa que ingresando un año, nos devuelva
por consola si es un año bisiesto o no, repetir la acción
hasta que el usuario lo indique.
'''


print("Saber si un año es bisiesto:")
opcion = 0
while opcion != 1:
    num = int(input("Ingrese el año: "))
    if(num % 4 == 0 and num % 100 != 0) or num % 400 == 0:
        print(f"El año {num} es BISIESTO")
    else:
        print(f"El año {num} NO es bisiesto")
    opcion = int(input("Digite 1 para salir: "))

else:
    print("Fin del ciclo")

