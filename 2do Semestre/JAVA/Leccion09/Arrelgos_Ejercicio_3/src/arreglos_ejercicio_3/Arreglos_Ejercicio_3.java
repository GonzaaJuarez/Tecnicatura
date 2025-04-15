/*
    Ejercicio 3:
    Leer 5 números por teclado, almacenarlos en un arreglo y a continuación
    realizar la media de los números positivos, de los negativos y de los ceros.
*/

package arreglos_ejercicio_3;
import java.util.Scanner; // para pedirle al usuario

public class Arreglos_Ejercicio_3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // clase scanner
        
        int numeros[] = new int [5];
        int contadorPositivos = 0, contadorNegativos = 0, contadorCeros = 0;
        int sumaPositivos = 0, sumaNegativos = 0, sumaCeros = 0;
        int mediaP ,mediaN, mediaC;
        // pedirle al usuario los números
        for(int i = 0; i < numeros.length; i++){
            System.out.println("Digite un número: ");
            numeros[i] = Integer.parseInt(scanner.nextLine());
        }
        // imprimir números
        
        for (int i = 4; i >= 0; i--){
            if(numeros[i] > 0){
                contadorPositivos += 1;
                sumaPositivos += numeros[i];
            }
            else if(numeros[i] < 0){
                contadorNegativos += 1;
                sumaNegativos += numeros[i];
            }
            else{
                contadorCeros += 1;
                sumaCeros += numeros[i];
            }
        }
        
        if(contadorPositivos > 0){
            mediaP = (sumaPositivos/contadorPositivos);
            System.out.println("La media de los " +contadorPositivos+ " números positivos ingresados es: " + mediaP);
        }
        else{
            System.out.println("No se ingresaron números Positivos");
        }
        if(contadorPositivos > 0){
            mediaN = (sumaNegativos/contadorNegativos);
            System.out.println("La media de los " +contadorNegativos+ " números Negativos ingresados es: " + mediaN);
        }
        else{
            System.out.println("No se ingresaron números Negativos");
        }
        if(contadorCeros > 0){
            mediaC = (sumaCeros/contadorCeros);
            System.out.println("La media de los " +contadorCeros+ " números Ceros ingresados es: " + mediaC);
        }
        else{
            System.out.println("No se ingresaron números Cero");
        }
    }
}
