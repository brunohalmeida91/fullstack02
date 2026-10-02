const container = document.getElementById("container");

const btnStart = document.getElementById("btnStart");

const btnAzul = document.getElementById("btnAzul");
const btnVerde = document.getElementById("btnVerde");
const btnAmarelo = document.getElementById("btnAmarelo");

const img = document.createElement("img");

function mudarCor() {
  container.innerHTML = "<p> <b> Novo OI ! </b> </p>";
  container.style.backgroundColor = "#373B48";
  container.style.color = "white";
  container.style.fontSize = "24px";
  container.style.padding = "5px";
  container.style.margin = "10px";
  container.style.textAlign = "center";

  btnStart.style.backgroundColor = "red";
  btnStart.style.color = "white";
  btnStart.style.padding = "10px";
  btnStart.style.fontSize = "15px";

  //   btnAzul.style.backgroundColor = "blue";
  //   btnVerde.style.backgroundColor = "#2c3e";
  //   btnAmarelo.style.backgroundColor = "yellow";

  img.src = "https://m.media-amazon.com/images/I/61gqNXC1-4L.jpg";
  img.setAttribute("width", "100px");
  container.appendChild(img);

  //   document.body.style.backgroundColor = "#2c3e";
}

function mudarCorbtn() {
  btnAzul.style.backgroundColor = "blue";
  document.body.style.backgroundColor = "blue";
}
btnStart.addEventListener("click", mudarCor);
