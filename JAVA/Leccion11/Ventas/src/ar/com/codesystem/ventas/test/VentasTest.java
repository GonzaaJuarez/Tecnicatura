
package ar.com.codesystem.ventas.test;
import ar.com.codesystem.ventas.*;

public class VentasTest {
    public static void main(String[] args) {
        
        Producto producto1 = new Producto("Pantalón", 14500.00);
        Producto producto2 = new Producto("Campera", 67900.00);
        
        Orden orden1 = new Orden();
        orden1.agregarProducto(producto1);
        orden1.agregarProducto(producto2);
        orden1.mostrarOrden();
        
        /*
            Tarea:
            Crear más objetos de tipo producto (10) y de tipo orden (2)
            y usar mostrarOrden.
        */
        Producto producto3 = new Producto("Remera", 25300.00);
        Producto producto4 = new Producto("Gorra", 9900.00);
        Producto producto5 = new Producto("Zapatillas", 190000.00);
        Producto producto6 = new Producto("Camisa", 22700.00);
        Producto producto7 = new Producto("Gafas de sol", 26000.00);
        Producto producto8 = new Producto("Cinturón", 10600.00);
        Producto producto9 = new Producto("Sombrero", 8600.00);
        Producto producto10 = new Producto("Bermuda", 11900.00);
        Producto producto11 = new Producto("Buzo", 78200.00);
        
        Orden orden2 = new Orden();
        orden2.agregarProducto(producto1);
        orden2.agregarProducto(producto2);
        orden2.agregarProducto(producto3);
        orden2.agregarProducto(producto4);
        orden2.agregarProducto(producto5);
        orden2.agregarProducto(producto6);
        orden2.agregarProducto(producto7);
        orden2.agregarProducto(producto8);
        orden2.agregarProducto(producto9);
        orden2.agregarProducto(producto10);
        //orden2.agregarProducto(producto11); // Se pasa del máximo
        orden2.mostrarOrden();
        
        Orden orden3 = new Orden();
        orden3.agregarProducto(producto1);
        orden3.agregarProducto(producto3);
        orden3.agregarProducto(producto5);
        orden3.agregarProducto(producto7);
        orden3.agregarProducto(producto9);
        orden3.agregarProducto(producto11);
        orden3.mostrarOrden();
        
        
    }
}
