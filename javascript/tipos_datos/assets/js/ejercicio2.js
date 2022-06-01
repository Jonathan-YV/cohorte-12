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
    nombreCompleto: {
        nombre: "Mitzi",
        app: "Hernandez"
    },
    edad: 23,
    pasatiempos: ["jugar", "dibujar", "ver series"],
}

const Katia = {
    nombreCompleto: {
      nombre: "Katia",
      apellido: "Alvarez",
    },
    edad: 28,
    pasatiempos: ["Cine", "Musica", "Baile"],
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
    nombreCompleto:{ 
    nombre: "aketzali",apellido: "gonzalez" 
    },
    edad: 23,
    pasatiempos: ["pintar","leer","escribir"]
}




const cohorte12 = [miriam,Lizbeth,Adolfo,Pedro,Abi,Katia,Mitzi,Juan,victor,Jonathan]


for(let i=0; i<cohorte12.length; i++){
    if(cohorte12[i].pasatiempos.toLowerCase().includes("dibujar")){
        console.log(cohorte12[i].nombreCompleto.nombre)

    }
}


