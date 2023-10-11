import { users } from "./assets/modules.js";

//Creamos una funcion que guarde en el localstorage la estructura  (TODOS) usuarios
/**
 * @param {Array}structureData
 * @return {Boolean}
 */

//Declaracion de variables
let myStructureUsers=[];
function insertUsers (key,structureData) {
  return localStorage.setItem(key,JSON.stringify(structureData));
  //el JSON.stringify es para que la estructura de datos se guarde en un 
  //formato que nos permite recuperar los datos mas tarde
}

insertUsers("users",users);
//Funcion que cargue del localStorage la estructura cuyo nombre le pase como parametro
/**
 * 
 * @param {String} estructura 
 * @returns 
 */
function loadStructure(estructura){
  return localStorage.getItem(estructura);
}

//Usamos la variable global declarada arriba para guardar el archivo.
myStructureUsers=JSON.parse(loadStructure("users")); 

// // getItem devuelve siempre un string, hay que hacerle un parse.
// const structure2=loadStructure("users");
// console.log(typeof(myStructureUsers));
// console.log(typeof(structure2));

//Guardar en una estructura de datos el username y el password (codificado) de todos los usuarios de mi estructura
/**
 * 
 * @param {String} key 
 * @param {Array} structureData 
 */
function saveStructureUsernamePassword(key,structureData){
  let tmpArray=[];
  structureData.map((user) =>tmpArray.push( { [ user.login.username ] : btoa(user.login.password) } ) );
  localStorage.setItem(key,JSON.stringify(tmpArray));
}
saveStructureUsernamePassword("hola",myStructureUsers);

// Guardar de los nuevos usuarios que vaya a introducir usuario y contraseña(codificada) SIN REPETIR el username y despues se vuelca al localStorage
/**
 * 
 * @param {String} key 
 * @param {String} username 
 * @param {String} password 
 */
function saveUserPasswordLocalStorage(key,username,password){
  const tmpArray=JSON.parse(localStorage.getItem(key));
  const encontrado=false;
  tmpArray.map(objeto => objeto.hasOwnProperty(username)?encontrado=true:false);

  !encontrado?tmpArray.push( {[username] : btoa(password)} ):alert("el usuario ya existe");

  localStorage.setItem(key,JSON.stringify(tmpArray));

}

function save(){
  //capturar lo que he escrito en el formulario y guardarlo en variables
  //llamar a mi funcion que guardaba en la key el username y el password
  //si lo guarda alert indicando que ha sido guardado y borro el formulario.
}
//Captura de eventos en un formulario


document.getElementById("guardar").addEventListener("click",save);
//hay dos funciones de llamar a la funcion no puedes poner save() porque se ejecutaria antes de clicar si 
//fuese una arrow function si podria "click"=> save()