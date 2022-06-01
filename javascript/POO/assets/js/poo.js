class Persona {

    constructor(nombre, apellido, edad, saludar){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.saludar = saludar
    }
}

const persona1 = new Persona("Jonathan","Vazquez", 23, () => console.log("Hola"))
persona1.saludar()