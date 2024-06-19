
package Ejercicio3;
import java.util.Scanner;

/*
    Ejercicio 3:
    Leer 2 números; si son iguales que los multiplique, si el primero es mayor que los reste
    y si el segundo es mayor que sume
*/
public class Ejercicio3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Digite el primer número: ");
        int num1 = Integer.parseInt(scanner.nextLine());
        System.out.println("Digite el segundo número: ");
        int num2 = Integer.parseInt(scanner.nextLine());
        int resultado = 0;
        
        if (num1 > num2){
            resultado = num1 + num2;
        }
        else if (num1 < num2){
            resultado = num1 - num2;
        }
        else{
            resultado = num1 * num2;
        }

        System.out.println("El resultado es: " + resultado);
    }
}
