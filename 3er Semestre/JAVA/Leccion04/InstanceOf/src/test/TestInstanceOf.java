package test;
import domain.*;

public class TestInstanceOf {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Gonzalo", 10000);
        determinarTipo(empleado1);
        empleado1 = new Gerente("Manuel", 5000, "Sistemas");
        determinarTipo(empleado1);
    }
    
    // Polimorfismo
    public static void determinarTipo(Empleado empleado){
        if(empleado instanceof Gerente){
            System.out.println("Es de tipo Gerente");
            //((Gerente) empleado).getDepartamento();
            //System.out.println("gerente = " + empleado);
            Gerente gerente = (Gerente)empleado;
            System.out.println("gerente = "+ gerente.getDepartamento());
        }
        else if(empleado instanceof Empleado){
            System.out.println("Es de tipo Empleado");
            //Gerente gerente = (Gerente)empleado;
            //System.out.println("gerente = "+ gerente.getDepartamento());
        }
        else if(empleado instanceof Object){
            System.out.println("Es de tipo Object");
        }
    }
}
