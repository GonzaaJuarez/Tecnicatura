package test;

import domain.*;

public class TestConversionObjetos {
    public static void main(String[] args) {
        Empleado empleado;
        empleado = new Escritor("Juan", 7000, TipoEscritura.CLASICO);
        //System.out.println("empleado = " + empleado);
        //System.out.println(empleado.obtenerDetalles()); //Si queremos acceder a métodos de la clase Escritor
        
        //empleado.getTipoEscritura(); // no es posible llamarlo directamente
        
        // DOWNCASTING
        // Hay dos opciones:
        // Primera opción
        //((Escritor)empleado).getTipoEscritura(); 
        // Segunda opción
        Escritor escritor = (Escritor)empleado;
        escritor.getTipoEscritura();
        
        // UPCASTING
        Empleado empleado2 = escritor;
        System.out.println(empleado2.obtenerDetalles());
    }
}
