
package domain;

public class Empleado extends Persona{
    //no se puede crear una clase hija de la final class
    public void imprimir(){
        System.out.println("Método para imprimir desde la clase hija");
        //no se puede sobreescribir desde la clase hija, si le metodo es final
    }
}
