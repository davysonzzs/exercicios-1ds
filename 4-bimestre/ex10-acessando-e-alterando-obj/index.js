// CRIE UMA LÓGICA AQUI
const carro = {
    marca: "Toyota",
    modelo: "corolla",
    ano: 2020,
    cor: "prata"
}

console.log(carro.modelo)
carro.cor = "Preto"
carro.preco = 120000
console.log(carro)
// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { carro }