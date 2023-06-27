import { Questao } from "../modelQuestao";

// Questoes de inovacao
function questoesInovacao(){
    const inovQ1 = new Questao(1, 'texto introdutorio - inovaçao 1', 'Pergunta inovaçao 1', '1a - inovaçao', '1b - inovaçao', '1c - inovaçao', '1d - inovaçao (certa)', '1d - inovaçao (certa)', 'Explicação')

    const inovQ2 = new Questao(2, 'texto introdutorio - inovaçao 2', 'Pergunta inovaçao 2', '2a - inovaçao', '2b - inovaçao (certa)', '2c - inovaçao', '2d - inovaçao', '2b - inovaçao (certa)', 'Explicação')

    const inovQ3 = new Questao(3, 'texto introdutorio - inovaçao 3', 'Pergunta inovaçao 3', '3a - inovaçao (certa)', '3b - inovaçao', '3c - inovaçao', '3d - inovaçao', '3a - inovaçao (certa)', 'Explicação')

    const inovQ4 = new Questao(4, 'texto introdutorio - inovaçao 4', 'Pergunta inovaçao 4', '4a - inovaçao', '4b - inovaçao', '4c - inovaçao (certa)', '4d - inovaçao', '4c - inovaçao (certa)', 'Explicação')

    const inovQ5 = new Questao(5, 'texto introdutorio - inovaçao 5', 'Pergunta inovaçao 5', '5a - inovaçao', '5b - inovaçao', '5c - inovaçao', '5d - inovaçao (certa)', '5d - inovaçao (certa)', 'Explicação')

    const inovQ6 = new Questao(6, 'texto introdutorio - inovaçao 6', 'Pergunta inovaçao 6', '6a - inovaçao', '6b - inovaçao', '6c - inovaçao', '6d - inovaçao (certa)', '6d - inovaçao (certa)', 'Explicação')

    const inovQ7 = new Questao(7, 'texto introdutorio - inovaçao 7', 'Pergunta inovaçao 7', '7a - inovaçao', '7b - inovaçao (certa)', '7c - inovaçao', '7d - inovaçao', '7b - inovaçao (certa)', 'Explicação')

    const inovQ8 = new Questao(8, 'texto introdutorio - inovaçao 8', 'Pergunta inovaçao 8', '8a - inovaçao (certa)', '8b - inovaçao', '8c - inovaçao', '8d - inovaçao', '8a - inovaçao (certa)', 'Explicação')

    const inovQ9 = new Questao(9, 'texto introdutorio - inovaçao 9', 'Pergunta inovaçao 9', '9a - inovaçao', '9b - inovaçao', '9c - inovaçao (certa)', '9d - inovaçao', '9c - inovaçao (certa)', 'Explicação')

    const inovQ10 = new Questao(10, 'texto introdutorio - inovaçao 10', 'Pergunta inovaçao 10', '10a - inovaçao', '10b - inovaçao', '10c - inovaçao', '10d - inovaçao (certa)', '10d - inovaçao (certa)', 'Explicação')

    const inovQuestoes = [inovQ1, inovQ2, inovQ3, inovQ4, inovQ5, inovQ6, inovQ7, inovQ8, inovQ9, inovQ10]

    return inovQuestoes
}

export default questoesInovacao