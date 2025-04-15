
//Ejercicio Meses del año:

let mes = 7;

switch(mes){
    case 1: 
        console.log('El mes corresponde a ENERO');
        break;
    case 2:
        console.log('El mes corresponde a FEBRERO');
        break;
    case 3:
        console.log('El mes corresponde a MARZO');
        break;
    case 4:
        console.log('El mes corresponde a ABRIL');
        break;
    case 5:
        console.log('El mes corresponde a MAYO');
        break;
    case 6:
        console.log('El mes corresponde a JUNIO');
        break;
    case 7:
        console.log('El mes corresponde a JULIO');
        break;
    case 8:
        console.log('El mes corresponde a AGOSTO');
        break;
    case 9:
        console.log('El mes corresponde a SEPTIEMBRE');
        break;
    case 10:
        console.log('El mes corresponde a OCTUBRE');
        break;
    case 11:
        console.log('El mes corresponde a NOBIEMBRE');
        break;
    case 12:
        console.log('El mes corresponde a DICIEMBRE');
        break;
    default:
        console.log('Error al ingresar el mes.');
        break;
}

    //Opciión mejorada

let mes2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

function getDay(n){
    if(n < 1 || n > 12){
        throw new Error('Out of range');
    }
    return mes2[n-1];
}
console.log(getDay(7));