'''
# Ciclo While
contador = 0
while contador < 10:
    print("Ejecutando el ciclo while",contador + 1)
    contador += 1
else:
    print('Fin del ciclo while')
'''
'''
# Ejercicio While 1 Imprimir números del 0 al 5
contador = 0
maximo = 5
while contador <= maximo:
    print(contador)
    contador += 1
else:
    print("FIN ciclo while")

# Ejercicio While 2 Imprimir números del 5 al 1
contador = 5
minimo = 1
while contador >= minimo:
    print(contador)
    contador -= 1
else:
    print("FIN ciclo while")
'''
'''
# Ciclo FOR
cadena = 'Hello'
for letra in cadena:
    print(letra)
else:
    print('Fin ciclo for')

# Palabra reservada BREAK
for letra in 'alemania':
    if letra == 'a':
        print(f'Letra encontrada: {letra}')
        break
else:
    print("Fin del ciclo for")
'''
'''
# Palabra reservada CONTINUE
for i in range(6):
    if i % 2 == 0:
        print(f'Valor: {i}')

for i in range(6):
    if i % 2 != 0:
        continue
    print(f'Valor: {i}')
'''
# Segundo semestre

