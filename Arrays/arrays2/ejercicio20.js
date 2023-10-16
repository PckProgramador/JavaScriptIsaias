// Ejercicio 20: Diferencia de Arrays
// Escribe una función llamada diferenciaArrays que encuentre la diferencia entre dos arrays,
// es decir, los elementos que están en uno pero no en el otro. La función debe devolver un nuevo
// array con los elementos diferentes

let array1=[1,2,5,9,8,7];
let array2=[4,5,8,7,4,3,1];

const diferenciaArrays = (arr, arr2) => arr.filter((elemento, indice) => !arr2.includes(elemento)).concat(arr2.filter((elemento, indice) => !arr.includes(elemento)));

console.log(diferenciaArrays(array1,array2));