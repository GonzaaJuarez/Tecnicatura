
package ar.com.codesystem.ventas;

public class Producto {
    // Atributos de la clase
    private int idProducto;
    private String nombre;
    private double precio;
    private static int contadorProductos;
    
    // Constructor vacío
    private Producto(){
        this.idProducto = ++Producto.contadorProductos;
    }
    // Constructor
    public Producto(String nombre, double precio){
        this(); // LLamamos al constructor vacío
        this.nombre = nombre;
        this.precio = precio;
    }
    
    //Getters and Setters
    public int getIdProducto() {
        return this.idProducto;
    }

    public String getNombre() {
        return this.nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getPrecio() {
        return this.precio;
    }
    public void setPrecio(double precio) {
        this.precio = precio;
    }

    // toString
    @Override
    public String toString() {
        return "Producto{" + "idProducto=" + idProducto + ", nombre=" + nombre + ", precio=" + precio + '}';
    }   
}
