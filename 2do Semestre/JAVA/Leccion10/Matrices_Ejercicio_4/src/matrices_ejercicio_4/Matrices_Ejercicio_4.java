/*
    Ejercicio 4:
    Crear una matriz de tamaño 7x7 y llenarla de forma que los elementos de la
    diagonal principal sean 1 y el resto cero
*/

package matrices_ejercicio_4;


public class Matrices_Ejercicio_4 {
    
    public static void main(String[] args) {
        
        // CREAR MATRIZ
        int numeros[][] = new int [7][7];
        
        // LLENAR MATRIZ
        for (int i = 0; i < numeros.length; i++) {
            for (int j = 0; j < numeros[i].length; j++) {
                if(i == j){
                    numeros[i][j] = 1; // la diagonal siemrpe es donde i = j
                }
                else{
                    numeros[i][j] = 0; // el resto 0
                }
            }
        }
        
        //Imprimir matriz
        System.out.println("  Matriz 7x7");
        imprimir(numeros);
        
    }
    // MÉTODO PARA IMPRIMIR
    public static void imprimir(int matriz[][]){
        for(int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                    System.out.print(matriz[i][j] + " ");
            }
            System.out.println("");
        }
    }
}
