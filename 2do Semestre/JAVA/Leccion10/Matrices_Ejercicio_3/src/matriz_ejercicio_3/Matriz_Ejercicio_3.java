/*
    Ejercicio 3:
    Crear y cargar una matriz de 3x3, trasponerla y mostrarla.
*/

package matriz_ejercicio_3;
import java.util.Scanner; // para pedirle al usuario

public class Matriz_Ejercicio_3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // clase scanner
        
        // Crear matriz
        int numeros[][] = new int [3][3];
        
        // Pedir datos al usuario
        for (int i = 0; i < numeros.length; i++) {
            for (int j = 0; j < numeros[i].length; j++) {
                System.out.println("Digite un número: ");
                numeros[i][j] = Integer.parseInt(scanner.nextLine());
            }
        }
        
        // Mostar matriz
        System.out.println("Matriz ingresada: ");
        imprimir(numeros);
        
        // Matriz transpuesta
        System.out.println("Matriz Transpuesta: ");
        imprimirTranspuesta(numeros);
        
        
    }
    public static void imprimir(int matriz[][]){
        for(int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                if(matriz[i][j] > 10){
                    System.out.print("0" +matriz[i][j]+ " ");
                }
                else{
                    System.out.print(matriz[i][j] + " ");
                }
            }
            System.out.println("");
        }
    }
    
    public static void imprimirTranspuesta(int matriz[][]){
        for(int j = 0; j < matriz.length; j++) {
            for (int i = 0; i < matriz[j].length; i++) {
                if(matriz[j][i] < 10){
                    System.out.print("0" +matriz[j][i]+ " ");
                }
                else{
                    System.out.print(matriz[j][i] + " ");
                }
            }
            System.out.println("");
        }
    }
}
