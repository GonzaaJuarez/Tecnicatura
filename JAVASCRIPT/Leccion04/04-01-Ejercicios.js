
// Ejercicio 1: Calcular estación del año
let mes = 7; // número del mes que desea saber la estación

if (mes >= 1 && mes <= 2 || mes == 12){
    console.log('La estación correspondiente al mes ' + mes + ', es VERANO' );
}
else if(mes >= 3 && mes <= 5){
    console.log('La estación correspondiente al mes ' + mes + ', es OTOÑO');
}
else if (mes >= 6 && mes <= 8){
    console.log('La estación correspondiente al mes ' + mes + ', es INVIERNO' );
}
else if(mes >= 9 && mes <= 11){
    console.log('La estación correspondiente al mes ' + mes + ', es PRIMAVERA');
}
else{
    console.log('EL valor ' + mes + ' NO corresponde a un mes del año');
}





// Ejercicio 1: Calcular estación del año
// UTILIZANDO SWITCH
//tambien puedo usar el switch con cadenas
switch(mes){
    case 12: case 1: case 2: 
        console.log('La estación correspondiente al mes ' + mes + ', es VERANO');
        break;
    case 3: case 4: case 5:
        console.log('La estación correspondiente al mes ' + mes + ', es OTOÑO');
        break;
    case 6: case 7: case 8:
        console.log('La estación correspondiente al mes ' + mes + ', es INVIERNO');
        break;
    case 9: case 10: case 11:
        console.log('La estación correspondiente al mes ' + mes + ', es PRIMAVERA');
        break;
    default:
        console.log('EL valor ' + mes + ' NO corresponde a un mes del año');
}






// Ejercicio 2: Hora del día (a mi manera)
let hora = 18; // Ingresar la hora en formato 24Hs

console.log('Rutina a realizar para la hora ' + hora + 'hs:');
if (hora == 23 || hora <= 5){
    console.log('Dormir.');
}
else if (hora == 6){
    console.log('Despertar y desayunar.');
}
else if (hora >= 7 && hora <= 11){
    console.log('Trabajo.');
}
else if (hora >= 12 && hora <= 13){
    console.log('Almuerzo.');
}
else if (hora >= 14  && hora <= 15){
    console.log('Siesta.');
}
else if (hora >= 16 && hora <= 19){
    console.log('Tiempo libre, hobbies, ejercicio o actividades recreativas');
}
else if (hora == 20){
    console.log('Cena.');
}
else if (hora >= 21 && hora <= 22){
    console.log('Preparativos antes de dormir, revisar correos o redes sociales');
}
else{
    console.log('Valor equivocado, rango de 0 a 23 horas');
}




//Ejercicio 2: Hora del día (Profe)
let horaDia = 18;
let mensaje;

if (horaDia >= 6 && horaDia <= 11){
    console.log('Good morning');
}
else if (horaDia >= 12 && horaDia <= 16){
    console.log('Good afternoon');
}
else if (horaDia >= 17 && horaDia <= 19){
    console.log('Good evening');
}
else if (horaDia >= 20 && horaDia <= 23){
    console.log('Good night');
}
// al del profe le agrege las horas de las 0 a las 5 de la mañana
else if (horaDia >= 0 && horaDia <= 5){
    console.log('Good night'); 
}
else{
    console.log('Valor equivocado, rango de 0 a 23 horas');
}


