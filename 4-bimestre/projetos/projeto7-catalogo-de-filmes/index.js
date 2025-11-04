// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")()

let filme1 = {titulo: ""}
let filme2 = {titulo: ""}
let filme3 = {titulo: ""}
let filme4 = {titulo: ""}
let filme5 = {titulo: ""}
let filme6 = {titulo: ""}
let filme7 = {titulo: ""}
let filme8 = {titulo: ""}
let filme9 = {titulo: ""}
let filme10 = {titulo: ""}

const coisa = {filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10}

for(let i = 1; i <= 10; i++){
    const filme = coisa[`filme${i}`]


    filme.titulo = prompt(`qual o titulo do filme ${i}? `)
    filme.genero = prompt(`qual o genero do filme ${i}? `)
    filme.ano = parseInt(prompt(`qual o ano de lançamento do filme ${i}? `))
    filme.avaliacao = parseFloat(prompt(`qual a avaliação do filme ${i}? `))
}
const avaliacoes = [filme1.avaliacao, filme2.avaliacao, filme3.avaliacao, filme4.avaliacao, filme5.avaliacao, filme6.avaliacao, filme7.avaliacao, filme8.avaliacao, filme9.avaliacao, filme10.avaliacao]
let maior = avaliacoes[0]
for(let i = 1; i < avaliacoes.length; i++){
    if(avaliacoes[i] > maior){
        maior = avaliacoes[i]
    }
}
let filmemaior = avaliacoes.indexOf(maior) + 1
let soma = avaliacoes.reduce((acumulador, valorAtual) => { return valorAtual + acumulador}, 0) 
let media = soma / avaliacoes.length
console.log(`
    === Catalogo de filmes ===
    1. ${filme1.titulo} - ${filme1.genero}
    2. ${filme2.titulo} - ${filme2.genero}
    3. ${filme3.titulo} - ${filme3.genero}
    4. ${filme4.titulo} - ${filme4.genero}
    5. ${filme5.titulo} - ${filme5.genero}
    6. ${filme6.titulo} - ${filme6.genero}
    7. ${filme7.titulo} - ${filme7.genero}
    8. ${filme8.titulo} - ${filme8.genero}
    9. ${filme9.titulo} - ${filme9.genero}
    10. ${filme10.titulo} - ${filme10.genero}

    Filme mais bem avaliado:
    ${coisa[`filme${filmemaior}`].titulo} (${maior})

    media geral das avaliaçoes:${media}
    `)
// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }