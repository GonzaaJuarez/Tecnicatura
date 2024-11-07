/*
    Uso de la palabra FINAL
    Esta palabra tiene diferentes significados dependiendo de donde se aplique:
    - Variables: evita cambiar el valor que almacena la variable.
    - Métodos: evita que se modifique la definición o el comportamiento desde una subclase(hija).
    - Clases: evita que se creen clases hijas.
    Otra característica es que normalmente cuando trabajamos con variables se conbina con el
    modificador de acceso estático para convertir una variable en una constante, es decir que no se
    puede modificar su valor, el ejemplo de esto es la clase Math en la cual todos sus atributos
    son del tipo static y final, es por eso que la variable pi* se conoce como constante.
*/
package test;

import domain.Persona;

public class TestFinal {
    public static void main(String[] args) {
        final int miDni = 36384954;
        System.out.println("miDni = " + miDni);
        //miDni = 41729345; //No se puede modificar
        System.out.println("Mi atributo constante es: " + Persona.CONSTANTE_AQUI);
        //Persona.CONSTANTE_AQUI = 9; //No se puede modificar
        
        final Persona persona1 = new Persona();
        //persona1 = new Persona(); //No se puede asignar nueva referencia
        persona1.setNombre("Gonzalo Juarez");
        System.out.println("Persona1 nombre: " + persona1.getNombre());
        persona1.setNombre("Ariel");
        System.out.println("Persona1 nombre: " + persona1.getNombre());        
    }
}
