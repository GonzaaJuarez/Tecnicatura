// Hacer un programa que permita pasar de grados Celcius a grados Fahrenheit
//La formula a usar es: (Celcius * 9/5) + 32

import java.util.Scanner;

public class EjercicioGrados {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Ingrese los grados Celcius: ");
        double celcius = scanner.nextFloat();
        
        double fahrenheit = (celcius * 9/5)+32;
        
        System.out.println(celcius + "°C, es un total de " + fahrenheit + "°F");
    }
}
