
package Clases;

public class PruebaPersona {
    public static void main(String[] args) {
        Persona persona1 = new Persona(); // llamamos al constructor
        persona1.nombre = "Gonzalo";
        persona1.apellido = "Juarez";
        persona1.obtenerInformacion();
        
        Persona persona2 = new Persona();
        System.out.println("persona2 = " + persona2);
        System.out.println("persona1 = " + persona1);
        persona2.obtenerInformacion();
        persona2.nombre = "Franco";
        persona2.apellido = "Perez";
        persona2.obtenerInformacion();
        
    }
}
