from Persona2 import Persona2
# con * se inportan todas las clases

print('Creación de objetos'.center(50, '-'))

if __name__ == '__main__':

    persona5 = Persona2('Lionel', 'Messi', 37)
    persona5.mostrar_detalles()

    print(__name__)


print('Eliminación de objetos'.center(50, '-'))
del persona5
