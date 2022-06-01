/* let tiempo = 5000
let datos

setTimeout(()=>{
    datos = "Jonathan"
    console.log(datos);
},tiempo)

console.log(datos);

console.log("Hola"); */


const datos = [
    {
        nombre: "Jonathan",
        edad: 23,
    },
    {
        nombre: "Luis",
        edad: 32,
    },
    {
        nombre: "Saul",
        edad: 18,
    },
]

function obtenerDatos(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(datos)
        },3000)
    })
}

console.log(obtenerDatos());

obtenerDatos().then( (datos) => {
    console.log(datos);
})

async function obtenerDatosAsync(){
    const datosObtenidos = await  obtenerDatos()
    console.log(datosObtenidos);
}

obtenerDatosAsync()