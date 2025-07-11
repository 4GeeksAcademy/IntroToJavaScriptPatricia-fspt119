let contador = 0;
const colores = ["#60935D", "#FF579F", "#FFAA00", "#00BFFF", "#8A2BE2"];

function mostrarMensaje() {
  contador++;

  let mensaje = "";

  if (contador === 1) {
    mensaje = "Los Nargles se esconden cuando los buscas 👀";
  } else if (contador === 2) {
    mensaje = "¿Sabías que el Sombrero Seleccionador casi la puso en Gryffindor?";
  } else if (contador < 5) {
    mensaje = `Curiosidad mágica número ${contador} desbloqueada ✨`;
  } else if (contador === 5) {
    mensaje = "¡Luna puede ver a los Thestrals porque vio morir a su madre! 🐎";
  } else if (contador < 10) {
    mensaje = `¡Wow, ya hiciste ${contador} clics mágicos! 🪄`;
  } else if (contador === 10) {
  mensaje = "Ya no quedan más secretos por revelar... o sí 😏";
  alert("¡Eh! 🧙‍♀️ Ya hiciste suficiente magia... la página se recargará.");
  location.reload();
}


  document.getElementById("mensaje").textContent = "Hello";

  const btn = document.querySelector("button");
  const colorRandom = colores[Math.floor(Math.random() * colores.length)];
  btn.style.backgroundColor = colorRandom;
}

console.log("Hola que ase");
