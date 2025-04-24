package paquete1;

// CLASE 3 DEFAULT

class Clase2{ //ausencia de modificador
    String atributoDefault = "Valor de atributo default";
    
    /*
    Clase2(){
        System.out.println("Constructor default");
    }
    */

    public Clase2(){
        super();
        this.atributoDefault = "Modificación del atributo default";
        System.out.println("AtributoDefault = " + this.atributoDefault);
        this.metodoDefault();
    }
    
    void metodoDefault(){
        System.out.println("Metodo default");
    }
};
