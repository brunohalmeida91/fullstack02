const form = document.querySelector("form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");

const nomeErro = document.querySelector("#nomeErro");
const emailErro = document.querySelector("#emailErro");
const senhaErro = document.querySelector("#senhaErro");

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const cadastro = [];

function validador() {
  event.preventDefault();
  let valido = true;

  let usuario = "";
  let emailUsu = "";
  let senhaUsu = "";

  if (nome.value.trim() === "") {
    nomeErro.textContent = "Usuario Obrigatorio";
    nomeErro.style.color = "red";
    valido = false;
    setTimeout(() => {
      location.reload();
    }, 3000);
  } else {
    usuario = nome.value;
  }

  if (!regexEmail.test(email.value)) {
    emailErro.textContent = "Email invalido";
    emailErro.style.color = "red";
    valido = false;
  } else {
    emailUsu = email.value;
  }

  if (senha.value.trim() === "") {
    senhaErro.textContent = "Senha obrigatorio";
    senhaErro.style.color = "red";
    valido = false;
  } else {
    senhaUsu = senha.value;
  }

  cadastro.push(
    (usuario = {
      nome: usuario,
      email: emailUsu,
      senha: senhaUsu,
    }),
  );

  if (valido) {
    console.log(cadastro);
    window.alert("formulario enviado");
  }
}

form.addEventListener("submit", validador);
