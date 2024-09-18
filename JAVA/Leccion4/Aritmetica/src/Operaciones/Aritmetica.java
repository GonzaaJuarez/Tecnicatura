
package Operaciones;

public class Aritmetica {
    // Atributos de la clase
    int a;
    int b;
    
    // METODO
    public void sumarNumeros(){
        int resultado = a + b;
        System.out.println("Resultado = " + resultado);
    }
    
    public int sumarConRetorno(){
        //int resultado = a + b;
        //return resultado;
        return a + b;
    }
    
    public int sumarConArgumentos(int a, int b){
        this.a = a; // el argumento a se asigna el atributo this.a
        this.b = b; // el uso del this. es opcional
        //return a + b;
        return this.sumarConRetorno();
    }
}
