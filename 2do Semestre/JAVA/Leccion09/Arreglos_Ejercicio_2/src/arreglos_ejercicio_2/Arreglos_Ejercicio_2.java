/*
    Ejercicio 2:
    Leer 5 números, guardarlos en un arreglo
    Y mostrarlos en el orden inverso al introducido
*/

package arreglos_ejercicio_2;
import java.util.Scanner; // para pedirle al usuario

public class Arreglos_Ejercicio_2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // clase scanner
        
        int numeros[] = new int [5];
        // pedirle al usuario los números
        for(int i = 0; i < numeros.length; i++){
            System.out.println("Digite un número: ");
            numeros[i] = Integer.parseInt(scanner.nextLine());
        }
        // imprimir números
        int aux = 0;
        for (int i = 4; i >= 0; i--){
            aux += 1;
            System.out.println("El número " + (aux) + " es: " + numeros[i]);
        }
    }
}
