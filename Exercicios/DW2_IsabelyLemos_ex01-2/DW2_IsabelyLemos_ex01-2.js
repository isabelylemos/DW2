// exercício 5 - função anônima

const notas = function (nota1, nota2, media) {
  media = (nota1 + nota2) / 2;
  if (media <= 5) {
    return "Reprovado";
  } else {
    return "Aprovado";
  }
};

console.log(`Você está: ${notas(5, 7)}!.`);

////////////////////////////////////////////

// exercício 6 - função arrow function com parâmetro único

const triplo = (x) => {
  return x * 3;
};

console.log(`O triplo do número é: ${triplo(4)}.`);

//////////////////////////////////////////////

// exercício 7 - função arrow function com mais de um parâmetro

const soma = (num1, num2, num3, num4) => {
  return num1 + num2 + num3 + num4;
};

console.log(`O resultado da soma é: ${soma(5, 5, 5, 5)}.`);

///////////////////////////////////////////////

// exercício 8 - IIFE

const saudacao = (function (nome) {
  console.log(`Seja bem vinda, ${nome}!`);
})("Isabely");
