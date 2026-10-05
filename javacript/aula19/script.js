const form = document.querySelector("form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");

const nomeErro = document.querySelector("#nomeErro");
const emailErro = document.querySelector("#emailErro");
const senhaErro = document.querySelector("#senhaErro");

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validador() {
  event.preventDefault();
  let valido = true;

  if (nome.value.trim() === "") {
    nomeErro.textContent = "Usuario Obrigatorio";
    nomeErro.style.color = "red";
    valido = false;
    setTimeout(() => {
      location.reload();
    }, 3000);
  } else {
    console.log(nome.value.trim());
  }

  if (!regexEmail.test(email.value)) {
    emailErro.textContent = "Email invalido";
    emailErro.style.color = "red";
    valido = false;
  } else {
    console.log(email.value.trim());
  }

  if (senha.value.trim() === "") {
    senhaErro.textContent = "Senha obrigatorio";
    senhaErro.style.color = "red";
    valido = false;
  } else {
    console.log(senha.value.trim());
  }
  if (valido) {
   window.alert("forulario enviado");
  }
}

form.addEventListener("submit", validador);
