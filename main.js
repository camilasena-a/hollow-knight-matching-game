import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import './src/styles/containers/game-container.css';
import './src/styles/containers/modal.css';
import BoardGame from './src/objects/BoardGame';
import ScoreBoard from './src/objects/ScoreBoard';


const $root = document.querySelector("#root"); //boa prática: variavel referente a objeto da tela começa com $

// Adiciona o modal inicial
$root.insertAdjacentHTML(
    'beforeend',
    `
    <div class="modal-overlay active">
        <div class="start-modal">
            <h1 class="modal-title">HK Memory Game</h1>
            <p class="modal-description">Um jogo de memória com personagens de Hollow Knight</p>
            <button class="start-button">Iniciar Jogo</button>
        </div>
    </div>
    `
);

// Adiciona o conteúdo do jogo (inicialmente oculto)
$root.insertAdjacentHTML(
    'beforeend', 
    `
    <div class="game-container hidden">
        ${ScoreBoard()}
        ${BoardGame()}
    </div>
    `
);

// Função para iniciar o jogo quando o botão for clicado
document.querySelector('.start-button').addEventListener('click', () => {
    document.querySelector('.modal-overlay').classList.remove('active');
    document.querySelector('.game-container').classList.remove('hidden');
});

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