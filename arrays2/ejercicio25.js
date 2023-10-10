// Ejercicio 25: Números que faltan
// Escribe una función llamada numerosFaltantes que encuentre los números faltantes en un
// rango dado dentro de un array. La función debe tomar un array de números arr y dos
// números enteros inicio y fin que representan el rango. La función debe devolver un array
// con los números que faltan en ese rango.

let arr=[1,2,3,5,10];//faltan 4,6,7,8,9
let minimo=1;
let maximo=3;


function numerosFaltantes(array1,min,max){
    array1.sort();
    let array2=[];
    let devolver=[];
    //el primer for añade todos los numeros desde el minimo hasta el maximo a un array nuevo
    for(let i =min;i<=max;i++){
        array2.push(i);
    }
    // si el array pasado por parametro contiene los elementos del array dentro del rango minimo y maximo los incluye en el array que devolvemos
    for(let j =0 ; j<array2.length;j++){
        if(!array1.includes(array2[j])){
            devolver.push(array2[j])
        }
    }
    //si no  hay ningun numero que cumpla las condiciones
    if(devolver.length<1){

        return "no hay ningun numero que cumpla las condiciones";
    }
    return devolver;
}

console.log(numerosFaltantes(arr,minimo,maximo));