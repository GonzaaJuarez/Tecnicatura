
import java.util.Scanner;

public class HolaMundo {

    public static void main(String[] args) {
        //System.out.println("Hola Mundo desde Java");

        /*int miVariable = 10;
        System.out.println(miVariable);
        miVariable = 5;
        System.out.println(miVariable); //tipo string
        String miVariableCadena = "Bienvenidos";
        System.out.println(miVariableCadena);
        miVariableCadena = "Sigamos creciendo en programación";
        System.out.println(miVariableCadena);
         */
        //var - inferencia de tipos en Java
        /*var miVariableEntera2 = 10;
        var miVariableCadena2 = "Seguimos trabajando en Java";
        System.out.println("miVariableEntera2 = " + miVariableEntera2);
        System.out.println("miVariableCadena2 = " + miVariableCadena2);*/
        // soutv + tab y aparece toda la linea de ariba
        //Reglas para definir una variable:
        //se recomienda usar Camel Case
        //no se pueden usar numeros, ni simbolos
        //Si puede iniciar en guion Bajo(_) y signo dolar($)
        //tambien se puede utilizar tildes, pero no es recomendable
        //var miVariableEjemplo = 45;
        /*
        var usuario = "Gonzalo";
        var titulo ="Estudiante";
        var union = titulo + " " + usuario;
        System.out.println("union = " + union);
         */
 /*
        var a = 8;
        var b = 4;
        System.out.println(a+b);
        //al ser numeros los toma como enteros, por lo tanto los suma
        System.out.println(usuario+a+b);
        //al haber una cadena antes, los toma como cadenas
        //por lo que solo escribe los numeros.*/
 /*
        //Ejercicio Caracteres especiales:
        var nombre = "Gonzalo";
        System.out.println("Nueva linea: \n" + nombre);
        // barra n es para hacer un salto de linea
        System.out.println("Tabulador: \t" + nombre);
        // barra t es para hacer un espacio
        System.out.println("\t .:MENU:.");
        System.out.println("Retroceso:\b\b\b" + nombre);
        // barra b es para mostrar la variable antes
        System.out.println("Comillas simple: \'" + nombre + "\'");
        // barra comilla simple para colocar comillas simples
        System.out.println("Comillas dobles: \"" +nombre+ "\"");
        // barra comilla dobre para colocar comillas dobres
         */
 /*
        //Clase Scanner:
        Scanner entrada = new Scanner(System.in);
        // al presionar ctrl + spacio al escribir Scanner
        //se genera el import java.util.Scanner al principio
        //sino al tocar a la izq lo podemos hacer o manual.
        //entrada es el nombre del scanner, puede ser cualquier otro
        System.out.println("Digite su nombre: ");
        var usuario2 = entrada.nextLine();
        //una de las formas de pedirle al usuario
        System.out.println("usuario2 = " + usuario2);
        System.out.println("Escriba el titulo: ");
        var titulo2 = entrada.nextLine();
        System.out.println("Resultado: " + titulo2 + " " + usuario2);
         */
        /*
        //Numeros enteros:
        byte numEnteroByte = 127;
        System.out.println("numEnteroByte = " + numEnteroByte);
        byte numEnteroByte1 = (byte) 129;
        // se pasa de rango, y vuelve a contar desde -128
        //por ende 128 sería -128 y por lo tanto 129 es -127
        System.out.println("numEnteroByte1 = " + numEnteroByte1);
        System.out.println("Valor minimo del byte: " + Byte.MIN_VALUE);//-128
        System.out.println("Valor maximo del byte: " + Byte.MAX_VALUE);//127

        short numEnteroShort = 32767;
        System.out.println("numEnteroShort = " + numEnteroShort);
        System.out.println("Valor minimo del short: " + Short.MIN_VALUE);//-32768
        System.out.println("Valor maximo del short: " + Short.MAX_VALUE);//32767
        
        int numEnteroInt = 2147483647;
        System.out.println("numEnteroInt = " + numEnteroInt);
        System.out.println("Valor minimo del int: " + Integer.MIN_VALUE);//-2147483648
        System.out.println("Valor maximo del int: " + Integer.MAX_VALUE);//2147483647
        
        long numEnteroLong = 9223372036854775807L;
        //Si el numero es demaciado largo agregarle la L al final
        System.out.println("numEnteroLong = " + numEnteroLong);
        System.out.println("Valor minimo del long: " + Long.MIN_VALUE);//-9223372036854775808
        System.out.println("Valor maximo del long: " + Long.MAX_VALUE);//9223372036854775807
        */
        /*
        //Numeros Reales o con decimal:
        float numFloat = 3.4028235E38F;
        //colocar la F mayuscula para aclarar que es float
        //o sino se puede escribir (float) tal cual antes del valor
        System.out.println("numFloat = " + numFloat);
        System.out.println("Valor minimo del float: " + Float.MIN_VALUE);//1.4E-45
        System.out.println("Valor maximo del float: " + Float.MAX_VALUE);//3.4028235E38
        
        double numDouble = 1.7976931348623157E308;
        System.out.println("numDouble = " + numDouble);
        System.out.println("Valor minimo del double: " + Double.MIN_VALUE);//4.9E-324
        System.out.println("Valor maximo del double: " + Double.MAX_VALUE);//1.7976931348623157E308
        */
        /*
        // Inferencia de tipos var y tipos primitivos
        var numEntero = 20;
        System.out.println("numEntero = " + numEntero);
        var numFloat = 10.3F; //con el punto se convierte en double, colocamos F para que sea float
        System.out.println("numFloat = " + numFloat);
        var numDouble = 3.5;
        System.out.println("numDouble = " + numDouble);
        */
        /*
        //Primitivos CHAR
        char miVariableChar = 'a';
        System.out.println("miVariableChar = " + miVariableChar);
        char varCaracater = '\u00AE'; // indicamos a Java con el codigo unicode
        System.out.println("varCaracater = " + varCaracater);
        char varCharacterDecimal = 174; // valor decimal del unicode
        System.out.println("varCharacterDecimal = " + varCharacterDecimal);
        char varCharacterSimbolo = '®'; //con el caracter (copiar y pegar)
        System.out.println("varCharacterSimbolo = " + varCharacterSimbolo);
        
        var varCaracater2 = '\u00AE'; // indicamos a Java con el codigo unicode
        System.out.println("varCaracater2 = " + varCaracater2);
        var varCharacterDecimal2 = (char)174; // lo toma como entero, por eso especificar tipo char
        System.out.println("varCharacterDecimal2 = " + varCharacterDecimal2);
        var varCharacterSimbolo2 = '®'; //con el caracter (copiar y pegar)
        System.out.println("varCharacterSimbolo2 = " + varCharacterSimbolo2);
        
        int varEnteroChar = '®'; // muestra el valor decimal asociado al signo
        System.out.println("varEnteroChar = " + varEnteroChar);
        int caracterChar = 'b';
        System.out.println("caracterChar = " + caracterChar);
        */
        /*
        //Tipos primitivos Booleanos
        boolean varBool = true; // tambien se puede usar var
        System.out.println("varBool = " + varBool);
        
        if(varBool){
            System.out.println("La bandera es VERDE");
        }
        else{
            System.out.println("La bandera es ROJA");
        }
        // Algoritmo: ¡Es mayor de edad?
        var edad = 23;
        if(edad >= 18){
            System.out.println("Eres mayor de edad.");
        }
        else{
            System.out.println("NO eres mayor de edad.");
        }
        */
        
        //Converciones de tipos primitivos
        var edad = Integer.parseInt("23"); //de string a int
        System.out.println("edad = " + (edad + 2)); //puedo sumar, porque es un int
        var valorPi = Double.parseDouble("3.1416"); //de string a double
        System.out.println("valorPi = " + valorPi);
        
        // pedir un valor
        var entrada = new Scanner(System.in);
        System.out.println("Digite su edad: ");
        edad = Integer.parseInt(entrada.nextLine());
        System.out.println("edad = " + edad);
        
        var edadTexto = String.valueOf(23);
        System.out.println("edadTexto = " + edadTexto);
        var fraseChar = "GonzaloJuarez".charAt(3); //muestra el caracter que ocupa el lugar que se indique
        System.out.println("fraseChar = " + fraseChar);
        
        System.out.println("Digite un caracter: ");
        fraseChar = entrada.nextLine().charAt(0);
        System.out.println("fraseChar = " + fraseChar);
        
    }

}
