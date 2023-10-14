/*
Author PckProgramador
Ejercicio1 Dado el siguiente objeto, utiliza la desestructuración para extraer las propiedades nombre y edad en
variables separadas. Después crear un objeto con dichas propiedades y los valores obtenidos.

**/
const persona = {
    nombre: "Juan",
    edad: 30,
   };
   
const {nombre ,edad} = persona;

/*Ejercicio2
Dado el siguiente objeto, utiliza la desestructuración para extraer la propiedad ciudad en una
variable llamada lugar.

**/

const direccion = {
    calle: "Calle Principal",
    ciudad: "Ciudad Ejemplo",
    codigoPostal: "12345",
   };
   
const { ciudad:lugar } = direccion;

/**
 * Ejercicio 3
Dado el siguiente objeto, utiliza la desestructuración para extraer las propiedades primerNumero y
segundoNumero en variables separadas. Además a la vez, la variable segundoNumero se debe
llamar secondNumber
 */

const numeros = {
    data: {
    primerNumero: 10,
    segundoNumero: 20,
    },
   };

   const { data: { primerNumero , segundoNumeros:secondNumber } }=numeros;

/**
 * Ejercicio 4
Dado el siguiente objeto, utiliza la desestructuración para extraer la propiedad nombre y apellidos
en una variable llamada nombre y apellidoPersona respectivamente. Si la propiedad apellidos no
existe en el objeto, asigna un valor predeterminado de 'Desconocido'.

 */

const persona2 = {
    id: 23,
    info: {
    nombre: "María",
    apellidos: "Jiménez Téllez",
    edad: 25,
    },
   };

const { info: { nombre:nombre2, apellidos:apellidosPersona = 'Desconocido' } } = persona2;

/**
 * Ejercicio 5
Dado el siguiente objeto, utiliza la desestructuración para extraer las propiedades nombre y edad.
Luego, crea un nuevo objeto llamado datosPersona y asigna las propiedades extraídas a este nuevo
objeto.

 */

const persona3 = {
    nombre: "Luis",
    edad: 40,
    ciudad: "Ciudad Ejemplo",
   };
   
   const { nombre:nombre3,edad:edad3,ciudad  } =persona3;

   const datosPersona={ nombre3:nombre,edad,ciudad };

/**
 * Ejercicio 6
Dado el siguiente objeto que representa un punto en coordenadas, utiliza la desestructuración para
extraer las propiedades x y y en variables separadas y calcula la distancia euclidiana desde el origen
(0,0).
 */
const punto = {
    x: 3,
    y: 4,
   };

const { x,y }=punto;
function distanciaEuclidiana(x2,y2,x,y){
    d=Math.SQRT1_2((Math.pow(x2-x))+(Math.pow(y2-y)));
    return d;
}
console.log(distanciaEuclidiana(x,y,0,0));


/**
 * Ejercicio 7
Dado el siguiente objeto que representa una persona con un nombre y una lista de amigos, utiliza la
desestructuración para extraer el nombre de la persona y el primer amigo de la lista.
 */

const persona4 = {
    nombre: "Carlos",
    amigos: ["Ana", "David", "Elena"],
   };

const { nombre:nombre4, amigos:[primerAmigo]="No tengo amigos" }=persona4;
