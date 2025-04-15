/*
    Clase Computadora
 */
package ar.com.system2024.mundopc;

public class Computadora {
    private final int idComputadora;
    private String nombre;
    private Monitor monitor;
    private Raton raton;
    private Teclado teclado;
    private static int contadorComputadoras;
    
    private Computadora(){
        this.idComputadora = ++Computadora.contadorComputadoras;
    }

    public Computadora(String nombre, Monitor monitor, Raton raton, Teclado teclado){
        this(); //LLamar al constructor vacío
        this.nombre = nombre;
        this.monitor = monitor;
        this.raton = raton;
        this.teclado = teclado;
    }

    public int getIdComputadoras(){
        return idComputadora;
    }
    
    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Monitor getMonitor() {
        return this.monitor;
    }

    public void setMonitor(Monitor monitor) {
        this.monitor = monitor;
    }

    public Raton getRaton() {
        return this.raton;
    }

    public void setRaton(Raton raton) {
        this.raton = raton;
    }

    public Teclado getTeclado() {
        return this.teclado;
    }

    public void setTeclado(Teclado teclado) {
        this.teclado = teclado;
    }

    @Override
    public String toString() {
        return "Computadora: [" + "idComputadora: " + idComputadora + ", nombre: " + nombre + ", " + monitor + ", " + raton + ", " + teclado + ']';
    }
    
    
    
}
