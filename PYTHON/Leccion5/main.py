# Comenzamos con funciones

#mi_funcion() #No se puede llamar a la función antes de crearla

# Definimos una función
def mi_funcion(): # para identificar a la función se le ponen paréntesis
    print('Saludos a todos')

mi_funcion() # llamamos a la función
mi_funcion()
mi_funcion()
mi_funcion() # se puede llamar n cantidad de veces

# Desempaquetado de listas o list unpacking
def show(name, lastName):
    print(name+' '+lastName)
person = ['Gonzalo','Juarez']
show(person[0],person[1]) # pasamos uno por uno los datos de la lista a la función
show(*person) # pasamos todos los datos de la lista a la función

person2 = ['Leonel','Argente']
show(*person2)

person3 = {'lastName': 'Lucero', 'name': 'Orlando'}
show(**person3)

# FOR - ELSE
numbers = [1, 2, 3, 4, 5]
for n in numbers:
    print(n)
    # break # única manera de que no se ejecute el else:
else:
    print('Finaliza el ciclo')

# Lista de comprensión, List Comprehension
names = ['Guadalupe', 'Marianela', 'Florencia', 'Martina']
alongP = [m for m in names if m[0] == 'M'] # esto regresa una nueva lista
print(alongP)

bottleC = [{'name':'Quilmes','country':'Arg'},
           {'name': 'Andes', 'country': 'Arg'},
           {'name':'Corona','country':'Mx'},
           {'name': 'Pacifico', 'country': 'Mx'},
           {'name':'Stella Artois','country':'Belgium'},
           {'name':'Heineken','country':'Netherlands'},
           {'name':'Estrella Galicia','country':'Spain'},
           {'name': 'Modelo', 'country': 'Mx'},
           {'name': 'Patagonia', 'country': 'Arg'},
           {'name':'Asahi','country':'Japan'}]

Arg = [b for b in bottleC if b['country'] == 'Arg']
print(Arg)
print(bottleC)

# Paso de argumentos (Funciones)
def mi_funcion2(name, lastName):
    print('Saludos a todos los que estén leyendo este mensaje.')
    print(f'Nombre: {name}, Apellido: {lastName}')
mi_funcion2('Gonzalo','Juarez')
mi_funcion2('Hector','Díaz')
mi_funcion2('Luis','Perez')

# La palabra return en funciones
# Creamos la función para sumar
def sumar(a,b):
    return a + b
# Forma 1
resultado = sumar(53,28)
print(f'El resultado de la suma es: {resultado}')

# Forma 2
print(f'EL resultado de la suma es: {sumar(86,43)}')

def sumar2(a = 0,b = 0): # valores predeterminados
    # esos valores son únicamente usados si al llamar a la función no se ingresan parámetros
    return a + b
resultado = sumar2()
print(f'El resultado de la suma es: {resultado}')
print(f'EL resultado de la suma es: {sumar2(37,14)}')

# Argumentos, variables en funciones
def listarNombres(*nombres): # normalmente se utiliza *args
    for nombre in nombres:
        print(nombre)
listarNombres('Gonzalo','Osvaldo','Nicolas','Zulema','Agustín','Lucía','Orlando')
listarNombres('Julieta', 'Ulises', 'Antonio', 'Romina', 'Eugenia', 'Zaira')

def listarTerminos(**terminos): # normalmente se utiliza *kwargs
    for llave,valor in terminos.items(): # kwargs significa key argument
        print(f'{llave}: {valor}')

listarTerminos() # no recibe nada, no va a mostrar nada
listarTerminos(IDE = 'Integrated Develoment Enviroment', PK = 'Primary key')
listarTerminos(Nombre = 'Leonel Messi')

def desplegarNombres(nombres):
    for nombre in nombres:
        print(nombre)

nombres2 = ['Juan','Lucas','Mateo']
desplegarNombres(nombres2)
desplegarNombres('Gonzalo') # lo toma como cadena y imprime una letra a la vez
# desplegarNombre(10, 11) # no es un objeto iterable
desplegarNombres((10,11)) # Escrito como una tupla
# desplegarNombres((10,)) en caso de dejar un elemento tiene que quedar la coma
desplegarNombres([10,11]) # Escrito como una lista

# Funciones Recursivas
def factorial(numero):
    if numero == 1:
        return 1
    else:
        return numero * factorial(numero-1) #Caso recutsivo

resultado = factorial(5) # código duro
print(f'El factorial del número 5 es: {resultado}')

# Con participación del usuario
num= int(input('Digite un número para calcular su factorial: '))
print(f'El factorial del número {num} es: {factorial(num)}')

