package Ejercicio7;

import java.util.Scanner;

/*
 Ejercicio 7:
Una compañia de venta de carros usados, paga a su personal de ventas
un salario de $1000 mensuales, más una comisión de $150 por cada carro
vendido, más el 5% del valor de la venta por carro. Cada mes el capturista
de la empresa ingresa en la computadora los datos pertinentes.

Hacer un programa que calcule e imprima el salario mensual de un vendedor dado

El salario de 1000 lo vamos a manejar como un dato constante, para asignarlo
debemos usar la palabra reservada "final"
*/

   //// Hecho por Valentin ////

public class Ejercicio7vs {
    private static final double SALARIO_BASE = 1000.0;
    private static final double COMISION_POR_CARRO = 150.0;
    private static final double PORCENTAJE_VENTA = 0.05;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese la cantidad de carros vendidos: ");
        int cantidadCarrosVendidos = scanner.nextInt();

        System.out.print("Ingrese el valor total de las ventas de los carros: ");
        double valorTotalVentas = scanner.nextDouble();
        
        double comisionCarros = cantidadCarrosVendidos * COMISION_POR_CARRO;
        double comisionVentas = valorTotalVentas * PORCENTAJE_VENTA;
        double salarioTotal = SALARIO_BASE + comisionCarros + comisionVentas;

        System.out.println("El salario mensual del vendedor es: $" + salarioTotal);

    }
}