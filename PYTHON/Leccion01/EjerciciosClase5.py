'''
# Ejercicio AND: Valor dentro de un rango
valor = int(input("Digite un número dentro del rango 0 a 10: "))
valorMinimo = 0
valorMaximo = 10
dentroRango = valor >= valorMinimo and valor <= valorMaximo
if dentroRango:
    print(f'El valor {valor} esta dentro del rango.')
else:
    print(f'El valor {valor} NO esta dentro del rango.')
'''
'''
# Ejercicio OR y NOT: ¿Un padre puede asistir al juego de su hijo?
vacaciones = False
diaDescanso = True
if not(vacaciones or diaDescanso):
    print("NO puede asistir al juego")
else:
    print("Puede asistir al juego.")
'''
'''
#Ejercicio: Rango entre las edades 20 y 39 años
edad = int(input("Digite su edad: "))
print(f'Tu edad es {edad} años')
veinte = edad >= 20 and edad < 30
print(veinte)
treinta = edad >= 30 and edad < 40
print(treinta)
if veinte or treinta:
    if veinte:
        print("Estás dentro del rango de los (20\'0)")
    elif treinta:
        print("Estás dentro del rango de los (30\'0)")
    else:
        print("")
else:
    print("NO estás dentro del rango de los (20\'0) o de los (30\'0)")
'''
'''
#Ejercicio: El mayor de dos números
numero1 = int(input("Digite el valor para el primer número: "))
numero2 = int(input("Digite el valor para el segundo número: "))
if numero1 > numero2:
    print(f'El primer número ({numero1}) es el mayor.')
else:
    print(f'El segundo número ({numero2}) es el mayor.')
'''

# Ejercicio: Tienda de libros
print("Ingrese los siguientes datos del libro")
nombre = input("Ingrese el nombre del libro: ")
idLibro = int(input("Ingrese el ID del libro: "))
precio = float(input("Ingrese el precio del libro: $"))
envioGratuito = input("¿El envío es gratuito? (True/ False)")
if envioGratuito == True:
    envioGratuito = True
elif envioGratuito == False:
    envioGratuito = False
else:
    print("El valor es incorrecto. Ingrese True o False.")
print(f'''
        Información del Libro:
        Nombre: {nombre}
        ID: {idLibro}
        Precio: ${precio}
        Envio Gratuito: {envioGratuito}
''')
