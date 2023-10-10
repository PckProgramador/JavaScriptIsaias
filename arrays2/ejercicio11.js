/**
 
Define una función llamada mapearNumeros que toma dos argumentos:
un array arr y unafunción funcion . La función debe aplicar la
función proporcionada a cada elemento del array y devolver
un nuevo array con los resultados de la función aplicada
a cada elemento.
*/
let arr=[1,2,3,4,5];

const sumar=k=> k+k;


 const mapearNumeros=(array,funcion)=> array.map(elemento=>funcion(elemento))

 console.log(mapearNumeros(arr,sumar));