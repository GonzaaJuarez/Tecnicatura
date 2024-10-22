
package domain;

public class Empleado extends Persona{
    private int idEmpleado;
    private double sueldo;
    private static int contadorEmpleado;

    // Constructores
    public Empleado(){ // constructor vacío
        this.idEmpleado = ++Empleado.contadorEmpleado;
    }
    public Empleado(String nombre, double sueldo) {
        //super(nombre);
        this(); // se llama al constructor vacío
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    
    // GETTERS and SETTERS
    public int getIdEmpleado() {
        return this.idEmpleado;
    }

    public double getSueldo() {
        return this.sueldo;
    }
    public void setSueldo(double sueldo) {
        this.sueldo = sueldo;
    }
    
    // TOSTRING
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Empleado{");
        sb.append("idEmpleado=").append(idEmpleado);
        sb.append(", sueldo=").append(sueldo);
        sb.append(", ").append(super.toString());
        sb.append('}');
        return sb.toString();
    }
    
    
}
