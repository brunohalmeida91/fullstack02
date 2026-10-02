const prompt = require("prompt-sync")();

let frutas = ["uva", "maça", "banana"];

console.log(frutas);
frutas.push('limao');
console.log(frutas);

frutas.unshift('maracuja')
console.log(frutas);


let copyfrutas = frutas.slice(0,2);
console.log(copyfrutas);


console.log("----------------------");

function soma (a , b ){
    return a + b ;
}

let resultado = soma(5, 3);
console.log(resultado);
