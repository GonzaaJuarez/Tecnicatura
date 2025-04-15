
package Ejercicio2;
import java.util.Scanner;

/*
    Ejercicio 2:
    en un almacen se hace un 20% de descuento a los clientes cuya compra supere los $100
    ¿Cúal sera la cantidad que pagara al cliente por su compra?
*/
public class Ejercicio2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Digite la cantidad a pagar: ");
        double compra = Double.parseDouble(scanner.nextLine());
        double descuento = 0.2;
        
        if (compra >= 100){
            descuento = compra * 0.2;
        }
        else{
            descuento = 0;
        }
        double precioFinal = compra - descuento;
        
        System.out.println("El precio a pagar es $" + precioFinal);
    }
}
