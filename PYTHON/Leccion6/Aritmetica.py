class Aritmetica:
    '''
    El nombre de este tipo de comentario es: DocString
    esto es una documentación de la clase en python
    Vamos a hacer en esta clase algunas operaciones de suma, resta, multiplicacion y más
    '''

    def __init__(self, operandoA, operandoB):
        self.operandoA = operandoA
        self.operandoB = operandoB

    # Método para sumar
    def sumar(self):
        return self.operandoA + self.operandoB

    def restaAB(self):
        return self.operandoA - self.operandoB

    def restaBA(self):
        return self.operandoB - self.operandoA

    def multi(self):
        return self.operandoA * self.operandoB

    def dividirAB(self):
        return self.operandoA / self.operandoB

    def dividirBA(self):
        return self.operandoB / self.operandoA



aritmetrica1 = Aritmetica(7, 9)
print(f'El Resultado de la suma es: {aritmetrica1.sumar()}')
print(f'El Resultado de la resta de A - B es: {aritmetrica1.restaAB()}')
print(f'El Resultado de la resta de B - A es: {aritmetrica1.restaBA()}')
print(f'El Resultado de la multiplicación es: {aritmetrica1.multi()}')
print(f'El Resultado de la división de A / B es: {aritmetrica1.dividirAB():.2f}')
print(f'El Resultado de la división de B / A es: {aritmetrica1.dividirBA():.2f}')