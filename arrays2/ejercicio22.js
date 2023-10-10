// Ejercicio 22: Suma de Matrices
// Escribe una función llamada sumarMatrices que sume dos matrices (arrays bidimensionales)
// y devuelva el resultado. Las matrices de entrada estarán representadas como arrays de arrays
// con la misma cantidad de filas y columnas.

matriz=[[1,2],[3,4]];
matriz3=[[1,2],[3,4]];

function sumarMatrices(matriz1,matriz2){
    let arr1=matriz1.shift();
    let arr2=matriz2.shift();
    let arr3=matriz1.pop();
    let arr4=matriz2.pop();
    let devolver=[];
    let devolver2=[];

    for(let i=0;i<arr1.length;i++){
        devolver.push(arr1[i]+arr2[i]);

    }
    for(let i=0;i<arr3.length;i++){
        devolver2.push(arr3[i]+arr4[i]);

    }

    let matrizDevolver=[devolver,devolver2];


    return matrizDevolver;
}

console.log(sumarMatrices(matriz,matriz3));
//forma 2

const sumarMatrices1 = (matrizA, matrizB) =>
  matrizA.map((fila, i) => fila.map((valor, j) => valor + matrizB[i][j]));


const matrizA = [ [1, 2], [3, 4],];

const matrizB = [ [1, 2], [3, 4],];

const resultado = sumarMatrices1(matrizA, matrizB);
console.log(resultado);