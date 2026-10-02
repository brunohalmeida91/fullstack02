const prompt = require("prompt-sync")();

/*let lista = [
  "uva",  "maça",  "banana",  "morango",  "pera",  "abacate",  "maracuja",  "açai",
];
for (let i = 0; i <= lista.length; i++) {
  console.log(lista[i]);
}   

const carro = {
  cor: "azul",
  modelo: "gol",
  ano: "2015",
  placa: "ABC-123",
};

console.log("-------------");

console.log(carro.cor);

console.log("-------------");

let numero = 1;
while (numero <= 5) {
  console.log("Numero: " + numero);
  numero++;
}*/

for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

console.log("-------------");

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i + "x" + j + "=" + i * j);
  }
}

console.log("-------------");

let letras = ["b", "r", "u", "n", "o"];
for (let i = 0; i < letras.length; i++) {
  for (let f = 0; f < letras.length; f++) {
    console.log(
      letras[f] + letras[f + 1] + letras[f + 2] + letras[f + 3] + letras[f + 4],
    );
  }
}
