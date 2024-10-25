/*
    Ejercicio 1:
    Leer 5 números, guardarlos en un arreglo
    Y mostrarlos en el mismo orden introducido
*/

package arreglos_ejercicio_1;
import java.util.Scanner; // para pedirle al usuario

public class Arreglos_Ejercicio_1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // clase scanner
         
        /*
        // Sin intervención del usuario:
        int numeros1[] = {1 ,2 ,3 ,4 ,5};
        
        for (int i = 0; i < numeros1.length; i++){
            System.out.println("Número " +i+ ": " + numeros1[i]);
        }
        */
        /*
        // Con intervención del usuario
        int numeros2[] = new int [5];
        // pedirle al usuario los números
        for(int i = 0; i < numeros2.length; i++){
            System.out.println("Digite un número: ");
            numeros2[i] = Integer.parseInt(scanner.nextLine());
        }
        // imprimir números
        for (int i = 0; i < numeros2.length; i++){
            System.out.println("El número " +i+ " es: " + numeros2[i]);
        }
        */
        // Forma con float
        
        float numeros3[] = new float [5];
        System.out.println("Pedir al usuario los números");
        for(int i = 0; i < numeros3.length; i++){
            System.out.println( i+1 +". Digite un número: ");
            numeros3[i] = Float.parseFloat(scanner.nextLine());
        }
        System.out.println("\nImprimir números");
        for (float i: numeros3){
            System.out.println( i+ ", ");
        }
        System.out.println("\n");
    }
}
