// CRIE UMA LÓGICA AQUI
function boasVindas(){
    let mensagem = "Bem-vindo(a) ao sistema!"
    return mensagem
}
function soma(a, b){
    return a + b
}

let msg = boasVindas()
let cauculo = soma(5, 5)
console.log(`${msg} \n ${cauculo}`)
// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { boasVindas, soma }