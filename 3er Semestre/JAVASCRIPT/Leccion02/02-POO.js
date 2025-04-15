class Empleado {
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado [Nombre: ${this._nombre},Sueldo: ${this._sueldo}]`;
    }   
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }       

    obtenerDetalles(){
        return `Gerente [${super.obtenerDetalles()}, depto: ${this._departamento}]`
    }
}

let empleado1 = new Empleado("Martín", 4700); // Objeto de la clase Padre
console.log(empleado1);

let gerente1 = new Gerente("Gonzalo", 5000, "Sistemas"); // Objeto de la clase Hija
console.log(gerente1);

