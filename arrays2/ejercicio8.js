/**
 
Define una función llamada encontrarMaxMin que
tome un array de números arr y devuelva un
objeto con las propiedades max y min , 
que contengan el valor máximo y mínimo del array,
respectivamente
 */

 let array=[65,48,47,12,3,2,1,4,0,1,48,3,98];

 const encontrarMaxMin =(x=[])=> Math.max(...x);

 console.log(encontrarMaxMin(array));