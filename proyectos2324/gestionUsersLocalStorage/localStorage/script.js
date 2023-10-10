import { users } from "./assets/modules.js"

// Insertar elemntos en el localStorage

localStorage.setItem("Nombre","Patrick");

//meter un objeto al localstorage
const usuario={name:"Patrick",cp:12234};
localStorage.setItem("user",JSON.stringify(usuario));

alert(localStorage.getItem("Nombre"));

//borrar una clave del localStorage
localStorage.removeItem("Nombre");

//borrar todo del localstorage
localStorage.clear();

localStorage.setItem("Mis users", JSON.stringify(users));

const username= document.getElementById("username").value;//porque se guarda en properties
const password=document.getElementById("password").value;

const saludo=nombre= alert("hola mundo");


document.getElementById("guardar").addEventListener("click",saludo("Patrick"));


/**
 * Crear una pagina web que tenga la siguiente estructura:
 *  1. Header que ocupe todo el ancho de la pagina que este centrado que tenga el nombre del proyecto Usuario LocalStorage
 *  2. Tendremos dos secciones que parten la pagina por la mitad, 
 *  la primera mitad dispondremos de un formulario login que contendra los campos Username, password, boton de guardar
 *  3. La segunda mitad  nos mostrara los usuarios almacenados en un text area junto con el boton cargar.
 *  La funcionalidad será la siguiente:
 *      1.Cargaremos todos los usuarios JSONplaceholder/users a traves de una variable users a través de un import, luego a través de una 
 *      función guardará los usernames y el password de dichos usuarios dentro del LocalStorage.La password será encriptada antes de ser almacenada.
 *      2,A través del formulario introduciré un nombre y una contraseña. Si el nombre no está guardado en el localStorage,
 *      almacenaremos el nombre y contraseña en localStorage, si ya estaba dentro , mostramos una alerta de que ya estaba almacenado.
 *      3.A través del botón cargar sacaremos el nombre de usuario y la contraseña desencriptada de todos los usuarios almacenados en el localStorage.
 *      
 *          Nota: Para encriptar la contraseña utilizaremos btoa("cadena a encriptar") y atbo("cadena a desencriptar");
 */

