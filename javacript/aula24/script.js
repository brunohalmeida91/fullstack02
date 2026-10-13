const botao = document.getElementById("botaoBuscar");
const campoId = document.getElementById("idUsuario");
const lista = document.getElementById("listaUsuarios");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
  const id = Number(campoId.value);

  if (!Number.isInteger(id) || id < 1) {
    mensagem.textContent = "Digite um ID válido.";
    lista.innerHTML = "";
    return;
  }

  buscarUsuario(id);
});

async function buscarUsuario(id) {
  mensagem.textContent = "Carregando usuário...";
  lista.innerHTML = "";

  try {
    const resposta = await fetch(`https://fakestoreapi.com/users/${id}`);

    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    const data = await resposta.json();

    if (!data || !data.id) {
      throw new Error("Usuário não encontrado.");
    }

    mensagem.textContent = "Usuário encontrado!";

    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
            <p class="id">ID: ${data.id}</p>

            <h2>
                ${data.name.firstname}
                ${data.name.lastname}
            </h2>

            <p>
                <strong>Usuário:</strong>
                ${data.username}
            </p>

            <p>
                <strong>E-mail:</strong>
                ${data.email}
            </p>

            <p>
                <strong>Telefone:</strong>
                ${data.phone}
            </p>

            <p>
                <strong>Cidade:</strong>
                ${data.address.city}
            </p>

            <p>
                <strong>Rua:</strong>
                ${data.address.street}
                ${data.address.number}
            </p>

            <p>
                <strong>Cep:</strong>
                ${data.address.zipcode}
            </p>
        `;

    lista.appendChild(card);

    console.log(data);
  } catch (err) {
    mensagem.textContent = "Não foi possível buscar o usuário.";

    console.error("Erro:", err);
  }
}
