'''
Ejercicio 7:
    Dadas las horas trabajadas de 5 personas y la trifa de pago.
    Calcular el salario y la sumatoria de todos los salarios.
'''

suma = 0


for i in range(5):
    print(f'El salario del empleado {i + 1}')
    horas = int(input("Digite las Horas trabajadas: "))
    tarifa = float(input("Digite la tarifa: $"))
    salario = horas * tarifa
    print(f'El salario del empleado {i + 1} es: ${salario}')
    print('')
    suma += salario

print(f'El total de salarios es ${suma}')
