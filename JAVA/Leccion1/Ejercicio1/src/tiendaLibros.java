import java.util.Scanner;

// Ejercicio Tienda de libros

public class tiendaLibros {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Proporciona el nombre del libro: ");
        String nombre = scanner.nextLine();
        System.out.println("Proporciona el ID del libro: ");
        int id = Integer.parseInt(scanner.nextLine());
        System.out.println("Proporciona el precio del libro: ");
        double precio = Double.parseDouble(scanner.nextLine());
        System.out.println("¿El envío es gratuito?: ");
        boolean envio = Boolean.parseBoolean(scanner.nextLine());
        System.out.println("Nombre del libro: " + nombre);
        System.out.println("ID del libro: " + id);
        System.out.println("Precio del libro: $" + precio);
        System.out.println("¿Envío gratis? " + envio);
    }
}