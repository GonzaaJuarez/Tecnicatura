package paquete1;

// TEST DEFAULT
// Solo se puede ejecutar dentro del mismo paquete

public class testDefault {
    public static void main(String[] args) {
        Clase2hija clase2hija = new Clase2hija();
        clase2hija.atributoDefault = "Cambio desde la prueba";
        System.out.println("Clase2Hija atributo default ="+clase2hija);
    }
}
