// Antes de iniciar, instale o prompt-sync para entrada de dados e o jest para testar
// Comando: npm i prompt-sync; npm i -D jest

// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")()

// variaveis externas para dar valor dentro do programa
let dia = 0
let meta
let continuarProducao 
let total = 0
let linhas = ""

do{
    do{
        meta = parseInt(prompt("quantas peças devem ser produzidas nesse turno?: "))
        //obrigar a escrever algo
    } while(typeof meta !== 'number' || meta !== meta)
    let producao = 0
    while(producao < meta){
        producao++
        console.log(`Peça ${producao}, produzida com sucesso`)
    }
    // se a meta foi alcançada ou não
    if(producao === meta){
        console.log("Meta alcançada!")
    } else {
        console.log("meta não alcançada!")
    }
    // fazer a contagem dos dias e exibir o resultado (não julgue meu for)
        for(let i = 1 ; i > 0 ; i--){
            dia++
            // pequena gambiarra para fazer sem array
            const linha = `Dia ${dia} foi produzido ${meta} \n`
            linhas += linha
            total = meta + total
    }
    // por algum motivo, o node acusa um erro no uppercase, mas ta funcionado normal
    do{
        continuarProducao = prompt("Deseja simular outro turno? S/N: ").toUpperCase()
    } while(continuarProducao === "" || continuarProducao === null)
}while(continuarProducao == "S")

console.log("Resumo dos dias anteriores:")
console.log(linhas)
// tava pedindo no teste pra mostrar o total geral, mas no readme n tinha nada falando sobre (ou eu sou cego :| )
console.log(`Total geral: ${total} peças fabricadas!`)
console.log("Encerrando sistema de produção")
