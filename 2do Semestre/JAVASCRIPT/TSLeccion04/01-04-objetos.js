console.log("Tipos Primitivos");
let x = 10; // Variable primitiva
console.log(x.lenght);

// CREAR OBJETO
console.log("Crear objeto");
let persona = {
    nombre: "Gonzalo",
    apellido: "Juarez",
    email: "gonzaloarieljuarez11@gmail.com",
    edad: 24,
    idioma: "es", // lo mejor es escribirlo en mayuscula
    // por esto el toUpperCase para que de igual si esta en minúscula o en mayúscula
    get lang(){
        return this.idioma.toUpperCase(); // Convertir a mayúsculas
    },
    set lang(lang){
        this.idioma = lang.toUpperCase(); // Convertir a mayúsculas
    },
    // Crear un método dentro de un objeto"
    //método o función en javascript
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    },
    get nombreEdad(){
        return this.nombre + ", " + this.edad + " años";
    }
}


console.log("Ejecutando con un objeto");
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona)
console.log(persona.nombreCompleto());


console.log("Creando un nuevo objeto")
let persona2 = new Object(); // crea un nuevo objeto en la memoria
persona2.nombre = "Juan";
persona2.direccion = "Roque Saenz Peña 254";
persona2.telefono = "5492686786243"
console.log(persona2.telefono);


console.log("Usando ciclo for in")
console.log(persona["apellido"]); // accedemos como si fuera un arreglo
// for in y accedemos al objeto como si fuera un arreglo
for (propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}


console.log("Cambiando y borrando una propiedad");
//persona.apellido = "Martínez"; // Cambiar dinamicamente el valor del objeto
// cuidado al escribir la propiedad, ya que si la escribimos mal 
//se creará una nueva en vez de modificar la anterior 
persona.apellidos = "Martínez"; // crea una nueva propiedad
console.log(persona);
// borrar una propiedad
delete persona.apellidos;
console.log(persona);


// Distintas formas de imprimir un objeto
// NÚMERO 1: la más sencilla, concatenar cada valor a cada propiedad
console.log("Distintas formas de imprimir un objeto, FORMA 1:");
console.log(persona.nombre + ", " + persona.apellido);
// NÚMERO 2: a través del ciclo for in
console.log("Distintas formas de imprimir un objeto, FORMA 2:");
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}
// NÚMERO 3: a través de la función Object.values()
console.log("Distintas formas de imprimir un objeto, FORMA 3:");
let personaArray = Object.values(persona);
console.log(personaArray);
// NÚMERO 4: Utilizar el método JSON.stringify()
console.log("Distintas formas de imprimir un objeto, FORMA 4:");
let personaString = JSON.stringify(persona);
console.log(personaString);


console.log("METODO GET")
console.log(persona.nombreEdad);

console.log("METODO GET y SET EN IDIOMAS");
persona.lang = "en"; // con el metodo set, directamente lo guarda en mayúsculas
console.log(persona.lang);


function Persona3(nombre, apellido, email){ // Constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}
let padre = new Persona3("Sergio", "Perez", "sperez24@gmail.com");
padre.telefono = "5492472859465"; // propiedad exlusiva del objeto "padre"
console.log(padre.telefono);
console.log(padre);
console.log(padre.nombreCompleto());
let madre = new Persona3("Marianela", "Tapia", "mtapia73@gmail.com");
console.log(madre);
console.log(madre.nombreCompleto());
console.log(madre.telefono); // la propiedad no está definida


// Diferentes formas de crear objetos
// Todo despues del new es considerado objeto
// CASO OBJETO 1
let miObjeto1 = new Object(); // opción formal
// CASO OBJETO 2
let miObjeto2 = {}; // opción breve y recomendada

// CASO STRING 1
let miCadena = new String("Hola"); // opción formal
// CASO STRING 2
let miCadena2 = "Hola"; // opción breve y recomendada

// CASO NÚMERO 1
let miNumero = new Number(1); // opción formal
// CASO NÚMERO 2
let miNumero2 = 1; // opcion breve y recomendada

// CASO BOOLEAN 1
let miBoolean = new Boolean(false); // opción formal
// CASO BOOLEAN 2
let miBoolean2 = false; // opción breve y recomendada

// CASO ARRAY 1
let miArreglo = new Array(); // opción formal
// CASO ARRAY 2
let miArreglo2 = []; // opción breve y recomendada

// CASO FUNCION 1
let miFuncion = new Function(); // opción formal
// CASO FUNCION 2
let miFuncion2 = function(){}; // opción breve y recomendada

// USO DE PROTOTYPE
Persona3.prototype.telefono = "5492625786243";
console.log(padre);
console.log(madre);
console.log(padre.telefono);
console.log(madre.telefono);
madre.telefono = "5492472217392";
console.log(madre.telefono);


// USO DE CALL
let persona4 = {
    nombre: 'Juan',
    apellido: 'Lopez',
    nombreCompleto2: function(titulo, telefono){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + telefono;
    },
    nombreCompletoApply: function(){
        return this.nombre + ' ' + this.apellido;
    }
}
let persona5 = {
    nombre: 'Maria',
    apellido: 'Perez'
}

console.log(persona4.nombreCompleto2('Lic', '5492625686868'));
console.log(persona4.nombreCompleto2.call(persona5, 'Ing.', '5492625357324'));

// USO DE APPLY
console.log(persona4.nombreCompletoApply());
console.log(persona4.nombreCompletoApply.apply(persona5));

console.log(persona4.nombreCompleto2.apply(persona5)) // no toma el título ni el teléfono
// para ello hay que crear un arreglo con los valores de los parámetros
let arreglo = ['Ing.', '5492625357324'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo))
