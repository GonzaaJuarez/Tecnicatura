package Ejercicio5;

import java.util.Scanner;

// Ejercicio: El mayor de dos números (Operador ternario)

public class EjercicioCalificaciones {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Ingrese la primera calificación: ");
        double calification1 = Double.parseDouble(scanner.nextLine());
        System.out.println("Ingrese la segunda calificación: ");
        double calification2 = Double.parseDouble(scanner.nextLine());
        System.out.println("Ingrese la tercera calificación: ");
        double calification3 = Double.parseDouble(scanner.nextLine());
        
        double suma = calification1 + calification2 + calification3;
        
        System.out.println("La suma de las tres calificaiones es: " + suma);
                
        
    }
}
