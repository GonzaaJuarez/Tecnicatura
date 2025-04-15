'''
Ejercicio 6:
    ingresar "N" números enteros, visualizar la suma de los números pares de la lista,
    cuántos números pares existen y cuál es el promedio de los números impares.
'''

n = int(input("Digite la cantidad de  números a ingresar: "))

sumaPares = 0
conteoPares = 0
sumaImpares = 0
conteoImpares = 0
promedioImpares = 0

for i in range(n):
  num = int(input(f"Ingrese el número {i+1}/5: "))

  if num % 2 == 0:
     sumaPares += num
     conteoPares += 1
  else:
     sumaImpares += num
     conteoImpares += 1
print('')

if conteoPares > 0:
    print(f"Se digitaron {conteoPares} números PARES")
    print(f"La suma de los número PARES es: {sumaPares}")
else:
    print("NO se digitaron números PARES")

print('')

# No lo pide el ejercicio
if conteoImpares > 0:
    print(f"Se digitaron {conteoImpares} números IMPARES")
    print(f"La suma de los número IMPARES es: {sumaImpares}")
else:
    print("NO se digitaron números IMPARES")

if conteoImpares > 0:
    promedioImpares = sumaImpares / n
    print(f"El promedio de las suma de números IMPARES es: {promedioImpares}")
else:
    print("NO se digitaron números IMPARES")