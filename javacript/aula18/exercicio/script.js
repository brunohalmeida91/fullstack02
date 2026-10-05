const botao = document.getElementById("enviar");
const body = document.querySelector("body");

function pegarValor() {
  const input = document.getElementById("meuInput");
  event.preventDefault();

  const valor = input.value;
  console.log(valor);

  const container = document.getElementById("container");
  container.innerHTML = `${valor}`;

  body.style.backgroundColor = `${valor}`;
}

botao.addEventListener("click", pegarValor);
