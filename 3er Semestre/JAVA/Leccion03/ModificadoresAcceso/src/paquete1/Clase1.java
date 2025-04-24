package paquete1;

// CLASE 1 PUBLIC

public class Clase1 {
    public String atributoPublic = "Valor de atributo public";
    protected String atributoProtected = "Valor de atributo protected";
    
    public Clase1() {
        System.out.println("Constructor public");
    }
    
    protected Clase1(String atributoPublico) {
        System.out.println("Constructor protected");
    }
    
    public void metodoPublico(){
        System.out.println("Método public");
    }
    
    protected void metodoProtected(){
        System.out.println("Método protected");
    }
}
