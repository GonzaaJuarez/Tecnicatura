
package Ejercicio2;

import java.util.Scanner;
        
/*
    Ejercicio 2:
    Cálculo de las estaciones del año con SWITCH
*/

public class Ejercicio2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        
        System.out.println("Digite el número correspondiente al mes: ");
        int mes = Integer.parseInt(scanner.nextLine());
        
        switch(mes){
            case 12, 1, 2 -> System.out.println("La estación correspondiente al mes " + mes + ", es VERANO");
            case 3, 4, 5 -> System.out.println("La estación correspondiente al mes " + mes + ", es OTOÑO");
            case 6, 7, 8 -> System.out.println("La estación correspondiente al mes " + mes + ", es INVIERNO");
            case 9, 10, 11 -> System.out.println("La estación correspondiente al mes " + mes + ", es PRIMAVERA");
            default -> System.out.println( mes + " NO corresponde a un mes del año");
        }
    }
}
