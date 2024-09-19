/*
 
*/
package Operaciones;

public class PruebaAritmetica {
    public static void main(String[] args) {
        // memoria stack, almacena las variables
        var a = 8; // variables locales
        int b = 2; // varibales locales
        // se puede usar var para variable slocales
        
        miMetodo(); // llamamos al método
        
        Aritmetica aritmetica1 = new Aritmetica(); // CONSTRUCTOR 1
        aritmetica1.a = 3;
        aritmetica1.b = 7;
        aritmetica1.sumarNumeros();
        
        int resultado = aritmetica1.sumarConRetorno();
        System.out.println("Resultado = " + resultado);
        
        resultado = aritmetica1.sumarConArgumentos(4, 6);
        System.out.println("Resultado = " + resultado);
        
        System.out.println("Aritmetica1 a: " + aritmetica1.a);
        System.out.println("Aritmetica1 b: " + aritmetica1.b);
        
        Aritmetica aritmetica2 = new Aritmetica(5, 8); // CONSTRUCTOR 2
        System.out.println("Aritmetica2 a: " + aritmetica2.a);
        System.out.println("Aritmetica2 b: " + aritmetica2.b);
        
        //aritmetica1 = null; // limpia o destruye (no se utiliza, ya que ocurre automaticamente)
        //System.gc(); // limpia residuos del programa (no se utiliza, ya que ocurre automaticamente)
    }
    
    public static void miMetodo(){
        //a = 10; // la variable está limitada,no se puede trascender desde la clase main
        System.out.println("Aquí hay otro método");
    }
}
