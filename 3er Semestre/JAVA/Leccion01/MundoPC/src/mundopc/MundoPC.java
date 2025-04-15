/*
    Test del Proyecto MundoPC
 */
package mundopc;

import ar.com.system2024.mundopc.*;


public class MundoPC {
    public static void main(String[] args) {
        // COMPUTADORA 1
        Monitor monitor1 = new Monitor("Samsung", 24);
        Raton raton1 = new Raton("USB", "Logitech");
        Teclado teclado1 = new Teclado("USB", "Redragon");
        Computadora computadora1 = new Computadora("PC Gamer", monitor1, raton1, teclado1);
        
        // COMPUTADORA 2
        Monitor monitor2 = new Monitor("LG", 27);
        Raton raton2 = new Raton("Bluetooth", "HP");
        Teclado teclado2 = new Teclado("Bluetooth", "Microsoft");
        Computadora computadora2 = new Computadora("PC Oficina", monitor2, raton2, teclado2);
        
        
        // Crear ORDEN 1
        Orden orden1 = new Orden();
        // Agregar a la ORDEN
        orden1.agregarComputadora(computadora1);
        orden1.agregarComputadora(computadora2);
        // imprimir ORDEN
        orden1.mostrarOrden();
        
        // COMPUTADORA 3
        Monitor monitor3 = new Monitor("Acer", 22);
        Raton raton3 = new Raton("USB", "Genius");
        Teclado teclado3 = new Teclado("USB", "Genius");
        Computadora computadora3 = new Computadora("PC Escritorio", monitor3, raton3, teclado3);
        
        // COMPUTADORA 4
        Monitor monitor4 = new Monitor("ViewSonic", 21);
        Raton raton4 = new Raton("Bluetooth", "Dell");
        Teclado teclado4 = new Teclado("Bluetooth", "Dell");
        Computadora computadora4 = new Computadora("PC Estudiante", monitor4, raton4, teclado4);
       
        // COMPUTADORA 5
        Monitor monitor5 = new Monitor("HP", 24);
        Raton raton5 = new Raton("USB", "HP");
        Teclado teclado5 = new Teclado("USB", "HP");
        Computadora computadora5 = new Computadora("PC Trabajo", monitor5, raton5, teclado5);
        
        // COMPUTADORA 6
        Monitor monitor6 = new Monitor("BenQ", 25);
        Raton raton6 = new Raton("Bluetooth", "Logitech");
        Teclado teclado6 = new Teclado("Bluetooth", "Redragon");
        Computadora computadora6 = new Computadora("PC Diseño", monitor6, raton6, teclado6);
        
        // COMPUTADORA 7
        Monitor monitor7 = new Monitor("Asus", 23);
        Raton raton7 = new Raton("USB", "Corsair");
        Teclado teclado7 = new Teclado("USB", "Corsair");
        Computadora computadora7 = new Computadora("PC Gaming Secundaria", monitor7, raton7, teclado7);
        
        // COMPUTADORA 8
        Monitor monitor8 = new Monitor("MSI", 27);
        Raton raton8 = new Raton("Bluetooth", "Razer");
        Teclado teclado8 = new Teclado("Bluetooth", "Razer");
        Computadora computadora8 = new Computadora("PC Streaming", monitor8, raton8, teclado8);
       
        // COMPUTADORA 9
        Monitor monitor9 = new Monitor("Philips", 26);
        Raton raton9 = new Raton("Bluetooth", "Microsoft");
        Teclado teclado9 = new Teclado("Bluetooth", "Microsoft");
        Computadora computadora9 = new Computadora("PC Administración", monitor9, raton9, teclado9);
        
        // COMPUTADORA 10
        Monitor monitor10 = new Monitor("Samsung", 24);
        Raton raton10 = new Raton("USB", "Logitech");
        Teclado teclado10 = new Teclado("USB", "Logitech");
        Computadora computadora10 = new Computadora("PC Clonada", monitor10, raton10, teclado10);
        
        // COMPUTADORA Gonza
        Monitor monitorGonza = new Monitor("HP", 16);
        Raton ratonGonza = new Raton("Bluetooth", "Noga");
        Teclado tecladoGonza = new Teclado("USB", "HP");
        Computadora computadoraGonza = new Computadora("Laptop de Gonza", monitorGonza, ratonGonza, tecladoGonza);
        
        // Crear ORDEN 2
        Orden orden2 = new Orden();
        // Agregar a la ORDEN
        orden2.agregarComputadora(computadora7);
        orden2.agregarComputadora(computadora2);
        orden2.agregarComputadora(computadora5);
        orden2.agregarComputadora(computadora9);
        orden2.agregarComputadora(computadora1);
        orden2.agregarComputadora(computadora4);
        orden2.agregarComputadora(computadora6);
        orden2.agregarComputadora(computadora3);
        orden2.agregarComputadora(computadoraGonza); //Comutadora 11
        orden2.agregarComputadora(computadora8);
        orden2.agregarComputadora(computadora10);
        // imprimir ORDEN
        orden2.mostrarOrden();
        
    }
}
