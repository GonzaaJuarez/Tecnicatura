import {Raton} from './Raton.js';
import {Teclado} from './Teclado.js';
import {Computadora} from "./Computadora.js"
import {Monitor} from './Monitor.js';
import {Orden} from './Orden.js';



const raton = new Raton("usb", "hp");
const teclado = new Teclado("jbl");
const monitor = new Monitor("lg", 24);
const computadora = new Computadora("computadora", monitor, teclado, raton);

const orden = new Orden();
orden.agregarComputadora(computadora);
console.log(orden.mostrarOrden());

// POLIMORFISMO
// Creamos varios dispositivos distintos
const dispositivos = [
    new Raton("bluetooth", "logitech"),
    new Teclado("razer"),
    new Monitor("samsung", 27)
  ];
  
  // Recorremos el array y llamamos al mismo método
  dispositivos.forEach(dispositivo => {
    // Llama al método adecuado según la clase
    console.log(dispositivo.mostrarDetalle());
  });
  