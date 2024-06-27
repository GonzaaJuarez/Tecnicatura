
package Ejercicio1;
import java.util.Scanner;

/*
    Ejercicio 1:
    Construir un programa que, dado un número total de horas, devuelve el número de semanas,días y horas equivalentes. 
    Por ejemplo dado un total de 1000 horas debe mostrar 5 semanas,6 días y 16 horas.
*/

public class Ejercicio1 {
    public static void main(String[] args) {
       Scanner scanner = new Scanner(System.in);
        
        System.out.println("Digite la cantidad de horas: ");
        int horasTotal = Integer.parseInt(scanner.nextLine());
        
        int horasSemana = 7 * 24;
        
        int semanas = horasTotal / horasSemana;
        int dias = (horasTotal % horasSemana) /24;
        int horas = horasTotal % 24;
        
        
        System.out.println(horasTotal + " horas es equivalente a: " + semanas + " semanas, " + dias + " días, " + horas + " horas.");   
    }    
}

