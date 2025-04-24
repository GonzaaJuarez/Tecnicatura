package paquete1;

public class Clase2hija extends Clase2 {
    public Clase2hija(){
        super();
        this.atributoDefault = "Modificación del atributo default";
        System.out.println("AtributoDefault"+this.atributoDefault);
        this.metodoDefault();
    }
}
