const usuario = {
    nome : "Joao da Silva",
    idade: null,
    ativo: true,  
    cidade: "fortaleza",
     

    lugar () {
        return console.log ("Seja bem-vindo : " + this.nome + " que mora na cidade de : " + this.cidade)
    }
}

console.log(usuario.lugar())

const lista = ["unidade1", "unidade2"]
lista.push("unidade3")
console.log("-----------")
console.log(lista)



console.log("-----------")
console.log("-----------")

const numeros = [ 2 , 4 , 6 , 8 ,10];

numeros.forEach(function(numero, indice) {
    console.log (`Indice ${indice} : ${numero * 2}`);

});

console.log("-----------")
console.log("------------------------------")

const precos = [50 ,100 ,150];
const comDesconto = precos.map (
    p => p *0.9 
);

console.log(`Valor sem Desconto : ${precos} || Valor com Desconto : ${comDesconto}`)

