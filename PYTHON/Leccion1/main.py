'''
miVariable = 3
print(miVariable)
miVariable = "Hola a todos :) "
print(miVariable)
miVariable = 3.14
print(miVariable)

# la misma variable puede cambiar de tipo, de entero a caracter y etc.
# Estp aparece subrayado porque python se maneja en ingles.

x = 10
y = 2
z = x + y
print(z)
# para ver en que litera se guarda la variable dentro de la RAM
print(id(x))
print(id(y))
print(id(z))

# tipos de variables
# a = 10  # Int
# a = 10.53  # Float
a = "Hola a todos"  # String
# a = True  # Bool
# a = False  # Bool
print(type(a))  # para ver de que tipo es la variable
# se puede poner : y el tipo de variable, por ejemplo a : str = "Hola a todos"
# esto para que quede como referencia

x = 10
print(x)
print(type(x))
x = 14.5
print(x)
print(type(x))
x = "Hello friends"
print(x)
print(type(x))
x = True
print(x)
print(type(x))
x = False
print(x)
print(type(x))

# Manejo de cadenas: (string)
miGrupoFavorito = "No Te Va Gustar; "
caracteristicas = "Banda de rock uruguaya muy popular"
print("Mi grupo favorito es:", miGrupoFavorito, caracteristicas)

numero1 = "7"
numero2 = "8"
print(int(numero1) + int(numero2))  # convieto las cadenas a enteros, solo si son números

# Tipos Booleanos: (bool)
miBooleano = 1 > 2
print(miBooleano)

if miBooleano:
    print("El resultado es verdadero")
else:
    print("El resultado es falso")

# Pedir al usuario:
resultado = input("Digite un numero: ")  # imput regresa un dato tipo string
print("Su numero es: ", resultado)

print(" ")
print(" ")
print(" ")

# Convercion en la entradad de datos
numero1 = int(input("Escribe el primer numero: "))
numero2 = int(input("Escribe el segundo numero: "))
resultado = numero1 + numero2
print("La suma de los numeros es:", resultado)

#operadores
operandoA = 8
operandoB = 5
suma = operandoA + operandoB
# print("El resultado de la suma es:", suma)
print(f'El resultado de la suma es: {suma}') # f antes de las comillas
resta = operandoA - operandoB
print(f'El resultado de la resta es: {resta}')
multiplication = operandoA * operandoB
print(f'El resultado de la multiplicación es: {multiplication}')
division = operandoA / operandoB
print(f'El resultado de la división es: {division}')
division = operandoA // operandoB
print(f'El resultado de la división (int) es: {division}')
modulo = operandoA % operandoB
print(f'El resultado del modulo es: {modulo}')
exponente = operandoA ** operandoB
print(f'El resultado del exponente es: {exponente}')


# Operadores de resignación
miVariable3 = 10
print(miVariable3)

miVariable3 = miVariable3 + 1
print(miVariable3)
miVariable3 += 1
print(miVariable3)
miVariable3 -= 2
print(miVariable3)
miVariable3 *= 3
print(miVariable3)
miVariable3 /= 2
print(miVariable3)
# se puede usar con cualquier otro operador
'''
'''
# operadores de Comparación
d = 4
b = 2
print(f'd es: {d} y b es: {b}')
resultado = d == b  # para comparar si son iguales
# evalua primero el lado derecho
print("¿son iguales?", resultado)
# operador de diferente
resultado = d != b
print("¿Son diferentes?", resultado)
#operador mayor y menor
resultado = d > b
print("¿d es mayor que b?", resultado)
resultado = d < b
print("¿d es menor que b?", resultado)
resultado = d >= b
print("¿d es mayor o igual que b?", resultado)
resultado = d <= b
print("¿d es menor o igual que b?", resultado)
'''
# Operadores lógicos
# AND
a = True
b = False
resultado = a and b # Si uno es falso el resultado es falso
print(resultado)
# OR
resultado = a or b # Si uno es verdadero el resultado es verdadero
print(resultado)
# NOT
resultado = not a
print(resultado)

