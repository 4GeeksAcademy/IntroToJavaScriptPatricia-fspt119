// id del mensaje -> #mensaje
// id del boton -> #botonCambiar

const mensajes = [
    "¡Hola desde el DOM!",
    "Texto actualizado 👀",
    "¿Quién tocó el botón?",
    "¡Boom! Cambió.",
    "¿Otra vez tú? 😄"
]

// para esperar a que todo cargue
window.onload = () => {
    const boton = document.getElementById("botonCambiar")
    const parrafo = document.getElementById("mensaje")

    boton.addEventListener("click", () => {
        const randomI = Math.floor(Math.random() * mensajes.length)
        parrafo.innerHTML = mensajes[randomI]
    })
}

