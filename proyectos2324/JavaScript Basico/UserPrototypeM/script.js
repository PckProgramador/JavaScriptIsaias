/**
 * Crear una aplicacion web que atraves de un formulario me permita recoger los datos nombre edad y dni 
 * cuando pulsemos el boton de insertar usuario automaticamente crearra utilizando la herencia 
 * por prototipos un usuario de tipo usuarioLiteral porque vamos a usar objetos LITERALEs y guardará en un array
 * dichos objetos almacenandolos en el localStorage con clave datosUsuarios
 */



// imports
import { usuarioLiteral as Usuario, usuarioLiteral } from "./assets/modules.js";



///variables globales




//funciones
// let copiaSeguridad;
// function handlerCopiarSeguridad(){
//     copiaSeguridad=JSON.parse(localStorage.getItem("datosUsuarios"));
//     return copiaSeguridad;
// }
// document.getElementById("insertarCopia").addEventListener("click",handlerCopiarSeguridad);


let arrayPersonas=[];
function handlerInsertarUsuario(event){  
    arrayPersonas=JSON.parse(localStorage.getItem("datosUsuarios"));
    event.preventDefault();

    //buena praxis traerse el formulario por si lo necesitases
    //const formularioUsuarios=document.getElementById("formulariousuarios").value;
    const usernameFrml=document.getElementById("username").value;
    const edadFrml=document.getElementById("edad").value;
    const dniFrml=document.getElementById("dni").value;

    //para instanciar o crear un objeto cuyo prototipo sea usuarioLiteral?
    //const objetoHijo=Object.create(usuarioLiteral);

    let newUser=Object.create(Usuario);
    newUser.nombre=usernameFrml;
    newUser.edad=edadFrml;
    if(newUser.dni=dniFrml){
        console.log("traza");
        console.log(newUser.mostrarInformacion());
    }else{
        alert("no ha añadido el dni");
    }
    
    arrayPersonas.push(newUser);
    localStorage.setItem("datosUsuarios",JSON.stringify(arrayPersonas));
}
function init(){
    document.getElementById("insertarUsuario").addEventListener("click",handlerInsertarUsuario);
}

//inicio de la aplicacion
document.addEventListener("DOMContentLoaded",init);