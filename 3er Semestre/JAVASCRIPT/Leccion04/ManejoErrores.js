'use strict';
/*
x = 10;
console.log('Continuamos...') // Esto no se llega a ver
*/

// Para evitar el error:
try{
    let x = 10; 
    miFuncion(); 
    // variable y funcion sin definir
    throw 'Mi Error';
}
catch (error){
    console.log( typeof(error) );
    console.log( error );
}
finally {
    console.log('Termina la revisión de errores')
}
console.log('Continuamos...')

let resultado = 'a';

try{
    //y = 5;
    if(isNaN(resultado)) throw 'No es un número';
    else if( resultado === '') throw 'Es una cadena vacía'
    else if( resultado >= 0) throw 'Valor positivo'
    else if( resultado <= 0) throw 'Valor Negativo'
}
catch( error ){
    console.log( error );
    console.log( error.name )
    console.log (error.message)
}
finally{
    console.log('Termina la revisión de errores 2')
}