
import java.util.Scanner;

// Ejercicio 5: Hacer un programa que calcule e imprima la suma de tres calificaciones

public class EjercicioNumMayor {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese el primer número: ");
        double num1 = Double.parseDouble(scanner.nextLine());
        System.out.println("Ingrese el segundo número: ");
        double num2 = Double.parseDouble(scanner.nextLine());
        
                
        if(num1 == num2){
            System.out.println("Los números son iguales.");
        }
        else{
            var resultado = (num1 > num2) ? "El PRIMER" : "El SEGUNDO";
            System.out.println(resultado + " número es el MAYOR");
        }
        
    }
}
