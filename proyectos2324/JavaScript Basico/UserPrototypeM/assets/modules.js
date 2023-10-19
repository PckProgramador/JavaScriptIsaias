
//uso de herencia por prototipos con objetos LITERALES
export const usuarioLiteral = {
    _nombre : "",
    _edad : 0,
    _dni : "",

    //Esto es lo mismo
    // init : function ( nombre,edad,dni){
    //     this._nombre=nombre;
    //     this._edad=edad;
    //     this._dni=dni;
    // }


    //Getters y setters
    get nombre(){
        return this._nombre;
    },
    get edad(){
        return this._edad;
    },
    get dni(){
        return this._dni;
    },
    set nombre(nuevoNombre){
        this._nombre=nuevoNombre;
    },
    set edad(nuevaEdad){
        this._edad=nuevaEdad;
    },
    set dni(nuevoDni){
        this.validarDni(nuevoDni)?this._dni=nuevoDni:alert("dni invalido");
    },
    validarDni:function(dni){
        const letrasValidas="TRWAGMYFPDXBNJZSQVHLCKE";
        const numeros=dni.substring(0,8);
        const letra=dni.charAt(8);
        
        if(letrasValidas.charAt(numeros%23)===letra.toUpperCase()){
            return true;
        }
        return false;
    },
    mostrarInformacion:function(){
    return this._dni+" "+this._edad+" "+this._nombre;
    },
};
//uso de herencia por prototipos con FUNCIONES CONSTRUCTORES





//uso de herencia por prototipos con CLASES

