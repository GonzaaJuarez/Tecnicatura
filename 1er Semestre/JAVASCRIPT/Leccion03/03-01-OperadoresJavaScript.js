
//Ejercicio: Encontrar números pares e impares
let par = 3;
if(par % 2 == 0){
    console.log("El número es PAR.")
}
else{
    console.log("El número es IMPAR.")
}

//Ejercicio: mayor de edad
let edad = 23;
if(edad >= 18){
    console.log("Es mayor de edad.")
}
else{
    console.log("NO es mayor de edad.")
}
//Ejercicio dentro de un rango
let dentroRango = 5;
let valMin = 0, valMax = 10;
if(dentroRango >= valMin && dentroRango <= valMax){
    console.log('Está dentro del rango')
}
else{
    console.log('NO Está dentro del rango')
}

// Ejercicio: Un padre puede asistir al juego de su hijo
let vacaciones = false;
let diaLibre = false;
let asistir = vacaciones || diaLibre
if (asistir){
    console.log('Puede asistir al juego.')
}
else{
    console.log('NO puede asistir al juego.')
}

// Operador Ternario
let resultado2 = 6 > 5 ? "Verdadero" : "Falso";
console.log(resultado2)
//Ejercicio número par (ternario)
let numero = 9;
resultado2 = numero % 2 == 0 ? "Es PAR": "Es IMPAR";
console.log(resultado2) 

// Convertir String a Número
let miNumero = "25a";
console.log(miNumero);
console.log(typeof miNumero);
let edad2 = Number(miNumero);
console.log(edad2);
console.log(typeof edad2)

if (isNaN(edad2)){ // Función IsNaN
    // verifica si la variable contiene solo numeros o no.
    console.log('La variable no solo contiene números')
}
else{
    if(edad2 >= 18){
        console.log('Debe votar')
    }
    else{
        if(edad2 == 16 || edad2 == 17)
            console.log('Puede votar')
        else{
            console.log('NO puede votar')
        }
    }
}



