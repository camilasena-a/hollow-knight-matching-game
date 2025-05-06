import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import BoardGame from './src/objects/BoardGame';
import ScoreBoard from './src/objects/ScoreBoard';


const $root = document.querySelector("#root"); //boa prática: variavel referente a objeto da tela começa com $

$root.insertAdjacentHTML(
    'beforeend', 
    `
    ${ScoreBoard()}
    ${BoardGame()}
    `
    );

// Função de teste para alternar jogador via console
window.testTogglePlayer = () => {
    if (window.boardGame && typeof window.boardGame.togglePlayer === 'function') {
        window.boardGame.togglePlayer();
        console.log(`Jogador atual: ${window.boardGame.currentPlayer}`);
        return `Alternado para o jogador ${window.boardGame.currentPlayer}`;
    } else {
        console.error('Função togglePlayer não disponível');
        return 'Erro: Função togglePlayer não disponível';
    }
};