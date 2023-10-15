/**
 * Ejercicio 1
Escribe una función que tome un objeto. Debería devolver el valor de la propiedad cuya clave sea
pais. Si no existiese dicha clave devolvería : "No se encuentra"
// Objeto: { continente: "Europa", pais: "España"}
 */

const devolverPais = objeto=>  objeto.pais?objeto.pais:"No se encuentra";

const miObjeto1 = { continente: "Europa", pais: "España" };

console.log(devolverPais(miObjeto1));



/**
 * Ejercicio 2
Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si
el objeto tiene una propiedad con clave 'b'. Devuelve falso en caso contrario.

 */

const existePropiedad = (objeto,cadena) => cadena in objeto?true:false;
console.log(existePropiedad(miObjeto1,"lugar"));

/**
 * Ejercicio 3
Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si
el objeto tiene una propiedad con la clave 'b', pero solo si tiene un valor verdadero. En otras palabras,
no debe ser nulo, indefinido o falso. Devuelve falso en caso contrario.
 */

const existePropiedad2= (objeto,cadena)=> cadena in objeto? true:null;
console.log(existePropiedad2(miObjeto1,"lugar"));


/**
 * Ejercicio 4
Escribe una función que tome una cadena como argumento. Cree un objeto que tenga una propiedad
con la clave 'key' y un valor igual a la cadena. Devuelve el objeto.
 */

const crearObjeto= cadena => ({ key:cadena}); 
const cadena1="holaa";
const objeto2=crearObjeto(cadena1);
console.log(objeto2);

/**
 * Ejercicio 5
Escribe una función que tome dos cadenas (a y b) como argumentos. Cree un objeto que tenga una
propiedad con la clave 'a' y un valor de 'b'. Devuelve el objeto.
 */

const crearObjeto2=(_cadena,_cadena2)=> ( {[_cadena] : _cadena2}  );
const cadena2="adios";
const objeto3=crearObjeto2(cadena1,cadena2);
console.log(objeto3);


/**
 * Ejercicio 6
Escribe una función que tome dos matrices (a y b) como argumentos. Cree un objeto que tenga
propiedades con claves los elementos del array 'a' y con los valores correspondientes 'b'. Devuelve el
objeto.
 */

//Mi interpretación
function crearObjeto3 (array1,array2){
    const objeto={};
    for (let i = 0; i < array1.length; i++) {
        objeto[array1[i]] = array2[i];
      }
    return objeto;
}

const matriz1=[[1,2],[3,4]];
const matriz2=[[1,2],[3,4]];

console.log(crearObjeto3(matriz1,matriz2));

//Interpretación general
function crearObjeto4(array1,array2){
  const objeto={};
    for (let i = 0; i < array1.length; i++) {
          for(let j = 0; j < array2.length; j++){
            objeto[array1[i][j]] = array2[i][j];
          }
      }
    return objeto;
}

console.log(crearObjeto4(matriz1,matriz2));

/**
 * Ejercicio 7
Escribe una función que tome un objeto (a) como argumento. Devuelve una matriz con todas las
claves de los objetos.
 */
const miObjeto3 = {
  clave1: 'valor1',
  clave2: 'valor2',
  clave3: 'valor3'
};

const objetoMatriz = a => Object.keys(a);
console.log(objetoMatriz(miObjeto3));


/**
 * Ejercicio 8
Escribe una función que tome un objeto X como argumento. Dicho objeto tienen como
valor dentro de la clave 'a' el valor 'b' que puede o no tener otras subclaves. Se pide obtener la
propiedad 'b' del objeto 'X' en caso de que exista. Si no existe devolverá undefined

PREGUNTAR POR EL ENUNCIADO

*/

const miObjeto4 = {
  a:"b",
};

function obtenerPropiedad(objeto){
    if(objeto.a=="b"){
      return true;
    }
    return undefined;
}

console.log(obtenerPropiedad(miObjeto4));

/**
 * Ejercicio 9
Escribe una función que tome un objeto (a) como argumento. Devuelve la suma de todos los valores
(temperaturas) del objeto. Vamos a imaginar que el objecto tiene por claves meses del año y los
valores de esas claves son temperaturas. Es necesario validar que los valores de las claves son
números para realizar la suma
 */
const miObjeto5 = {
  enero:{temperatura:"hola"},
  febrero:{temperatura:20},
  marzo:{temperatura:25},
  abril:{temperatura:30},
};
//variante 1
function sumarTemperaturas(objeto){
  if(Object.values(objeto).every(elemento => typeof elemento.temperatura === "number")){
    return Object.values(objeto).reduce((acumulador,elemento)=>acumulador=acumulador+elemento.temperatura,0);
  }
  return "No has pasado numeros como parametro";
};
//variante 2
function sumarTemperaturas2(objeto){
  return Object.values(objeto).reduce((acumulador,elemento) => typeof elemento.temperatura==="number"?acumulador=acumulador+elemento.temperatura:acumulador,0);
}
console.log(sumarTemperaturas2(miObjeto5));
console.log(typeof(miObjeto5.febrero.temperatura) === "number");

/**
 * Ejercicio 10
Escribe una función que tome un objeto como argumento. Debería devolver un objeto con todas las
propiedades del objeto original. excepto la propiedad con clave 'b'
 */

function copiarObjetoSinB(objeto) {
  const nuevoObjeto = {};

  for (let clave in objeto) {
    if (clave !== 'b') {
      nuevoObjeto[clave] = objeto[clave];
    }
  }

  return nuevoObjeto;
};

/**
 * Ejercicio 11
Escribe una función que tome dos objetos como argumentos. Lamentablemente, la propiedad 'b' del
segundo objeto tiene la clave incorrecta. En su lugar, debería llamarse 'd'. Fusione ambos objetos y
corrija el nombre de propiedad incorrecto. Devuelve el objeto resultante. Debe tener las propiedades
'a', 'b', 'c', 'd' y 'e'.
 */

function fusionarObjetos(objeto1,objeto2){
  objeto2.b=objeto2.w;
  delete objeto2.w;

  return { ...objeto1,...objeto2 };
}

const objeto1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};

const objeto6 = {
  a: 1,
  w: 2,
  c: 3,
  d: 5,
  e: 5,
  
};

console.log(fusionarObjetos(objeto1,objeto6));

/**
 * Ejercicio 12
Escribe una función que tome un objeto (a) y un número (b) como argumentos. Multiplica todos los
valores de 'a' por 'b'. Devuelve el objeto resultante. Comprobar que los valores de las claves de (a) son
números para realizar la multiplicación.

 */

function multiplicarObjeto(objeto,numero){
 //return Object.keys(objeto).map(propiedad=>objeto.propiedad=objeto.propiedad.numero);
 for(let propiedad in objeto ){
  if(typeof propiedad === "number"){
    objeto[propiedad]=objeto[propiedad]*numero;
  } 
 }
 return objeto;
}
  
const objeto45={
  a:2,
  b:4,
}
console.log(multiplicarObjeto(objeto45,2));

/**
 * Ejercicio 13
Intercambiar claves y valores de objetos. Escribe una función que tome un objeto como argumento.
De alguna manera, las propiedades y claves del objeto se mezclaron. Intercambia la clave del objeto
Javascript con sus valores y devuelve el objeto resultante.
 */

function Intercambiar(objeto){
  let objeto2={};
  for ( let clave in objeto ){
      const valor=objeto[clave];
      objeto2[valor]=clave;
      
  }
  return objeto2;
}

console.log(Intercambiar(objeto45));


/**
 * Ejercicio 14
Reemplazar cadenas vacías en el objeto con valores nulos. Escriba una función que tome un objeto
como argumento.Algunos de los valores de propiedad contienen cadenas vacías. Reemplace cadenas
vacías y cadenas que contienen solo espacios en blanco con valores nulos. Devuelva el objeto
resultante.

 */
function quitarCadenasVacias(objeto){
  for(let clave in objeto ){
   if(typeof objeto[clave] === "" && objeto[clave].trim() === ''){
     objeto[clave]=null;
   } 
  }
  return objeto;
 }

 /**
  * Ejercicio 15
Extraer información de objetos. Escriba una función que tome un objeto como argumento que
contenga propiedades con información personal. Extraiga el nombre, el apellido, el tamaño y el peso,
si están disponibles. Si se proporciona el tamaño o el peso, transforme el valor en una cadena.
Adjunte la unidad cm al tamaño. Adjunte la unidad kg al peso Devuelve un nuevo objeto con todas las
propiedades disponibles que nos interesan y sus modificaciones correspondientes.
  */

function extraerInformacion(objeto){
  let arrayComprobar= ["nombre","apellido","size","weight"];
  let objetoDevolver={};

  for (let clave in objeto){
    
    if(arrayComprobar.includes(clave)){
      if(clave === "size"){
        objeto[clave]=objeto[clave].toString().concat("cm");
      }else if ( clave == "weight"){
        objeto[clave]=objeto[clave].toString().concat("kg");
      }
        objetoDevolver[clave]=objeto[clave];
      }
    }
    return objetoDevolver;
}

const objeto46={
  nombre:"Patrick",
  apellido:"moreno",
  size:180,
  weight:94,
};

console.log(extraerInformacion(objeto46));

/**
 * Ejercicio 16
Agregar propiedad a cada objeto en la matriz. Escribe una función que tome un Array de objetos y
una cadena como argumentos. Agrega una propiedad con clave 'continente' y valor igual a la cadena
a cada uno de los objetos. Devuelve el nuevo arreglo de objetos.
 */

function agregarPropiedad (array,cadena){

  for(const objeto of array){
    objeto["continente"]=cadena;
  }
  return array;
  
}
const arrayDeObjetos = [
  { nombre: 'País1', poblacion: 100 },
  { nombre: 'País2', poblacion: 200 },
  { nombre: 'País3', poblacion: 300 }
];

console.log(agregarPropiedad(arrayDeObjetos,"oceania"));

/**
 * Ejercicio 17
Convertir matriz en objeto con contador. Escriba una función que tome una matriz de números como
argumento. Convierta la matriz en un objeto. Debe tener una clave para cada valor único de la matriz.
El valor del objeto correspondiente debe ser el número de veces que aparece la clave dentro de la
matriz.
 */

function matrizObjeto (matriz){
  const objeto = {};
  for (const array of matriz) {
    for (const numero of array) {
      if (objeto[numero]) {
        objeto[numero] += 1;
      } else {
        objeto[numero] = 1;
      }
    }
  }
  return objeto;
}
const miMatriz = [
  [1, 2, 3],
  [2, 3, 4, 4],
  [5, 5, 5]
];

console.log(matrizObjeto(miMatriz));