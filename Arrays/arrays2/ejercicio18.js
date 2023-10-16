// Ejercicio 18: Combinación de Arrays
// Escribe una función llamada combinarArrays que pase como parámetro "creciente" o
// "decreciente", junto con un número indeterminado de arrays con valores numéricos.
// Seguidamente me devolverá un array con todos los elementos que conformen los arrays
// ordenado creciente u ordenado decreciente según indique en el parámetro. Si no indico nada
// se hará de forma creciente.

let array = [3,2,5,6,4,1];
let array2 = [3,2,5,6,4,1];
let palabra="creciente";
const combinarArrays = ( valor,...x )=> {
    let y=[];
    y=y.concat(...x);
    return valor==="creciente"?y.sort():y.reverse();

};

console.log(combinarArrays(palabra,array,array2));