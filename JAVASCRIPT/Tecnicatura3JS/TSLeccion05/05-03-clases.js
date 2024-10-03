//let persona3 = new Persona('Agustín','Lucero',34) // No se puede crear antes de la clase

class Persona{ // Clase padre
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
}

class Empleado extends Persona{ // Clase hija
    constructor(nombre, apellido, edad, departamento){
        super(nombre, apellido, edad);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
        
}


// Creación de un objeto 1
let persona1 = new Persona("Juan", "Perez", 30);
//console.log(persona1);

// Imprimo objeto 1
console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.edad);

// Modifico el objeto 1
persona1.nombre = "Carlos";
persona1.apellido = "Martínez";
persona1.edad = 28;

// Imprimo objeto 1 modificado
console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.edad);

// Creación de un objeto 2
let persona2 = new Persona("Gonzalo", "Juarez", 24);
//console.log(persona2);

// Imprimo objeto 2
console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.edad);

// Modifico el objeto 2
persona2.nombre = "María";
persona2.apellido = "González";
persona2.edad = 17;

// Imprimo objeto 2 modificado
console.log(persona2.nombre);
console.log(persona2.apellido);
console.log(persona2.edad);



departamento1 = new Empleado("Valentín", "Gimenez", 24, "Sistemas");
console.log(departamento1);
console.log(departamento1.nombre);
console.log(departamento1.apellido);
console.log(departamento1.edad);
console.log(departamento1.departamento);