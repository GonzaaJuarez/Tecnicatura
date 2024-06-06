
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

public class EjercicioSalario {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        final double salario = 1000;
        
        System.out.println("Ingrese la cantidad de carros vendidos: ");
        double cantidadCarros = Double.parseDouble(scanner.nextLine());
        System.out.println("Ingrese la precio por carro: ");
        double valorCarro = Double.parseDouble(scanner.nextLine());
        
        double totalVentas = cantidadCarros * valorCarro;
        
        double comision = cantidadCarros * 150;
        double porcentajeVenta = totalVentas * 0.05;
        
        double totalSalario = salario + comision + porcentajeVenta;
        System.out.println("El Salario mesual de un vendedor es de $" + totalSalario);
        
    }
}
