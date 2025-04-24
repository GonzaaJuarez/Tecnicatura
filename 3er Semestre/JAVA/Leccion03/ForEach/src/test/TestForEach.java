
package test;

import domain.Persona;

public class TestForEach {
    public static void main(String[] args) {
        int edades[] = {14, 27, 42, 31, 25, 24, 17};
        
        // Otra sintaxis del Ciclo for
        for (int edad: edades) { //sintaxis del ForEach
            System.out.println("Edad = " + edad);
        }
        /*//For común
        for (int i = 0; i < edades.length; i++) {
            System.out.println("Edad = " + i);
        }
        */
        
        Persona personas[] = {new Persona("Gonzalo"), new Persona("Ariel"), new Persona("Juarez")};
        
        for(Persona persona: personas){
        System.out.println("Persona = " + persona);
        }
    }
}

