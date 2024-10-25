
package test;

public class TestArreglos {
    public static void main(String[] args) { // lado derecho se instancia un objeto
        int edades [] = new int [3]; // lado izquierdo se declara la variabel
        System.out.println("edades = " + edades);
        edades[0] = 17;
        System.out.println("edades 0 = " + edades[0]);
        edades[1] = 24;
        System.out.println("edades 1 = " + edades[1]);
        edades[2] = 35;
        System.out.println("edades 2 = " + edades[2]);
        //edades[3] = 9; // Fuera de rango
        
        for (int i = 0; i < edades.length; i++){
             System.out.println("Edad " +i+ ": " + edades[i] + " años");
        }
    }
}
