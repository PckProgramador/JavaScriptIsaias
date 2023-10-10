// Ejercicio 23: Promedio de Filas
// Escribe una función llamada promedioFilas que calcule el promedio de cada fila en una
// matriz (array bidimensional) y devuelva un array con los resultado-

const matrizA = [ [1, 3], [3, 5],];



const promedioFilas=(matriz)=>matriz.map(array=>array.reduce((acumulador,numero,indice)=>acumulador+=numero/2.0 ,0));

console.log(promedioFilas(matrizA));