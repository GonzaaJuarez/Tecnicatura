export class Computadora {

static contadorComputadora = 0;

constructor(
nombre,
Monitor,
Teclado,
Raton,

){
this.idComputadora = ++Computadora.contadorComputadora;
this.nombre = nombre;
this.Monitor = Monitor;
this.Teclado = Teclado;
this.Raton = Raton;


}

toString() {
    return `Computadora [ID: ${this.idComputadora}, Nombre: ${this.nombre}]\n  ${this.Monitor.mostrarDetalle()}\n  ${this.Teclado.mostrarDetalle()}\n  ${this.Raton.mostrarDetalle()}`;
}
}