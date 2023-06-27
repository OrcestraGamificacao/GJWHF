import { Questao } from "../modelQuestao";

// Questoes de política
function questoesPolitica(){
    const polQ1 = new Questao(1, 'texto introdutorio - política 1', 'Pergunta política 1', '1a - política', '1b - política', '1c - política', '1d - política (certa)', '1d - política (certa)', 'Explicação')

    const polQ2 = new Questao(2, 'texto introdutorio - política 2', 'Pergunta política 2', '2a - política', '2b - política (certa)', '2c - política', '2d - política', '2b - política (certa)', 'Explicação')

    const polQ3 = new Questao(3, 'texto introdutorio - política 3', 'Pergunta política 3', '3a - política (certa)', '3b - política', '3c - política', '3d - política', '3a - política (certa)', 'Explicação')

    const polQ4 = new Questao(4, 'texto introdutorio - política 4', 'Pergunta política 4', '4a - política', '4b - política', '4c - política (certa)', '4d - política', '4c - política (certa)', 'Explicação')

    const polQ5 = new Questao(5, 'texto introdutorio - política 5', 'Pergunta política 5', '5a - política', '5b - política', '5c - política', '5d - política (certa)', '5d - política (certa)', 'Explicação')

    const polQ6 = new Questao(6, 'texto introdutorio - política 6', 'Pergunta política 6', '6a - política', '6b - política', '6c - política', '6d - política (certa)', '6d - política (certa)', 'Explicação')

    const polQ7 = new Questao(7, 'texto introdutorio - política 7', 'Pergunta política 7', '7a - política', '7b - política (certa)', '7c - política', '7d - política', '7b - política (certa)', 'Explicação')

    const polQ8 = new Questao(8, 'texto introdutorio - política 8', 'Pergunta política 8', '8a - política (certa)', '8b - política', '8c - política', '8d - política', '8a - política (certa)', 'Explicação')

    const polQ9 = new Questao(9, 'texto introdutorio - política 9', 'Pergunta política 9', '9a - política', '9b - política', '9c - política (certa)', '9d - política', '9c - política (certa)', 'Explicação')

    const polQ10 = new Questao(10, 'texto introdutorio - política 10', 'Pergunta política 10', '10a - política', '10b - política', '10c - política', '10d - política (certa)', '10d - política (certa)', 'Explicação')

    const polQuestoes = [polQ1, polQ2, polQ3, polQ4, polQ5, polQ6, polQ7, polQ8, polQ9, polQ10]

    return polQuestoes
}

export default questoesPolitica