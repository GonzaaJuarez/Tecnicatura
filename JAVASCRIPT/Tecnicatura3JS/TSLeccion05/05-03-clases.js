//let persona3 = new Persona('Agustín','Lucero',34) // No se puede crear antes de la clase

class Persona{ // Clase padre

    static contadorPersonas = 0;// Atributo estático
    //email = 'valor default email'; // Atributo no estático

    static get MAX_OBJ(){ // Este método simula una constante
        return 5;
    }

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log('Se ha superado el máximo de objetos permitidos');
        }
        //console.log('Se creó un objeto ' + Persona.contadorObjetosPersona);
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
    nombreCompletoEdad(){
        return this.idPersona + ' - ' + this._nombre + ' ' + this._apellido + ', ' + this._edad + ' años';
    }
    // Sobreescribiendo el método de la clase padre
    toString(){ // Regresa un string
        // se aplica polirmorfismo que significa = multiples formas en tiempo de ejecución
        // El método que se ejecuta depende si es una referencia de tipo padre o hija
        return this.nombreCompletoEdad();
    }
    static saludar(){ // Método estático
        console.log("Saludos desde el método static");
    }
    static saludar2(Persona){ // Método estático
        console.log("Saludos a " + Persona.nombre + " " + Persona.apellido + " desde el método static");
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
    // Sobrescritura
    nombreCompletoEdad(){
        return super.nombreCompletoEdad() + ', ' + this._departamento;
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



let empleado1 = new Empleado("Valentín", "Gimenez", 24, "Sistemas");
console.log(empleado1);
console.log(empleado1.nombreCompletoEdad());
/*
console.log(empleado1.nombre);
console.log(empleado1.apellido);
console.log(empleado1.edad);
console.log(empleado1.departamento);
*/

// Object.prototype.toString  // Esta es la manera de acceder a tributos y métodos de manera dinámica
console.log(empleado1.toString());
console.log(persona1.toString());
console.log(persona2.toString());

// MÉTODO STATIC
// persona1.saludar() // No se puede utilizar desde un objeto
Persona.saludar() // Se puede utilizar desde la clase
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

// console.log(persona1.contadorObjetosPersona); // no se puede acceder a un atributo estático
console.log(Persona.contadorPersonas);
console.log(Empleado.contadorPersonas);

console.log(persona1.email); // email comentado
console.log(empleado1.email); // email comentado
// console.log(Persona.email); // no se puede acceder desde la clase

console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);

let persona3 = new Persona('Paula', 'Gallardo', 29);
console.log(persona3.toString());
console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10; // no se puede modificar, ni alterar
console.log(Persona.MAX_OBJ);

let persona4 = new Persona('Daniel', 'Martinez', 14);
console.log(persona4.toString());
let persona5 = new Persona('Florencia', 'Muños', 26);
console.log(persona5.toString());