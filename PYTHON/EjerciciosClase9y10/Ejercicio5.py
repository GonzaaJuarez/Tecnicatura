
'''
Ejercicio 5:
   Calcular el factorial de un número mayor o igual a cero
'''
num = -1

while num < 0:
    num = int(input("Digite un número: "))
    if num < 0:
        print("El número debe ser mayor o igual a 0.")
    else:

# Forma de hacerlo con ciclo WHILE
'''
i = 1
factorial = 1
while i <= num:
    factorial *= i
    i += 1
print(f"El factorial de {num} es: {factorial}")
'''
# Forma de hacerlo con ciclo FOR
i = 1
factorial = 1
for i in range(num):
    i += 1
    factorial *= i
print(f'El factorial es {factorial} ')