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
    //método o función en javascript
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
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
persona2.telefono = "5492625786243"
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