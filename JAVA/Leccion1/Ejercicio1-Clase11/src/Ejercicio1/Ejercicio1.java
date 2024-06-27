
package Ejercicio1;
import java.util.Scanner;

/*
Ejercicio 1:
Determinar si un alumno apruba o reprueba un curso, sabiendo que aprobará si su promedio
de tres calificaciones es mayor o igual a 70 
*/

public class Ejercicio1 {
    public static void main(String[] args) {
       Scanner scanner = new Scanner(System.in);
        
        System.out.println("Digite la primera calificación: ");
        int calification1 = Integer.parseInt(scanner.nextLine());
        System.out.println("Digite la segunda calificación: ");
        int calification2 = Integer.parseInt(scanner.nextLine());
        System.out.println("Digite la tercera calificación: ");
        int calification3 = Integer.parseInt(scanner.nextLine());
        
        double promedio = (calification1 + calification2 + calification3)/3;
        
        if(promedio >= 70){
            System.out.println("está APROBADO, con un promedio de: " + promedio);   
        }
        else{
            System.out.println("está DESAPROBADO, con un promedio de: " + promedio);
        }
    }    
}
