
package test;

import domain.Persona;


public class TestMatrices {
    public static void main(String[] args) {
        int edades[][] = new int [3][2];
        System.out.println("edades = " + edades);
        edades[0][0] = 5; // Llenado manual
        edades[0][1] = 7;
        edades[1][0] = 8;
        edades[1][1] = 4;
        edades[2][0] = 2;
        edades[2][1] = 9;
        
        System.out.println("Edades 0-0 = " + edades[0][0]);
        System.out.println("Edades 0-1 = " + edades[0][1]);
        System.out.println("Edades 1-0 = " + edades[1][0]);
        System.out.println("Edades 1-1 = " + edades[1][1]);
        System.out.println("Edades 2-0 = " + edades[2][0]);
        System.out.println("Edades 2-1 = " + edades[2][1]);
        
        System.out.println("Ciclo For");
        for (int fila = 0; fila < edades.length; fila++) {
            for (int col = 0; col < edades[fila].length; col++) {
                System.out.println("Edad "+ fila + "-"+ col +" = " +edades[fila][col]);
            }
        }
        
        System.out.println("");
        System.out.println("Sintaxis con frutas");
        // Sintáxis clásica
        //String frutas [][] = new String[3][2];
        // Sintáxis simplificada
        String frutas [][] = {{"Limón", "Pomelo"},{"Ciruela", "Kiwi"},{"Banana", "Manzana"}};
        imprimir(frutas);
        /*
        for (int i = 0; i < frutas.length; i++) {
            for (int j = 0; j < frutas[i].length; j++) {
                System.out.println("Edad "+ i + "-"+ j +" = " + frutas[i][j]);
            }
        }
        */
        System.out.println("");
        System.out.println("Matriz con objetos");
        // Creamos una matriz de objetos
        Persona personas[][] = new Persona[2][3];
        // asignamos valores a la matriz
        personas[0][0] = new Persona("Gonzalo");
        personas[0][1] = new Persona("Valentín");
        personas[0][2] = new Persona("Franco");
        personas[1][0] = new Persona("Martín");
        personas[1][1] = new Persona("Daniel");
        personas[1][2] = new Persona("Juan");
        
        imprimir(personas);
    }
    
    public static void imprimir(Object matriz[][]){
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.println("Matriz "+i+ "-" +j+ ": " +matriz[i][j]);
            }
        }
    }
}
