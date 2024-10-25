/*
    Ejercicio 5:
    Crear y cargar una matriz de n x m
    Mostrar la suma de cada fila y de cada columna.
*/

package matrices_ejercicio_5;
import java.util.Scanner; // para pedirle al usuario

public class Matrices_Ejercicio_5 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // clase scanner
        
        //n = filas
        //m = columnas
        
        // Pedir al usuario dimenciones de la matriz
        System.out.println("Digite el número de filas: ");
        int n = Integer.parseInt(scanner.nextLine());
        System.out.println("Digite un número de columnas: ");
        int m = Integer.parseInt(scanner.nextLine());
        
        // CREAR MATRIZ
        int numeros[][] = new int [n][m];
        
        //LLenar matriz
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                System.out.println("Digite un número para la celda ["+i+"]["+j+"]: ");
                numeros[i][j] = Integer.parseInt(scanner.nextLine());
            }
        }
        
        // Mostrar matriz
        System.out.println("Matriz "+n+"x"+m+":");
        for(int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                    System.out.print(numeros[i][j] + " ");
            }
            System.out.println("");
        }
        System.out.println("");
        
        // definir variables para la suma de filas y columnas
        int totalFilas[] = new int [n];
        int totalColumnas[] = new int [m];
        int suma = 0;
        
        
        //suma filas
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                suma += numeros[i][j];
            }
            totalFilas[i] = suma;
            suma = 0;
        }
        //suma columnas
        for (int j = 0; j < m; j++) {
            for (int i = 0; i < n; i++) {
                suma += numeros[j][i];
            }
            totalColumnas[j] = suma;
            suma = 0;
        }
        
        // imprimir
        System.out.println("Total de suma de filas:");
        for (int i = 0; i < n; i++) {
            System.out.println("El total de la fila "+i+" es:" + totalFilas[i]);
        }
        System.out.println("");
        System.out.println("Total de suma de columnas:");
        for (int i = 0; i < m; i++) {
            System.out.println("El total de la columna "+i+" es:" + totalColumnas[i]);
        }
    }
}
