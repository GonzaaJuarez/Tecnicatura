package Ejercicio6;

import java.util.Scanner;

/*
Ejercicio 7:
Guillermo tiene "N" dólares,Luis tiene la mitad de la que posee Guillermo y
Juan Tiene la mitad de la que poseen Luis y Guillermo juntos. Hacer un programa 
que calcule e imprima la cantidad de dinero que tienen entre los tres
*/
public class EjercicioSumaDinero {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Ingrese la cantidad de dolares que posee Guillermo: ");
        double guillermo = Double.parseDouble(scanner.nextLine());
       
        double luis = guillermo / 2;
        double juan = (guillermo + luis) / 2;
        
        double suma = guillermo + luis + juan;
        
        System.out.println("Guillermo posee $" + guillermo);
        System.out.println("Luis posee $" + luis);
        System.out.println("Juan posee $" + juan);
        
        System.out.println("Entre los tres poseen $" + suma);
        
        scanner.close();
    }                
}
