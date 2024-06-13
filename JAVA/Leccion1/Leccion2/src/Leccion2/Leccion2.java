
package Leccion2;

public class Leccion2 {
    public static void main(String[] args) {
        
        // Condicional IF / ELSE
        var condicion = true;
        if(condicion){
            System.out.println("Condición verdadera");
        }
        else{
            System.out.println("Condición falsa");
        }
        
        
        // Ejercicico: Convertir Numeros del 1a5 a texto
        var numero = 2;
        var numeroTexto = "Número desconocido";
        
        if(numero == 1){
            numeroTexto = "Número UNO";
        }
        else if(numero == 2){
            numeroTexto = "Número DOS";
        }
        else if(numero == 3){
            numeroTexto = "Número TRES";
        }
        else if(numero == 4){
            numeroTexto = "Número CUATRO";
        }
        else if(numero == 5){
            numeroTexto = "Número CINCO";
        }
        else{
            numeroTexto = "Numero desconocido"; //se podria dejar vacio el else, porque ya esta definido asi antes del if
        }
        System.out.println("numeroTexto = " + numeroTexto);
        
        
        
        
    }
}
