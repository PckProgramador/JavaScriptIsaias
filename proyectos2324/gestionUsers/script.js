//-------Importaciones------------//
//import sumar from "./assets/modules.js"; Si esta por default la puedes dejar fuera.
import sumar,{  saludar as saludo, pi } from "./assets/modules.js";
//importacion de la variable users que es un JSON
import { users } from "./assets/modules.js";
//cambiar el alias de la funcion saludar a saludo
console.log(saludo("Patrick"));
console.log(sumar(1,2));
console.log(pi);

/**Crea una funcion que le pase como parametro un array de objetos y me devuelva
 * un Map cuya clave sea "lastname_firstname" y cuyo valor sea "email"
 */

const nombrEmail = JSONobject => JSONobject.filter(persona=>persona.email.includes(".es")).reduce((acumulador,persona1) => acumulador.set(persona1.firstname.concat("_").concat(persona1.lastname), persona1.email),new Map());
//const usName2 = arr => arr.filter(obj => !obj.email.includes(".com")).reduce((cont,obj) => cont.set(`${obj.firstname}${obj.lastname}`,obj.email) , new Map())
//console.log(nombrEmail(users));


//reduce sin filter

const sacarNombreEmail3=userJSON=>userJSON.reduce((acumulador,persona)=>persona.email.endsWith(".es")?acumulador.set(persona.firstname,persona.email):acumulador,new Map());
console.log(sacarNombreEmail3(users));


//ultra sintetizado
const sacarNombreEmail4=usersJSON=>usersJSON.reduce((acumulador,{email,lastname,firstname})=>email.endsWith("es")?acumulador.set(firstname,email):acumulador,new Map());
console.log(sacarNombreEmail4(users));

