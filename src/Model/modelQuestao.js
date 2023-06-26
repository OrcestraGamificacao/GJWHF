function Questao(numQuestao, textoIntrodutorio , pergunta, alternativaA, alternativaB, alternativaC, alternativaD, resposta, textoCorreto, textoErrado){
    this.numQuestao = numQuestao
    this.textoIntrodutorio = textoIntrodutorio
    this.pergunta = pergunta
    this.alternativaA = alternativaA
    this.alternativaB = alternativaB
    this.alternativaC = alternativaC
    this.alternativaD = alternativaD
    this.resposta = resposta
    this.textoCorreto = textoCorreto
    this.textoErrado = textoErrado
}

const q0 = new Questao()

export { Questao, q0 }