const idInfo = window.location.href.split("=").pop()
console.log(idInfo);

const imagenPortada = document.getElementById("imagenPortada")
const informacionAnime = document.getElementById("informacionAnime")

const urlID = `https://api.jikan.moe/v4/anime/${idInfo}`

fetch(urlID).then(resp => resp.json()).then(datos => {
    /* console.log(datos.data) */

    const datosNecesarios = {
        id: datos.data.mal_id,
        imagen: datos.data.images.jpg.large_image_url,
        sinopsis: datos.data.synopsis,
        nombre: datos.data.title
    }

    /* Insetar la imagen */
    const templateImg = `<img src="${datosNecesarios.imagen}" alt="" class="img-fluid">`

    imagenPortada.innerHTML = templateImg

    /* Insertar la informacion */

    const templateInfo = `  <h1>${datosNecesarios.nombre}</h1>
                            <p>${datosNecesarios.sinopsis}</p>
                            <div class="favorito">
                                <button id="agregarFavoritos" type="button" class="btn btn-dark">Agregar a favorito</button>
                            </div>  `

    informacionAnime.innerHTML = templateInfo

    /* console.log(datosNecesarios); */

    const agregarFavoritos = document.getElementById("agregarFavoritos")
    console.log(agregarFavoritos)

    agregarFavoritos.addEventListener("click",() => {
        /* console.log("Agregado"); */
        const datos = {
            id: datosNecesarios.id,
            nombre: datosNecesarios.nombre,
            imagen: datosNecesarios.imagen
        }

        if(localStorage.getItem("favoritos")){
            const favoritos = JSON.parse(localStorage.getItem("favoritos"))
            favoritos.push(datos)
            localStorage.setItem("favoritos",JSON.stringify(favoritos))
        } else{
            const favoritos = []
            favoritos.push(datos)
            localStorage.setItem("favoritos",JSON.stringify(favoritos))
           
        }
    })
})

