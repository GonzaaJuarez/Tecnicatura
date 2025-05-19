
miFuncion2();
miFuncion1();

function miFuncion1(){
    console.log('Función 1');
}

function miFuncion2(){
    console.log('Función 2');
}

// Funciónes de tipo callback
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let resp = op1 + op2;
    funcionCallback(`Resultado: ${resp}`)
}

sumar(5, 3, imp);

// llamadas asinncronas con uso setTimeOut
function miFuncionCallback(){
    console.log('Saludo asíncrono 1, después de tres segundos');
}

setTimeout(miFuncionCallback, 3000); // espera 3 segundo en ejecutarse

setTimeout(function(){console.log('Saludo asíncrono 2, después de cinco segundos')}, 5000);

setTimeout(() => console.log('Saludo asíncrono 3, después de siete segundos'), 7000);

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

//  nos va a mostrar la hora cada un segundo
setInterval(reloj, 1000);