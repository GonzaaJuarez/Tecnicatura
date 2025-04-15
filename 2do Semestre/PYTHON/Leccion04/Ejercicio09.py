'''
    Ejercicio 9:
    Mostrar una frase sin espacios y contar su longitud.
    Hacer un programa donde el usuario ingrese una frase, se le devolvera la misma frase
    sin espacios en blanco, y un contador de cuántos caracteres tiene la frase
    (sin contar los espacios en blanco)
    Por ejemplo:
                Frase: vivir por siempre en paz
                Frase seeb: vivirporsiempreenpaz
                N° de caracteres: 20
'''
frase1 = input('Digite una frase: ') # ingresar la frase
frase2 = "" # auxiliar
for i in frase1:
    if i != " ": # comparo cada espacio de carácter para saber si hay espacio
        frase2 += i # si no hay espacio, lo guardo en el auxiliar
frase1 = frase2 # reemplazo el original por el aux
print(f'\nFrase final: {frase1}') # muestro la frase sin espacios
print(f'\nN° de caracteres: {len(frase1)}') # muestro la cantidad de caracteres
