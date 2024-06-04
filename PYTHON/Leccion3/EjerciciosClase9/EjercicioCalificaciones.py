
'''
Ejercicio:
Realizar un algoritmo que calcule la calificacion promedio y
la calificacion minima de un grupo de 10 alumnos.
'''

min = 10
suma = 0

for i in range(10):
    notas = float(input("Ingrese las calificiones: "))
    suma += notas
    if notas < min:
        min = notas

promedio = suma / 10
print("El promedio es: ", promedio)
print("La calificacion minima es: ", min)