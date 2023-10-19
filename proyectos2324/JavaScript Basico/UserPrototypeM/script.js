/**
 * Crear una aplicacion web que atraves de un formulario me permita recoger los datos nombre edad y dni 
 * cuando pulsemos el boton de insertar usuario automaticamente y validemos que la letra del dni es correcta,
 *  
 * 
 * crearra utilizando la herencia por prototipos un usuario de tipo usuarioLiteral porque vamos a usar objetos LITERALES,funciones constructoras y clases 1 para cada uno, 
 * 
 * 
 * y guardará en un arraydichos objetos almacenandolos en el localStorage con clave datosUsuarios, solo lo hará si el dni no está repetido.
 * 
 * 
 */

// imports
import { usuarioLiteral as Usuario } from "./assets/modules.js";
///variables globales
let arrayPersonas= new Array();

function handlerInsertarUsuario(event){ 
    event.preventDefault();
    arrayPersonas=JSON.parse(localStorage.getItem("datosUsuarios"))?JSON.parse(localStorage.getItem("datosUsuarios")):[];
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
        if(dniDuplicado(dniFrml)){
            mensajeExito.style.display="block";
            mensajeError.style.display="none"; 
            arrayPersonas.push(newUser);
            localStorage.setItem("datosUsuarios",JSON.stringify(arrayPersonas));
        }else{
            mensajeExito.style.display="none";
            mensajeError.style.display="block";
        }   
    }else{
        mensajeExito.style.display="none";
        mensajeError.style.display="block";  
    }   
}




function dniDuplicado(dni){
    let validador=true;
    if(JSON.parse(localStorage.getItem("datosUsuarios"))){
        for(let objeto of JSON.parse(localStorage.getItem("datosUsuarios"))){
            if(objeto._dni==dni){
                validador=false
            }
        }
    }
    return validador;
}

function handlerCopiaSeguridad (event){
    event.preventDefault();
    let arrayCopiaSeguridad=new Array();
    arrayCopiaSeguridad=JSON.parse(localStorage.getItem("datosUsuarios"))?JSON.parse(localStorage.getItem("datosUsuarios")):[];
    let arrayPropiedades=sacarPropiedades(arrayCopiaSeguridad);
    document.getElementById('usuariosTextArea').innerHTML = arrayPropiedades;

}
function sacarPropiedades(arrayObjetos){
    let arrayPropiedades=[];
    
    for(let objeto of arrayObjetos){
        arrayPropiedades.push(objeto._nombre+" edad:"+objeto._edad+" dni:"+objeto._dni );
    }
    return arrayPropiedades;
}

function init(){
    document.getElementById("insertarUsuario").addEventListener("click",handlerInsertarUsuario);
    document.getElementById("insertarCopia").addEventListener("click",handlerCopiaSeguridad);
}

//inicio de la aplicacion
document.addEventListener("DOMContentLoaded",init);