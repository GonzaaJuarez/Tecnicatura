
package Ejercicio3;

import java.util.Scanner;

/*
    Ejercicio 3:
    La calificacion final de un estudiante de informática
    se calcula con base a las calificaciones de cuatro aspectos de su
    rendimiento académico: participación, primer examen parcial, segundo
    examen parcial y examen final. Sabiendo que las calificaciones anteriores
    entran a la calificación final con ponderaciones de 10%, 25%, 25%
    y 40%, Hacer un programa que calcule e imprima la calificación final
    obtenida por un estudiante. 
    Que el usuario digite las calificaciones de estos 4 datos y así podremos tener,
    la calificación final.
*/

public class Ejercicio3 {
    public static void main(String[] args) {
       Scanner scanner = new Scanner(System.in);
        
        System.out.println("Ingrese el valor del Rendimiento Académico: ");
        double rendAcad = Double.parseDouble(scanner.nextLine());
        System.out.println("Ingrese el valor por la Participación: ");
        double participacion = Double.parseDouble(scanner.nextLine());
        System.out.println("Ingrese el valor del Primer Exámen Parcial: ");
        double primerExamen = Double.parseDouble(scanner.nextLine());
        System.out.println("Ingrese el valor del Segundo Exámen Parcial: ");
        double segundoExamen = Double.parseDouble(scanner.nextLine());
        
        // crenado variables para los porcentajes
        double porcRA = (rendAcad * 0.10);
        double porcP = (participacion * 0.25);
        double porcPEP = (primerExamen * 0.25);
        double porcSEP = (segundoExamen * 0.40);
        
        double calificacionFinal = porcRA + porcP + porcPEP + porcSEP;
        
        // evitar crear mas variables
        //double calificacionFinal = (rendAcad * 0.10) + (participacion * 0.25) + (primerExamen * 0.25) + (segundoExamen * 0.40);
        
        System.out.println("la Calificación Final equivale a: " + calificacionFinal);
    }  
}
