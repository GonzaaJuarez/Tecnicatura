
package Ejercicio4;

import java.util.Scanner;

/*
    Ejercicio 4:
    Sistema de calificaciones con SWITCH
 */

public class Ejercicio4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Digite el número de su calificación: ");
        int calification = Integer.parseInt(scanner.nextLine());
        // ya que el switch toma valores exactos  tomo la variable como int
        // igual se podria solucionar tomando la nota como un 100...
        
        switch(calification){
            case 10, 9 -> System.out.println("Obtiene una A");
            case 8 -> System.out.println("Obtiene una B");
            case 7 -> System.out.println("Obtiene una C");
            case 6 -> System.out.println("Obtiene una D");
            case 5, 4, 3, 2, 1 -> System.out.println("Obtiene una F");
            default -> System.out.println("Valor fuera del rango de calificación, 0 a 10");
        }
    }
}
