const promessa = new Promise((resolve, reject) => {
  const sucesso = true;
  if (sucesso) {
    resolve("Dados Carregado");
  } else {
    reject("Erro ao carregar");
  }
});

console.log(" -##-##-##-##-##-##-##--##-##-##-##-##-##-##-##-##-##");

promessa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.log(erro);
  })
  .finally(() => {
    console.log("Fim da Operação");
  });

console.log(" -##-##-##-##-##-##-##--##-##-##-##-##-##-##-##-##-##");

async function iniciar() {
  const resultado = await new Promise((resolve) => {
    setTimeout(() => resolve("ok"), 2000);
  });
  console.log(resultado);
}
iniciar();

async function buscarPokemon(id) {
  try {
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/${nome}");
    if (!resposta.ok) throw new Error("Usuario nao encontrado");
    const usuario = await resposta.json();
    console.log(usuario);
  } catch (erro) {
    console.error("Erro", erro.message);
  } finally {
    console.log("Requisição Finalizada");
  }
}
