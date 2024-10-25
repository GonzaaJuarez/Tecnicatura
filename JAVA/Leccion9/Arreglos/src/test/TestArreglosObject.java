
package test;

import domain.Persona;

public class TestArreglosObject {
    public static void main(String[] args) {
        Persona personas[] = new Persona[2];
        personas[0] = new Persona("Gonzalo");
        personas[1] = new Persona("Valentín");
        System.out.println("Persona 0 = " +  personas[0]);
        System.out.println("Persona 1 = " +  personas[1]);
        
        for (int i = 0; i < personas.length; i++){
            System.out.println("Persona " +i+ ": " +personas[i]);
        }
        
        // Tabajamos con arreglos en la sintáxis resumida
        String frutas[] = {"Banana", "Manzana", "Pera", "Durazno"};
        
        for (int i = 0; i < frutas.length; i++){
            System.out.println("Fruta " +i+ ": " +frutas[i]);
        }
    }
}
