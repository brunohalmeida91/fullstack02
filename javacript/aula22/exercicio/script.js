fetch("https://jsonplaceholder.typicode.com/posts")
  // 1. Recebe a resposta e verifica se está tudo OK
  .then(resposta => {
    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }
    return resposta.json(); // Converte a resposta para JSON
  })
  // 2. Recebe a lista completa de posts e filtra os 5 primeiros
  .then(posts => {
    // slice(0, 5) extrai os itens do índice 0 até o 4
    const primeirosCinco = posts.slice(0, 5); 
    
    console.log("--- Exibindo os 5 Primeiros Posts ---");
    
    // Exibe cada um dos 5 posts no console
    primeirosCinco.forEach((post, index) => {
      console.log(`[${index + 1}] Título: ${post.title}`);
    });
  })
  // 3. Trata possíveis erros de rede
  .catch(erro => {
    console.error("Falha ao buscar os posts:", erro.message);
  });

  // explicação resumida

  //https://www.google.com/search?q=arrow+function+javascript&sca_esv=e2130cf16db8d2a2&rlz=1C1OZZY_pt-PTBR1231BR1231&sxsrf=APpeQnvol_WjvV8rKfsKr2IwPU6F0SAbOA%3A1791460992815&source=chrome.ob&fbs=ABfTbFVGaQeaqnsRPI5sOMG32KszkLt6nAp8aiRKj5vMjqZApKYr2wv-EHakX1SS4JF8fY1_A0DfPLoyd61yD2Gjy0hF5xCGdMIu1T4OpsNqfBilMBy-wr_0h3_BvPs-ESj4m8vUTLVm3QwdIDM_SOkiQGWliErhL73ZM_upaweMkmglOqGhBN6R5o-JHPAPiSGsykRxDMw9Vd_IlrrIMnnXeI8EH36Hfw&vsint=&aep=1&ntc=1&cs=0&sa=X&ved=2ahUKEwiG4OugsKqXAxU5qJUCHV63I6IQ2J8OegQIERAD&biw=1536&bih=695&dpr=1.25&mstk=AUtExfDhEH5SBY0uvfNCFv-nJowatnXsY6URz2SJZGFsLjhFBT87L_mYUwXalXRpkJ9AlDdYzEhIQ-3iawDtB3okx8wOUEpCEhifXhT_aCC578u7tqLZ9jO7Difot_eiE8_H5S6pJd0PahfMvZbODOfHlLDyK2wxDPP2WNI6M9sDyIL5eRqWxgvkluwICHXAFZtlECa0b5iEvepB1l_ghKhi50SXcUSSOYNck2GENtM8tbjEsurIp59sXG9bO9c4gd6r4kAEeav7rlcb5i_gqVndqKqNgjDw52bZDe-CoBRNpU5ZRuaE6NUkuJYYsTPMR4h5ExE1Z5fouXqrMQ-E1ua1fOCFN-IcT5Ts-g&csuir=1&mtid=g4bHatSgE8Sv1sQPhuOwyQo&lns_mode=cvst&udm=50
  

