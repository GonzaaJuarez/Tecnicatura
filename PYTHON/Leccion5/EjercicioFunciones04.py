'''
    Ejercicio 4:
    Calculadore de Impuestos.
    Crear una función para calcular el total de un pago incluyendo un impuesto aplicado. (IVA).
    Fórmula: pago_total = pago_sin_impuesto + pago_sin_impuesto * (impuesto / 100)
    Proporcione el pago sin impuesto: 1.000
    Proporcione el monto del impuesto: 21%
    Pago con impuesto: xxxxx
'''

def calcularTotal(pago, impuesto):
    total = pago + pago * (impuesto / 100)
    return total

pag = float(input('Proporcione el pago sin impuesto: $'))
imp = float(input('Proporcione el monto del impuesto: '))
print(f'Pago con impuesto: {calcularTotal(pag, imp)}')