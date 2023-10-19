const saludo2 = {
    alucinante : "Soy alucinante",
    saludar : function () {
        console.log(this.alucinante)
    }
    
}

const saludo3 = {
    alucinante : "Soy alucinante en saludo3",
    saludar :  ()=> {
        console.log(this.alucinante)
    }
    
}
//el this con la function normal funciona y con la arrow function no funciona


