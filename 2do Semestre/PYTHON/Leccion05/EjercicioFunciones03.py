'''
    Ejercicio 03:
    Función recursiva
    Imprimir números de 5 a 1 de manera descendente usando funciones recursivas
    Puede ser cualquier valor positivo
'''

def imprimirNumeros(num):
    if num > 0:
        print(num)
        imprimirNumeros(num-1) # Caso Recursivo.
    elif num < 0:
        print(num)
        imprimirNumeros(num+1)  # Caso Recursivo.
    else:
        print(num) # comentar esto si no desea que muestre el cero
        return

numero = int(input("Ingrese un número: "))
imprimirNumeros(numero)
