// class Questao {
//     constructor(numQuestao, pergunta, alternativaA, alternativaB, alternativaC, resposta){
//         this.numQuestao = numQuestao
//         this.pergunta = pergunta
//         this.alternativaA = alternativaA
//         this.alternativaB = alternativaB
//         this.alternativaC = alternativaC
//         this.resposta = resposta
//     }
// }

//
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



// Questoes de tecnologia
const q0 = new Questao()

const tecQ1 = new Questao(1, 'texto introdutorio - tecnologia 1', 'Pergunta tecnologia 1', '1a - tecnologia', '1b - tecnologia', '1c - tecnologia', '1d - tecnologia (certa)', '1d - tecnologia (certa)', 'Você acertou!', 'Você errou!')

const tecQ2 = new Questao(2, 'texto introdutorio - tecnologia 2', 'Pergunta tecnologia 2', '2a - tecnologia', '2b - tecnologia (certa)', '2c - tecnologia', '2d - tecnologia', '2b - tecnologia (certa)', 'Você acertou!', 'Você errou!')

const tecQ3 = new Questao(3, 'texto introdutorio - tecnologia 3', 'Pergunta tecnologia 3', '3a - tecnologia (certa)', '3b - tecnologia', '3c - tecnologia', '3d - tecnologia', '3a - tecnologia (certa)', 'Você acertou!', 'Você errou!')

const tecQ4 = new Questao(4, 'texto introdutorio - tecnologia 4', 'Pergunta tecnologia 4', '4a - tecnologia', '4b - tecnologia', '4c - tecnologia (certa)', '4d - tecnologia', '4c - tecnologia (certa)', 'Você acertou!', 'Você errou!')

const tecQ5 = new Questao(5, 'texto introdutorio - tecnologia 5', 'Pergunta tecnologia 5', '5a - tecnologia', '5b - tecnologia', '5c - tecnologia', '5d - tecnologia (certa)', '5d - tecnologia (certa)', 'Você acertou!', 'Você errou!')

const tecQ6 = new Questao(6, 'texto introdutorio - tecnologia 6', 'Pergunta tecnologia 6', '6a - tecnologia', '6b - tecnologia', '6c - tecnologia', '6d - tecnologia (certa)', '6d - tecnologia (certa)', 'Você acertou!', 'Você errou!')

const tecQ7 = new Questao(7, 'texto introdutorio - tecnologia 7', 'Pergunta tecnologia 7', '7a - tecnologia', '7b - tecnologia (certa)', '7c - tecnologia', '7d - tecnologia', '7b - tecnologia (certa)', 'Você acertou!', 'Você errou!')

const tecQ8 = new Questao(8, 'texto introdutorio - tecnologia 8', 'Pergunta tecnologia 8', '8a - tecnologia (certa)', '8b - tecnologia', '8c - tecnologia', '8d - tecnologia', '8a - tecnologia (certa)', 'Você acertou!', 'Você errou!')

const tecQ9 = new Questao(9, 'texto introdutorio - tecnologia 9', 'Pergunta tecnologia 9', '9a - tecnologia', '9b - tecnologia', '9c - tecnologia (certa)', '9d - tecnologia', '9c - tecnologia (certa)', 'Você acertou!', 'Você errou!')

const tecQ10 = new Questao(10, 'texto introdutorio - tecnologia 10', 'Pergunta tecnologia 10', '10a - tecnologia', '10b - tecnologia', '10c - tecnologia', '10d - tecnologia (certa)', '10d - tecnologia (certa)', 'Você acertou!', 'Você errou!')

const tecExtra = new Questao(11, 'texto introdutorio', 'Pergunta extra', 'A', 'B', 'C', 'D', 'D', 'Você acertou!', 'Você errou!')

const tecQuestoes = [q0, tecQ1, tecQ2, tecQ3, tecQ4, tecQ5, tecQ6, tecQ7, tecQ8, tecQ9, tecQ10]



// Questoes de inovacao
const inovQ1 = new Questao(1, 'texto introdutorio - inovaçao 1', 'Pergunta inovaçao 1', '1a - inovaçao', '1b - inovaçao', '1c - inovaçao', '1d - inovaçao (certa)', '1d - inovaçao (certa)', 'Você acertou!', 'Você errou!')

const inovQ2 = new Questao(2, 'texto introdutorio - inovaçao 2', 'Pergunta inovaçao 2', '2a - inovaçao', '2b - inovaçao (certa)', '2c - inovaçao', '2d - inovaçao', '2b - inovaçao (certa)', 'Você acertou!', 'Você errou!')

const inovQ3 = new Questao(3, 'texto introdutorio - inovaçao 3', 'Pergunta inovaçao 3', '3a - inovaçao (certa)', '3b - inovaçao', '3c - inovaçao', '3d - inovaçao', '3a - inovaçao (certa)', 'Você acertou!', 'Você errou!')

const inovQ4 = new Questao(4, 'texto introdutorio - inovaçao 4', 'Pergunta inovaçao 4', '4a - inovaçao', '4b - inovaçao', '4c - inovaçao (certa)', '4d - inovaçao', '4c - inovaçao (certa)', 'Você acertou!', 'Você errou!')

const inovQ5 = new Questao(5, 'texto introdutorio - inovaçao 5', 'Pergunta inovaçao 5', '5a - inovaçao', '5b - inovaçao', '5c - inovaçao', '5d - inovaçao (certa)', '5d - inovaçao (certa)', 'Você acertou!', 'Você errou!')

const inovQ6 = new Questao(6, 'texto introdutorio - inovaçao 6', 'Pergunta inovaçao 6', '6a - inovaçao', '6b - inovaçao', '6c - inovaçao', '6d - inovaçao (certa)', '6d - inovaçao (certa)', 'Você acertou!', 'Você errou!')

const inovQ7 = new Questao(7, 'texto introdutorio - inovaçao 7', 'Pergunta inovaçao 7', '7a - inovaçao', '7b - inovaçao (certa)', '7c - inovaçao', '7d - inovaçao', '7b - inovaçao (certa)', 'Você acertou!', 'Você errou!')

const inovQ8 = new Questao(8, 'texto introdutorio - inovaçao 8', 'Pergunta inovaçao 8', '8a - inovaçao (certa)', '8b - inovaçao', '8c - inovaçao', '8d - inovaçao', '8a - inovaçao (certa)', 'Você acertou!', 'Você errou!')

const inovQ9 = new Questao(9, 'texto introdutorio - inovaçao 9', 'Pergunta inovaçao 9', '9a - inovaçao', '9b - inovaçao', '9c - inovaçao (certa)', '9d - inovaçao', '9c - inovaçao (certa)', 'Você acertou!', 'Você errou!')

const inovQ10 = new Questao(10, 'texto introdutorio - inovaçao 10', 'Pergunta inovaçao 10', '10a - inovaçao', '10b - inovaçao', '10c - inovaçao', '10d - inovaçao (certa)', '10d - inovaçao (certa)', 'Você acertou!', 'Você errou!')

const inovExtra = new Questao(11, 'texto introdutorio', 'Pergunta extra', 'A', 'B', 'C', 'D', 'D', 'Você acertou!', 'Você errou!')

const inovQuestoes = [q0, inovQ1, inovQ2, inovQ3, inovQ4, inovQ5, inovQ6, inovQ7, inovQ8, inovQ9, inovQ10]



// Questoes de educação
const eduQ1 = new Questao(1, 'texto introdutorio - educaçao 1', 'Pergunta educaçao 1', '1a - educaçao', '1b - educaçao', '1c - educaçao', '1d - educaçao (certa)', '1d - educaçao (certa)', 'Você acertou!', 'Você errou!')

const eduQ2 = new Questao(2, 'texto introdutorio - educaçao 2', 'Pergunta educaçao 2', '2a - educaçao', '2b - educaçao (certa)', '2c - educaçao', '2d - educaçao', '2b - educaçao (certa)', 'Você acertou!', 'Você errou!')

const eduQ3 = new Questao(3, 'texto introdutorio - educaçao 3', 'Pergunta educaçao 3', '3a - educaçao (certa)', '3b - educaçao', '3c - educaçao', '3d - educaçao', '3a - educaçao (certa)', 'Você acertou!', 'Você errou!')

const eduQ4 = new Questao(4, 'texto introdutorio - educaçao 4', 'Pergunta educaçao 4', '4a - educaçao', '4b - educaçao', '4c - educaçao (certa)', '4d - educaçao', '4c - educaçao (certa)', 'Você acertou!', 'Você errou!')

const eduQ5 = new Questao(5, 'texto introdutorio - educaçao 5', 'Pergunta educaçao 5', '5a - educaçao', '5b - educaçao', '5c - educaçao', '5d - educaçao (certa)', '5d - educaçao (certa)', 'Você acertou!', 'Você errou!')

const eduQ6 = new Questao(6, 'texto introdutorio - educaçao 6', 'Pergunta educaçao 6', '6a - educaçao', '6b - educaçao', '6c - educaçao', '6d - educaçao (certa)', '6d - educaçao (certa)', 'Você acertou!', 'Você errou!')

const eduQ7 = new Questao(7, 'texto introdutorio - educaçao 7', 'Pergunta educaçao 7', '7a - educaçao', '7b - educaçao (certa)', '7c - educaçao', '7d - educaçao', '7b - educaçao (certa)', 'Você acertou!', 'Você errou!')

const eduQ8 = new Questao(8, 'texto introdutorio - educaçao 8', 'Pergunta educaçao 8', '8a - educaçao (certa)', '8b - educaçao', '8c - educaçao', '8d - educaçao', '8a - educaçao (certa)', 'Você acertou!', 'Você errou!')

const eduQ9 = new Questao(9, 'texto introdutorio - educaçao 9', 'Pergunta educaçao 9', '9a - educaçao', '9b - educaçao', '9c - educaçao (certa)', '9d - educaçao', '9c - educaçao (certa)', 'Você acertou!', 'Você errou!')

const eduQ10 = new Questao(10, 'texto introdutorio - educaçao 10', 'Pergunta educaçao 10', '10a - educaçao', '10b - educaçao', '10c - educaçao', '10d - educaçao (certa)', '10d - educaçao (certa)', 'Você acertou!', 'Você errou!')

const eduExtra = new Questao(11, 'texto introdutorio', 'Pergunta extra', 'A', 'B', 'C', 'D', 'D', 'Você acertou!', 'Você errou!')

const eduQuestoes = [q0, eduQ1, eduQ2, eduQ3, eduQ4, eduQ5, eduQ6, eduQ7, eduQ8, eduQ9, eduQ10]



// Questoes de saude
const saudeQ1 = new Questao(1, 'texto introdutorio - saude 1', 'Pergunta saude 1', '1a - saude', '1b - saude', '1c - saude', '1d - saude (certa)', '1d - saude (certa)', 'Você acertou!', 'Você errou!')

const saudeQ2 = new Questao(2, 'texto introdutorio - saude 2', 'Pergunta saude 2', '2a - saude', '2b - saude (certa)', '2c - saude', '2d - saude', '2b - saude (certa)', 'Você acertou!', 'Você errou!')

const saudeQ3 = new Questao(3, 'texto introdutorio - saude 3', 'Pergunta saude 3', '3a - saude (certa)', '3b - saude', '3c - saude', '3d - saude', '3a - saude (certa)', 'Você acertou!', 'Você errou!')

const saudeQ4 = new Questao(4, 'texto introdutorio - saude 4', 'Pergunta saude 4', '4a - saude', '4b - saude', '4c - saude (certa)', '4d - saude', '4c - saude (certa)', 'Você acertou!', 'Você errou!')

const saudeQ5 = new Questao(5, 'texto introdutorio - saude 5', 'Pergunta saude 5', '5a - saude', '5b - saude', '5c - saude', '5d - saude (certa)', '5d - saude (certa)', 'Você acertou!', 'Você errou!')

const saudeQ6 = new Questao(6, 'texto introdutorio - saude 6', 'Pergunta saude 6', '6a - saude', '6b - saude', '6c - saude', '6d - saude (certa)', '6d - saude (certa)', 'Você acertou!', 'Você errou!')

const saudeQ7 = new Questao(7, 'texto introdutorio - saude 7', 'Pergunta saude 7', '7a - saude', '7b - saude (certa)', '7c - saude', '7d - saude', '7b - saude (certa)', 'Você acertou!', 'Você errou!')

const saudeQ8 = new Questao(8, 'texto introdutorio - saude 8', 'Pergunta saude 8', '8a - saude (certa)', '8b - saude', '8c - saude', '8d - saude', '8a - saude (certa)', 'Você acertou!', 'Você errou!')

const saudeQ9 = new Questao(9, 'texto introdutorio - saude 9', 'Pergunta saude 9', '9a - saude', '9b - saude', '9c - saude (certa)', '9d - saude', '9c - saude (certa)', 'Você acertou!', 'Você errou!')

const saudeQ10 = new Questao(10, 'texto introdutorio - saude 10', 'Pergunta saude 10', '10a - saude', '10b - saude', '10c - saude', '10d - saude (certa)', '10d - saude (certa)', 'Você acertou!', 'Você errou!')

const saudeExtra = new Questao(11, 'texto introdutorio', 'Pergunta extra', 'A', 'B', 'C', 'D', 'D', 'Você acertou!', 'Você errou!')

const saudeQuestoes = [q0, saudeQ1, saudeQ2, saudeQ3, saudeQ4, saudeQ5, saudeQ6, saudeQ7, saudeQ8, saudeQ9, saudeQ10]