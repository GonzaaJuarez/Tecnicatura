package test;

public class TestAutoboxingUnboxing {
    public static void main(String[] args) {
        /* 
        Clases envolventes o Wrapper
            Clases envolventes de tipos primitivos
                int = la clase envolvente es integer
                long = la clase envolvente es Long
                float = la clase envolvente es Float
                double = la clase envolvente es Double
                boolean = la clase envolvente es Boolean
                byte = la clase envolvente es Byte
                char = la clase envolvente es Character
                short = la clase envolvente es Short
        */ 
        int enteroPrim = 10;//Tipo Primitivo
        System.out.println("enteroPrim = " + enteroPrim);
        
        // AUTOBOXING
        Integer entero = 10; //Tipo Object con la clase Integer
        //System.out.println("entero = " + entero); //primitivo
        //System.out.println("entero = " + entero.intValue()); //int
        //System.out.println("entero = " + entero.toString());//string
        //System.out.println("entero = " + entero.shortValue() );//short
        System.out.println("entero = " + entero.doubleValue());//double
        
        //UNBOXING
        int entero2 = entero;
        System.out.println("entero2 = " + entero2);
    }
}
