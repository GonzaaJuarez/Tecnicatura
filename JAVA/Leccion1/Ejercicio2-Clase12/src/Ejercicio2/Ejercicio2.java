
package Ejercicio2;

import java.util.Scanner;

/*
 
    Ejercicio 2:
    Hacer un programa que calcule el cuadro de una suma,
    el usuario debe ingresar el valor de a y el valor de b.
    Formula: (a+b)2=a2+b2+2*a*b
    Para esto deberán utilizar la clase Math y un método llamado pow

 */

public class Ejercicio2 {
    public static void main(String[] args) {
       Scanner scanner = new Scanner(System.in);
        
        System.out.println("Ingrese un valor para a: ");
        double a = Double.parseDouble(scanner.nextLine());
        System.out.println("Ingrese un valor para b: ");
        double b = Double.parseDouble(scanner.nextLine());
        
        double resultado = Math.pow(a, 2) + Math.pow(b, 2) + 2 * a * b;
            
        System.out.println("El resultado de (" +a+ " + " +b+ ")^2 es = " + resultado);
    }    
}

