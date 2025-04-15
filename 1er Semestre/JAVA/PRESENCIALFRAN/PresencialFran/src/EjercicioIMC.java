//Hacer un programa que calcule el IMC de una persona
//La formula para calcularlo es: peso/(altura*altura)

import java.util.Scanner;

public class EjercicioIMC {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Ingrese el peso en kg: ");
        double peso = scanner.nextDouble();
        System.out.println("Ingrese la altura en cm: ");
        double altura = scanner.nextDouble();
        
        double totalIMC = peso / (altura * altura);
        
        System.out.println("Para un peso de " + peso + " kg y una altura de " + altura + " cm");
        System.out.println("El IMC es de: " + totalIMC);
    }
}
    
