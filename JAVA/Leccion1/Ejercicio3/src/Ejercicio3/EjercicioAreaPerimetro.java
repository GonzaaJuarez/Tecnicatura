package Ejercicio3;


import java.util.Scanner;

// Ejercicio: Calcular el área y perimetro de un rectángulo

public class EjercicioAreaPerimetro {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese el ancho del rectángulo: ");
        double base = Double.parseDouble(scanner.nextLine());
        System.out.println("Ingrese la longitud del rectángulo: ");
        double altura = Double.parseDouble(scanner.nextLine());
        
        double area = base * altura;
        double perimetro = (base + altura) * 2;
        
        System.out.println("ancho = " + base);
        System.out.println("Longitud = " + altura);
        System.out.println("El área del rectangulo es: " + area);
        System.out.println("El perímetro del rectangulo es: " + perimetro);
        
    }
}
