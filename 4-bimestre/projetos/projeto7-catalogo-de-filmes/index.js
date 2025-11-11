// CRIE UMA LÓGICA ABAIXO
// VERSAO SEM O PROMPT, TU PEDIU PQ A VERSAO COM O PROMPT N FUNCIONAVA NA CORREÇAO DO GITHUB!!!! obs: a outra ta guardada

let filme1 = {titulo: "Interestelar", genero: "Ficção Científica", ano: 2014, avaliacao: 9.5}
let filme2 = {titulo: "O Poderoso Chefão", genero: "Crime", ano: 1972, avaliacao: 9.8}
let filme3 = {titulo: "Homem-Aranha: Sem Volta para Casa", genero: "Ação", ano: 2021, avaliacao: 9.0}
let filme4 = {titulo: "Clube da Luta", genero: "Drama", ano: 1999, avaliacao: 9.3}
let filme5 = {titulo: "Vingadores: Ultimato", genero: "Ação", ano: 2019, avaliacao: 8.8}
let filme6 = {titulo: "Toy Story 3", genero: "Animação", ano: 2010, avaliacao: 9.2}
let filme7 = {titulo: "Coringa", genero: "Drama/Psicológico", ano: 2019, avaliacao: 9.1}
let filme8 = {titulo: "Parasita", genero: "Suspense", ano: 2019, avaliacao: 9.4}
let filme9 = {titulo: "Pulp Fiction", genero: "Crime", ano: 1994, avaliacao: 9.6}
let filme10 = {titulo: "O Senhor dos Anéis: O Retorno do Rei", genero: "Fantasia", ano: 2003, avaliacao: 9.7}

const coisa = {filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10}

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

    media geral das avaliaçoes: ${media.toFixed(2)}
    `)

// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }