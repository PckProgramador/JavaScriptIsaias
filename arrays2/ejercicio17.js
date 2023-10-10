// Ejercicio 17: Multiplicar Matriz por Escalar
// Escribe una función llamada multiplicarMatrizPorEscalar que tome una matriz matriz y
// un número escalar . La función debe multiplicar cada elemento de la matriz por el escalar y
// devolver una nueva matriz con los resultados

let matriz=[[1,2,3,4,5],[1,2,3,4,5]];

const multiplicarMatrizPorEscalar = (matriz,escalar) => matriz.map(arr=> arr.map(numero => numero*escalar));

console.log(multiplicarMatrizPorEscalar(matriz,2));