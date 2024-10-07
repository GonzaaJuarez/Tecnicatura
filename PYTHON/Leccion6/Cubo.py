class Cubo
    '''
    Crear la clase Cubo con los atributos: ancho, alto y profundidad
    Con un método calcular_volumen que tendrá la fórmula:
    volumen = ancho * alto * profundidad. 
    Los datos deben ser ingresados por el usuario
    '''
    def __init__(self, ancho, alto, profundidad):
        self.ancho = ancho
        self.alto = alto
        self.profundidad = profundidad

    # Método para sumar
    def calcular_volumen(self):
        return self.ancho * self.alto * self.profundidad

print('Calcular Volumen de un Cubo')
ancho = float(input(f'Digite un valor para el ancho del cubo: '))
alto = float(input(f'Digite un valor para el alto del cubo: '))
profundidad = float(input(f'Digite un valor para la profundidad del cubo: '))
cubo1 = Cubo(ancho, alto, profundidad)
print(f'El volumen del cubo es: {cubo1.calcular_volumen():.2f}')