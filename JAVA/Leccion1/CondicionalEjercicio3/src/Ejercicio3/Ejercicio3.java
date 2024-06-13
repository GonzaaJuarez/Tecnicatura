
package Ejercicio3;

import java.util.Scanner;

/*
    Ejercicio3: 
    Sistema de calificaciones con IF / ELSE
 */
public class Ejercicio3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        
        System.out.println("Digite el número de su calificación: ");
        double calification = Double.parseDouble(scanner.nextLine());
        
        if(calification >= 9 && calification <= 10){
            System.out.println("Obtiene una A");
        }
        else if(calification >= 8 && calification < 9){
            System.out.println("Obtiene una B");
        }
        else if(calification >= 7 && calification < 8){
            System.out.println("Obtiene una C");
        }
        else if(calification >= 6 && calification < 7){
            System.out.println("Obtiene una D");
        }
        else if(calification >= 0 && calification < 6){
            System.out.println("Obtiene una F");
        }
        else{
            System.out.println("Valor fuera del rango de calificación, 0 a 10");
        }
    }
}
