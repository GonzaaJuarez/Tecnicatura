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

function imprimir( tipo ){ // recibe una variable
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente')
        console.log(tipo._departamento)
    }
    else if(tipo instanceof Empleado){
        console.log('Es un objeto de tipo Empleado')
        //console.log(tipo._departamento) // No existe en la clase hija
    /*
    else if(tipo instanceof Object){ // El orden es jerarquico
        console.log('Es un objeto de tipo Object') // Clase padre de todas las clases
    }
    */
}

let empleado1 = new Empleado("Martín", 4700); // Objeto de la clase Padre
console.log(empleado1);

let gerente1 = new Gerente("Gonzalo", 5000, "Sistemas"); // Objeto de la clase Hija
console.log(gerente1);

imprimir(gerente1); // en el polimorfismo esta llamando al método de la clase Padre
imprimir(empleado1); // esta llamando al método de la clase hija    
// son las multiples formas en tiempo de ejecucion del polimorfismo