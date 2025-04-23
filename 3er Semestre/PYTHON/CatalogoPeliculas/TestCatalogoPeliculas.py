from Pelicula import Pelicula
from CatalogoPeliculas import CatalogoPeliculas

def menu():
    opcion = None
    while opcion != '4':
        print("\nMenú de Opciones:")
        print("1) Agregar película")
        print("2) Listar películas")
        print("3) Eliminar archivo de películas")
        print("4) Salir")

        opcion = input("Seleccione una 1opción (1-4): ")

        if opcion == '1':
            nombre_pelicula = input("Ingrese el nombre de la película: ")
            pelicula = Pelicula(nombre_pelicula)
            CatalogoPeliculas.agregar_pelicula(pelicula)
        elif opcion == '2':
            CatalogoPeliculas.listar_peliculas()
        elif opcion == '3':
            CatalogoPeliculas.eliminar()
        elif opcion == '4':
            print("¡Hasta luego!")
        else:
            print("Opción inválida, intente nuevamente.")

if __name__ == "__main__":
    menu()
