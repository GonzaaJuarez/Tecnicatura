'''
# Ejercicio 3: Calcular la estación de año
mes = int(input("Digite el número del mes: "))
if mes >= 1 and mes <= 3:
    print("La estación correspondiente es VERANO")
elif mes >= 4 and mes <= 6:
    print("La estación correspondiente es OTOÑO")
elif mes >= 7 and mes <= 9:
    print("La estación correspondiente es INVIERNO")
elif mes >= 10 and mes <= 12:
    print("La estación correspondiente es PRIMAVERA")
else:
    print("El valor ingresado no corresponde a un mes del año")
'''
'''
# Ejercicio 4: Etapa de la vida
edad = int(input("Digite su edad: "))
if edad >= 0 and edad < 10:
    print("La infancia es increible y bella")
elif edad >= 10 and edad < 20:
    print("Tienes muchos cambios, mucho que estudiar")
elif edad >= 20 and edad < 30:
    print("Amor y comienza el trabajo")
elif edad >= 30 and edad < 40:
    print("Madurez y crecimiento profesional")
elif edad >= 40 and edad < 50:
    print("Reflexión y consolidación personal")
elif edad >= 50 and edad < 60:
    print("Sabiduría y experiencia")
elif edad >= 60 and edad < 70:
    print("Tiempo de disfrutar y compartir")
elif edad >= 70 and edad < 80:
    print("Años dorados, disfrute y tranquilidad")
elif edad >= 80:
    print("Legado y serenidad")
else:
    print("Edad no válida")
'''

# Ejercicio 5: Sistema de calificaciones
calificacion = float(input("Digite la nota de la calificación (0 a 10): "))
if calificacion >= 9 and calificacion <= 10:
    print("Obtiene una A")
elif calificacion >= 8 and calificacion < 9:
    print("Obtiene una B")
elif calificacion >= 7 and calificacion < 8:
    print("Obtiene una C")
elif calificacion >= 6 and calificacion < 7:
    print("Obtiene una D")
elif calificacion >= 0 and calificacion < 6:
    print("Obtiene una F")
else:
    print("Valor fuera del rango de 0 a 10")
