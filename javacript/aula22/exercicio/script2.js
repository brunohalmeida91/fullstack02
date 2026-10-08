const cards = document.getElementById("cards");
async function buscarUsuario(id) {
  try {
    const resposta1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!resposta1.ok) throw new Error("usuário não encontrado");
    const usuario = await resposta1.json();
    console.log(usuario.sprites.other.showdown.front_default);
    return usuario;
  } catch (erro) {
    console.error("Erro:", erro.mensage);
    return null;
  }
}
(async () => {
  for (let i = 1; i < 200; i++) {
    const pokemon = await buscarUsuario(i);

    if (pokemon) {
      cards.innerHTML += `<img src="${pokemon.sprites.other.showdown.front_default}" width="100px" height="100px">`;
    }
  }
})();
