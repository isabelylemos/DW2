// Manipulação de datas
function data() {
  const novaData = new Date();
  const dia = novaData.getDate();
  const mes = novaData.getMonth() + 1;
  const ano = novaData.getFullYear();

  console.log(`A nova data é ${dia + 3}/${mes + 4}/${ano + 6}`);
}

data();

/////////////////////////////////////////////////////////////

// Formatação de moedas
function conversao(salReal) {
  let salEuro = salReal * 0.19;
  let salDolar = salReal * 0.2;

  console.log(
    `O salário em Dólar é igual a: ${salDolar.toLocaleString("en", {
      style: "currency",
      currency: "USD",
    })}`
  );
  console.log(
    `O salário em Euro é igual a: ${salEuro.toLocaleString("en", {
      style: "currency",
      currency: "EUR",
    })}`
  );
}

conversao(2500);

///////////////////////////////////////////////////////////////

// Formatação de strings
function formNome(nome) {
  console.log(
    `O seu nome em letras maiùsculas é: ${nome.toUpperCase()}`
  );
  console.log(
    `O seu nome em letras minùsculas é: ${nome.toLowerCase()}`
  );
  console.log(
    `O seu nome tem ${nome.length} letras`
  );
}

formNome('Isabely');
