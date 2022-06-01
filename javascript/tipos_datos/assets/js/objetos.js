const nombre = "Jonathan";
const nombre2 = new String("Yair");
console.log(nombre2);

/* const persona = new Object();
persona.nombre = "Jonathan"
persona.apellido = "Vazquez"
persona.edad = "23"

console.log(persona); */

const nuevaPersona = {
    /* atributos o propiedades */
    nombreCompleto: {
        nombre: "Yair",
        apellido: "Uriostegui"
    },
    edad: 23,
    pasatiempos: ["nadar","dibujar","anime"],
    tieneTrabajo: true,
    /* metodo */
    saludar: function (){
        console.log("Hola")
    },
    sumar: function(n1,n2){
        console.log(`El resultado de la suma es ${n1 + n2}`)
    }
}

"Hola".length /* atributo o propiedad */
"Hola".toLowerCase() /* metodo */

console.log(nuevaPersona.edad)
console.log(nuevaPersona.nombreCompleto.nombre)
console.log(nuevaPersona.pasatiempos[1])

nuevaPersona.saludar()
nuevaPersona.sumar(5,10)

/* Para cambiar el valor */
nuevaPersona.edad = 10
console.log(nuevaPersona)

/* Agregar nuevo atributo */
nuevaPersona.colorFavorito = "Morado"
console.log(nuevaPersona.colorFavorito)


console.log(nuevaPersona.hasOwnProperty("edades"))

console.log(Object.keys(nuevaPersona))
console.log(Object.values(nuevaPersona))


const Jonathan = {
    nombreCompleto: {
        nombre: "Yair",
        apellido: "Uriostegui"
    },
    edad: 23,
    pasatiempos: ["nadar","dibujar","anime"]
}

const victor = {
    nombreCompleto: {
      nombre: "Víctor Manuel",
      apellido: "Soto Alexander",
    },
    edad: 26,
    pasatiempos: ["anime", "leer", "tomar"],
}

const Juan = {
    nombreCompleto: {
    nombre: "Juan",
    apellido: "Vazquez"
    },
    edad: 30,
    pasatiempos: ["coches", "animales","música"],
}

const Mitzi = {
    nomCompleto: {
        nom: "Mitzi",
        app: "Hernandez"
    },
    edad: 23,
    pasatiempo: ["jugar", "dibujar", "ver series"],
}

const Katia = {
    nombreCompleto: {
      nombre: "Katia",
      apellido: "Alvarez",
    },
    edad: 28,
    pasatiemp: ["Cine", "Musica", "Baile"],
  };
  
  const Abi = {
    nombreCompleto:{
        nombre: "Abigail",
        apellido: "Moreno"
    }, 
    edad:23, 
    pasatiempos: ["bailar", "plantas", "fotografía"], 
}


const Pedro = {
    nombreCompleto: {
        nombre: "Antonio",
        apellido: "Castañón"
    },
    edad: 18,
    pasatiempos: ["jugar","salir","series"],
}

const Adolfo = {
    /* atributos o datos como info */
    nombreCompleto:{
        nombre: "Adolfo",
        apellido:"Gutierrez"
    },

     edad: 28,
     pasatiempos: ["ajedrez", "box", "leer"],
}

const Lizbeth = {
    nombreCompleto: {
        nombre: "Liz",
        apellido: "Rubio"
    },
    edad: 23,
    pasatiempos: ["comer","hacer ejercicio","ver pelis"]
}

const miriam ={
    /* atributos o propiedades: datos*/
    nombrecompleto:{ 
    nombre: "aketzali",apellido: "gonzalez" 
    },
    edad: "23",
    pasatiempos: ["pintar","leer","escribir"]
}