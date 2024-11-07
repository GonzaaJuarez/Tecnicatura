
package Ejercicio1;

import java.util.Scanner;

/*
    Ejercicio 1:
    Calcular las estaciones del año con IF / ELSE
 */

public class Ejercicio1 {
    public static void main(String[] args) {
       Scanner scanner = new Scanner(System.in);
        
        System.out.println("Digite el número correspondiente al mes: ");
        int mes = Integer.parseInt(scanner.nextLine());
        
        if(mes >= 1 && mes <= 2 || mes == 12){
            System.out.println("La estación correspondiente al mes " + mes + ", es VERANO");
        }
        else if(mes >= 3 && mes <= 5){
            System.out.println("La estación correspondiente al mes " + mes + ", es OTOÑO");
        }
        else if(mes >= 6 && mes <= 8){
            System.out.println("La estación correspondiente al mes " + mes + ", es INVIERNO");
        }
        else if(mes >= 9 && mes <= 11){
            System.out.println("La estación correspondiente al mes " + mes + ", es PRIMAVERA");
        }
        else{
            System.out.println( mes + " NO corresponde a un mes del año");
        } 
        
        
        
        /*
        //Vercion del profe:
        System.out.println("Digite un mes del año: ");
        var mes2 = Integer.parseInt(scanner.nextLine());
        var estacion = "Estación desconocida";
        
        if(mes2 == 12 || mes2 == 1 || mes2 == 2){
            estacion = "VERANO";
        }
        else if(mes2 == 3 || mes2 == 4 || mes2 == 5){
            estacion = "OTOÑO";
        }
        else if(mes2 == 6 || mes2 == 7 || mes2 == 8){
            estacion = "INVIERNO";
        }
        else if(mes2 == 9 || mes2 == 10 || mes2 == 11){
            estacion = "PRIMAVERA";
        }
        else{
        } 
        System.out.println("Corresponde a " + estacion);
        */
        
        /*
        // Utilizando Switch
        System.out.println("Digite el número correspondiente al mes: ");
        int num = Integer.parseInt(scanner.nextLine());
        
        switch(num){
            case 12: case 1: case 2:
                System.out.println("La estación correspondiente al mes " + num + ", es VERANO");
                break;
            case 3: case 4: case 5:
                System.out.println("La estación correspondiente al mes " + num + ", es OTOÑO");
                break;
            case 6: case 7: case 8:
                System.out.println("La estación correspondiente al mes " + num + ", es INVIERNO");
                break;
            case 9: case 10: case 11:
                System.out.println("La estación correspondiente al mes " + num + ", es PRIMAVERA");
                break;
            default:
                System.out.println( mes + " NO corresponde a un mes del año");
        }
        */
    }
}
