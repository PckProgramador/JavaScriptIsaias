// Ejercicio 21: Rotación de Arrays
// Escribe una función llamada rotarArray que rote los elementos de un array hacia la derecha
// o izquierda. La función debe tomar un array arr y un número entero pasos que indique
// cuántos pasos se deben realizar hacia la derecha (si es positivo) o hacia la izquierda (si es
// negativo).

let a=[1,2,3,4,5,6];
let b=-2;

function rotarArray(array,numero){
    let devolver=array;
    let numeros=[];
    let c;

    //rotar a la derecha
    if(numero>=0){
        for(let i=0;i<array.length&&i<numero;i++){
            c = devolver.shift();
            devolver.push(c);

        }
        return devolver;
    }else{
        //rotar a la izquierda
        for(let i=0;i>(-1*array.length)&&i>numero;i--){
            c=devolver.pop();
            devolver.unshift(c);
        }

        return devolver;

    }
}
console.log(rotarArray(a,b));