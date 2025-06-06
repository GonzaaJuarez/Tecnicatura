package test;
import domain.*;

public class TestSobreescritura {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Gonzalo", 10000);
        imprimir(empleado1);
        //System.out.println("empleado1 = " + empleado1.obtenerDetalles());
        empleado1 = new Gerente("Manuel", 5000, "Sistemas");
        imprimir(empleado1);
        //System.out.printlns("gerente1 = " + gerente1.obtenerDetalles());
    }
    
    // Polimorfismo
    public static void imprimir(Empleado empleado){
        String detalles = empleado.obtenerDetalles();
        System.out.println("detalles = " + detalles);
    }
}
