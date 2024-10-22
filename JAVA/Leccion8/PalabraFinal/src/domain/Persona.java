
package domain;

// Final class
public /*final*/ class Persona {
    
    // Atributo Constante y final
    public final static int CONSTANTE_AQUI = 15;
    private String nombre;

    public String getNombre() {
        return this.nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }    
    
    // Final method
    public /*final*/ void imprimir(){
        System.out.println("Método para imprimir");
    }
}
