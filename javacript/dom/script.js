const titulo = document.getElementById("titulo");

titulo.textContent = "Novo Titulo";

titulo.innerHTML = "<p> oi <b> Titulo em negrito </b> </p>";

const imagem = document.querySelector("img");
imagem.setAttribute(
  "src",
  "https://images.tcdn.com.br/img/img_prod/754260/oculos_de_sol_masculino_mormaii_lagos_m0074a0203_polarizado_12951_1_0bba86f1ad77ac5f7c553412fd386eaf.jpg",
);
imagem.setAttribute("width", "300px");

const container = document.querySelector("div");

container.innerHTML = "<p> OI - NOVO</p>";
container.style.color = "white";
container.style.backgroundColor = "#373B48";
container.style.fontSize = "24px";
container.style.padding = "5px";
container.style.margin = "10px";
container.style.textAlign = "center";
container.style.border = "solid , red";
container.style.borderRadius = "5px";
// div.style.display = "none";

// const btn = document.querySelector("button");
// btn.style.backgroundColor = "red";
// btn.style.color = "white";
// btn.style.padding = "10px";
// btn.style.alignSelf = 'center';

//funcao para mudar ação do botao ao clicar
function mudarcor() {
  const botao = document.querySelector("button");
  botao.style.backgroundColor = "blue";
  botao.style.color = "red";
}

const p = document.querySelectorAll("p");

p.style.color = "red";
