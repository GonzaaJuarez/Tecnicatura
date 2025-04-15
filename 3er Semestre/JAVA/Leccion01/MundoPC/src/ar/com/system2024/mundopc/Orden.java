/*
    Clase Orden
 */
package ar.com.system2024.mundopc;

public class Orden {
    private final int idOrden;
    private Computadora computadora[];
    private static int contadorOrdenes;
    private static final int MAX_COMPUTADORAS = 10;
    private int contadorComputadoras;
    
    public Orden(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadora = new Computadora[Orden.MAX_COMPUTADORAS];
    }
    
    public void agregarComputadora(Computadora computadora){
        if(this.contadorComputadoras < Orden.MAX_COMPUTADORAS){
            this.computadora[this.contadorComputadoras++] = computadora;
        }
        else{
            System.out.println("Has superado el límite: " + Orden.MAX_COMPUTADORAS);
        }
    }
    
    public void mostrarOrden(){
        System.out.println("Orden N°: "+ this.idOrden);
        System.out.println("Computadoras en la Orden N°: "+ this.idOrden);
        for(int i = 0; i < this.contadorComputadoras; i++){
            System.out.println(this.computadora[i]);
        }
    }
}
