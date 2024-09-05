// exercício 1 - função simples

const nome = "Isabely"
const idade = 18
const cidade = "Jacupiranga"

function simples(nome, idade, cidade){
    console.log(`Meu nome é ${nome}, tenho ${idade} anos e sou de ${cidade}`)
}

simples(nome, idade, cidade)

////////////////////////////////////////////////////////////////////////

// exercício 2 - função com parâmetros

function divisao (n1, n2){
    let resultado = n1/n2
    console.log(`A divisão dos números é igual a ${resultado}`)
}

divisao(10, 5)

////////////////////////////////////////////////////////////////////////

// exercício 3 - função com retorno

function mult(n1, n2){
    return n1*n2
}

console.log(`A multiplicação dos números é igual a ${mult(5,5)}`)

////////////////////////////////////////////////////////////////////////

// exercício 4 - função com mais de um retorno

function retorno (Idade){
    if (Idade >= 18){
        return `maior de idade`
    } else {
        return `menor de idade`
    }
}

let Idade = 18
console.log(`Você é ${retorno(Idade)}`)