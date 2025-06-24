let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion){
        resolver('Resolvió correctamente');
    }
    else{
        rechazar('Se produjo un error')
    }

});

/*
miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);
*/

/*
//miPromesa.then(valor =>console.log(valor).catch(error => console.log(error))); // en una linea

miPromesa
    .then(valor =>console.log(valor))
    .catch(error => console.log(error));
*/

let promesa = new Promise( (resolver) => {
    // no funca si arriba esta en false
    //console.log('Inicio Función');
    setTimeout( () => resolver('Saludos desde la promesa, callback, función flecha y setTimeOut'), 3000);
    //console.log('Fin Función');
});

// Llamamos a la promesa
//promesa.then( valor => console.log(valor));

// async indica que una función regresa una promesa
async function miFuncionConPromesa(){
    return 'Saludos con promesas y async';
}

// Llamado de la función con promesa async
//miFuncionConPromesa().then(valor => console.log(valor));

async function funcionConPromesaAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con Await')
    });
    console.log(await miPromesa)
    // await llama a la promesa
    // solo se puede usar en funciones con async
}

// Llamado de la funcion con promesa y await
//funcionConPromesaAwait();

// Promesas, await, async y setTimeOut
async function funcionConAwaitTimeOut() {
    let miPromesa = new Promise( resolver => {
        console.log('Inicio Función');
        setTimeout(() => resolver('Promesa con async, await y setTimeOut'), 5000);
        console.log('Fin Función');
    });
    console.log(await miPromesa);
}

// Llamamos a la función con Promesas, await, async y setTimeOut
funcionConAwaitTimeOut();