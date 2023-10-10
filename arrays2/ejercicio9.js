// Crea una función llamada buscarElemento que tome un
// array arr y un elemento elemento . La
// función debe devolver el índice de la primera 
// aparición de elemento en el array, o -1 si no se
// encuentra.

let arr = [1,1,78,6,1,85,61,9684,32,18,7,13,4];
let elemento=9684;
const buscarElemento =(x,y)=> x.includes(y)?x.indexOf(y):null;

console.log(buscarElemento(arr,elemento));