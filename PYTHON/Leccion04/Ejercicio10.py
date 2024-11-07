'''
    Ejercicio 10:
    No repetir caracteres.
    Hacer un programa que pida una cadena por teclado
    Y meter los caracteres en una lista sin repetirlos
'''

cadena = input("Digite una cadena: ")
lista = []
for i in cadena:
    if i not in lista: # verifica que el caracter no este en la lista
        lista.append(i) # agrega el caracter en la lista
print(f'\nLista de caracteres sin repetir: \n{lista}')
