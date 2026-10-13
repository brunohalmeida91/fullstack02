const botao = document.getElementById("botaoBuscar");
const campoId = document.getElementById("idProduto");
const lista = document.getElementById("listaProdutos")
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function(){
    const id = Number(campoId.value);
    if (!Number.isInteger(id) || id < 1 ) {
        mensagem.textContent = "Digite um ID valido .";
        lista.innerHTML = "";
        return;
    }
    buscarProdutos(id);
});

async function buscarProdutos(id) {
    mensagem.textContent = "Carregando Produtos ...";
    lista.innerHTML = "";

    try {
        const resposta = await fetch (`https://fakestoreapi.com/products/${id}`);

        if (!resposta.ok){
            throw new Error (`Erro http : ${resposta.status}`);
        }

        const data = await resposta.json();

        if (!data || !data.id) {
            throw new Error("Produto nao encontado.");
        }

        mensagem.textContent = "Produto encontrado !";

        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
        <p class="id"> ID: ${data.id}</p>
        
        <h2>${data.title}</h2>
        
        
        `;
        lista.appendChild(card);

    console.log(data);
    }catch (err) {
    mensagem.textContent = "Não foi possível buscar o usuário.";

    console.error("Erro:", err);
  }


    
}