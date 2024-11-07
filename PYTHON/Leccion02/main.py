'''
# Sentencia if/else
condicion = False
if condicion == True:
    print("Condición Verdadera")
elif condicion == False:
    print("Condición Falsa")
else:
    print("Condición sin especificar")
'''

#Ejercicio: Convercion de número a texto
num = int(input("Digite un número en el rango del 1 al 3: "))
numTexto = ""
if num == 1:
    numTexto = "Número UNO"
elif num == 2:
    numTexto = "Número DOS"
elif num == 3:
    numTexto = "Número TRES"
else:
    numTexto = "Número fuera del rango"
print(f'El número ingresado es: {num} - {numTexto}')
