
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




//NEW
//uso de herencia por prototipos con FUNCIONES CONSTRUCTORES
export function UsuarioFuncional(nombre,edad=0){
    this._nombre=nombre;
    this._edad=edad;
    this._dni="";

    //Getter y setter para el nombre

    Object.defineProperty(this,"nombre",{
        get:function(){
            return this._nombre;
        },
        set:function(nuevoNombre){
            this._nombre=nuevoNombre;
        },
    });

    Object.defineProperty(this,"edad",{
        get:function(){
            return this._edad;
        },
        set:function(nuevaEdad){
            this._edad=nuevaEdad;
        },
    });
    
    Object.defineProperty(this,"dni",{
        get:function(){
            return this._dni;
        },
        set:function(nuevoDni){
            const letrasValidas="TRWAGMYFPDXBNJZSQVHLCKE";
            const numeros=nuevoDni.substring(0,8);
            const letra=nuevoDni.charAt(8);
        
            if(letrasValidas.charAt(numeros%23)===letra.toUpperCase()){
                this._dni=nuevoDni;
            }
            return false;
        },
    });
    
};

UsuarioFuncional.prototype.mostrarInfo= function () {
    console.log(`Bienvenido ${this.nombre} , tu edad es ${this.edad})`);

};

UsuarioFuncional.saludo = function(){
    return "Hola mundo";
};





//NEW
//uso de herencia por prototipos con CLASES
export class UsuarioClases {
    constructor(nombre = " ", edad =0){
        this._nombre=nombre;
        this._edad=edad;
        this._dni="";
    }
    get nombre(){
        return this._nombre;
    }
    get edad(){
        return this._edad;
    }
    get dni(){
        return this._dni;
    }
    set nombre(nuevoNombre){
        this._nombre=nuevoNombre;
    }
    set edad(nuevaEdad){
        this._edad=nuevaEdad;
    }
    set dni(nuevoDni){
        this.validarDni(nuevoDni)?this._dni=nuevoDni:alert("dni invalido");
    }

    validarDni(dni){
        const letrasValidas="TRWAGMYFPDXBNJZSQVHLCKE";
        const numeros=dni.substring(0,8);
        const letra=dni.charAt(8);
        
        if(letrasValidas.charAt(numeros%23)===letra.toUpperCase()){
            return true;
        }
        return false;
    }

};
