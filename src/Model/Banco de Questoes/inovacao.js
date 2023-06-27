import { Questao } from "../modelQuestao"

// Questoes de inovação
function questoesInovacao(){
    const inovQ1 = new Questao(1, 'texto introdutorio - inovação 1', 'Pergunta inovação 1', '1a - inovação', '1b - inovação', '1c - inovação', '1d - inovação (certa)', '1d - inovação (certa)', 'Explicação')

    const inovQ2 = new Questao(2, 'texto introdutorio - inovação 2', 'Pergunta inovação 2', '2a - inovação', '2b - inovação (certa)', '2c - inovação', '2d - inovação', '2b - inovação (certa)', 'Explicação')

    const inovQ3 = new Questao(3, 'texto introdutorio - inovação 3', 'Pergunta inovação 3', '3a - inovação (certa)', '3b - inovação', '3c - inovação', '3d - inovação', '3a - inovação (certa)', 'Explicação')

    const inovQ4 = new Questao(4, 'texto introdutorio - inovação 4', 'Pergunta inovação 4', '4a - inovação', '4b - inovação', '4c - inovação (certa)', '4d - inovação', '4c - inovação (certa)', 'Explicação')

    const inovQ5 = new Questao(5, 'texto introdutorio - inovação 5', 'Pergunta inovação 5', '5a - inovação', '5b - inovação', '5c - inovação', '5d - inovação (certa)', '5d - inovação (certa)', 'Explicação')

    const inovQ6 = new Questao(6, 'texto introdutorio - inovação 6', 'Pergunta inovação 6', '6a - inovação', '6b - inovação', '6c - inovação', '6d - inovação (certa)', '6d - inovação (certa)', 'Explicação')

    const inovQ7 = new Questao(7, 'texto introdutorio - inovação 7', 'Pergunta inovação 7', '7a - inovação', '7b - inovação (certa)', '7c - inovação', '7d - inovação', '7b - inovação (certa)', 'Explicação')

    const inovQ8 = new Questao(8, 'texto introdutorio - inovação 8', 'Pergunta inovação 8', '8a - inovação (certa)', '8b - inovação', '8c - inovação', '8d - inovação', '8a - inovação (certa)', 'Explicação')

    const inovQ9 = new Questao(9, 'texto introdutorio - inovação 9', 'Pergunta inovação 9', '9a - inovação', '9b - inovação', '9c - inovação (certa)', '9d - inovação', '9c - inovação (certa)', 'Explicação')

    const inovQ10 = new Questao(10, 'texto introdutorio - inovação 10', 'Pergunta inovação 10', '10a - inovação', '10b - inovação', '10c - inovação', '10d - inovação (certa)', '10d - inovação (certa)', 'Explicação')

    const inovQuestoes = [inovQ1, inovQ2, inovQ3, inovQ4, inovQ5, inovQ6, inovQ7, inovQ8, inovQ9, inovQ10]

    return inovQuestoes

}


export default questoesInovacao