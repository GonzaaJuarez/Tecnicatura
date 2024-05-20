# Ejercicio Rectangulo Calcular el area y el perimetro de un rectangulo
alto = int(input("ingrese el alto del rectangulo: "))
ancho = int(input("Ingrese el ancho del rectangulo: "))
area = alto * ancho
perimetro = (alto + ancho)*2
print(f'El area es: {area}')
print(f'El perimetro es: {perimetro} ')

print("")
print("")

# Ejercicio 1: Numero par o impar
num = int(input("ingrese un número: "))
if num % 2 == 0:
    print(f'El número {num} es PAR')
else:
    print(f'El número {num} es IMPAR')

print("")
print("")

# Ejercicio 2: Determinar si es mayor de edad
edad = int(input("Digite su edad: "))
if edad >= 18:
    print(f"Tu edad es {edad} años, eres mayor de edad.")
else:
    print(f"Tu edad es {edad} años, NO eres mayor de edad.")
