import { Questao } from "../modelQuestao";

// Questoes de ativismo
function questoesAtivismo(){
    const ativQ1 = new Questao(1, 'texto introdutorio - ativismo 1', 'Pergunta ativismo 1', '1a - ativismo', '1b - ativismo', '1c - ativismo', '1d - ativismo (certa)', '1d - ativismo (certa)', 'Explicação')

    const ativQ2 = new Questao(2, 'texto introdutorio - ativismo 2', 'Pergunta ativismo 2', '2a - ativismo', '2b - ativismo (certa)', '2c - ativismo', '2d - ativismo', '2b - ativismo (certa)', 'Explicação')

    const ativQ3 = new Questao(3, 'texto introdutorio - ativismo 3', 'Pergunta ativismo 3', '3a - ativismo (certa)', '3b - ativismo', '3c - ativismo', '3d - ativismo', '3a - ativismo (certa)', 'Explicação')

    const ativQ4 = new Questao(4, 'texto introdutorio - ativismo 4', 'Pergunta ativismo 4', '4a - ativismo', '4b - ativismo', '4c - ativismo (certa)', '4d - ativismo', '4c - ativismo (certa)', 'Explicação')

    const ativQ5 = new Questao(5, 'texto introdutorio - ativismo 5', 'Pergunta ativismo 5', '5a - ativismo', '5b - ativismo', '5c - ativismo', '5d - ativismo (certa)', '5d - ativismo (certa)', 'Explicação')

    const ativQ6 = new Questao(6, 'texto introdutorio - ativismo 6', 'Pergunta ativismo 6', '6a - ativismo', '6b - ativismo', '6c - ativismo', '6d - ativismo (certa)', '6d - ativismo (certa)', 'Explicação')

    const ativQ7 = new Questao(7, 'texto introdutorio - ativismo 7', 'Pergunta ativismo 7', '7a - ativismo', '7b - ativismo (certa)', '7c - ativismo', '7d - ativismo', '7b - ativismo (certa)', 'Explicação')

    const ativQ8 = new Questao(8, 'texto introdutorio - ativismo 8', 'Pergunta ativismo 8', '8a - ativismo (certa)', '8b - ativismo', '8c - ativismo', '8d - ativismo', '8a - ativismo (certa)', 'Explicação')

    const ativQ9 = new Questao(9, 'texto introdutorio - ativismo 9', 'Pergunta ativismo 9', '9a - ativismo', '9b - ativismo', '9c - ativismo (certa)', '9d - ativismo', '9c - ativismo (certa)', 'Explicação')

    const ativQ10 = new Questao(10, 'texto introdutorio - ativismo 10', 'Pergunta ativismo 10', '10a - ativismo', '10b - ativismo', '10c - ativismo', '10d - ativismo (certa)', '10d - ativismo (certa)', 'Explicação')

    const ativQuestoes = [ativQ1, ativQ2, ativQ3, ativQ4, ativQ5, ativQ6, ativQ7, ativQ8, ativQ9, ativQ10]

    return ativQuestoes
}

export default questoesAtivismo