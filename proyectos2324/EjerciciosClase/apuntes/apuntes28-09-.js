//como construir un Set
const miSet= new Set(["perro","gato","Loro"]);
console.log(typeof miSet);
//añadir
miSet.add("canario");
//borrar si no existe devuelve false
miSet.delete("canario");
miSet.add("canario");
//tamaño del set
console.log(miSet.size);
//verificar la existencia de un elemento dentro de mi Set: deuelve un boolean
console.log(miSet.has("perro"));
//para recorrer
for(let animal of miSet){
	console.log(animal);
}
//Convertir set en array
let arrayAnimales=Array.from(miSet);
//segunda version Spread Operator de set a array
let arrayAnimales2=[ ...miSet ];
//los 3 puntos delante de una estructura de datos hace que cada uno de elementos los separe con una ","
// por lo que al envolverlo con dos corchetes "[]" lo conviertes en un array

//Operaciones con set
const c=new Set([1,2,3]);
const d=new Set([3,2,1]);
//Unir
const cd = new Set([...c],[...d]);
console.log(cd);
//Diferencia c-d
//usando metodo filter
const difcd=new Set([...c].filter(numero=> !d.has(numero)));
//Intersección
const intercd=new Set([...c].filter(numero=>d.has(numero)));

//dados dos conjuntos de datos set comprobar si son iguales elemento por elemento
const a=new Set([1,2,3]);
const b=new Set([2,1]);

const compararSet=(x,y)=>x.size !== y.size ? false: x.has(...y);
console.log(compararSet(a,b));

//comrpobar si un conjunto está en un subconjunto de un conjunto dado
const compararSubSet=(x,y)=> x.has(...y);
console.log(compararSet(a,b));

//aparte del spread operator los "..."

function mostrar(...numeros){
	console.log(numeros);
}
mostrar(2,3,4); // muestra 2,3,4

function sumar(...numeros){
	return [...numeros].reduce((acumulador,num) => acumulador+=num,0);
}

console.log(sumar(2,3,4)); // muestra 9. 2+3+4=9