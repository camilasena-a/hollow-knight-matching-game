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
    <div class="modal-overlay active" id="start-modal-overlay">
        <div class="start-modal">
            <h1 class="modal-title">HK Memory Game</h1>
            <p class="modal-description">Um jogo de memória com personagens de Hollow Knight</p>
            <button class="start-button">Iniciar Jogo</button>
        </div>
    </div>
    `
);

// Adiciona o modal de fim de jogo (inicialmente oculto)
$root.insertAdjacentHTML(
    'beforeend',
    `
    <div class="modal-overlay" id="end-game-modal">
        <div class="end-modal">
            <h1 class="modal-title">Fim de Jogo!</h1>
            <p class="modal-description" id="winner-message">Jogador X venceu!</p>
            <button class="restart-button">Jogar Novamente</button>
        </div>
    </div>
    `
);

// Adiciona o conteúdo do jogo (inicialmente oculto)
$root.insertAdjacentHTML(
    'beforeend', 
    `
    <div class="game-container hidden" id="game-container">
        ${ScoreBoard()}
        ${BoardGame()}
    </div>
    `
);

// Função para iniciar o jogo quando o botão for clicado
document.querySelector('.start-button').addEventListener('click', () => {
    document.querySelector('#start-modal-overlay').classList.remove('active');
    document.querySelector('#game-container').classList.remove('hidden');
});

// Função para reiniciar o jogo quando o botão for clicado
document.querySelector('.restart-button').addEventListener('click', () => {
    // Remove o modal de fim de jogo
    document.querySelector('#end-game-modal').classList.remove('active');
    
    // Reinicia o jogo sem mostrar o modal inicial
    resetGame();
});

// Função para reiniciar o jogo
function resetGame() {
    // Oculta o jogo durante a reinicialização
    const gameContainer = document.querySelector('#game-container');
    gameContainer.classList.add('hidden');
    
    // Remove o conteúdo atual do jogo
    gameContainer.innerHTML = '';
    
    // Recria o conteúdo do jogo
    gameContainer.innerHTML = `${ScoreBoard()}${BoardGame()}`;
    
    // Mostra o jogo novamente
    setTimeout(() => {
        gameContainer.classList.remove('hidden');
    }, 100);
}

// Função para mostrar o modal de fim de jogo
window.showEndGameModal = (winner) => {
    const winnerMessage = document.querySelector('#winner-message');
    winnerMessage.textContent = `Jogador ${winner} venceu!`;
    document.querySelector('#end-game-modal').classList.add('active');
};

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