import "./style.css"
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./data";

function BoardGame(amountCards) {
    window.boardGame = {};
    
    // Inicializa o jogador atual e os pontos
    window.boardGame.currentPlayer = 1;
    window.boardGame.scores = { 1: 0, 2: 0 };
    window.boardGame.matchedPairs = 0;
    
    // Função para posicionar a seta sobre o player correto
    window.boardGame.positionArrow = (player) => {
        const $arrowDown = document.querySelector('.arrow-down');
        if (!$arrowDown) return;
        
        console.log(`Posicionando seta para o player ${player}`);
        
        // Abordagem simplificada para posicionar a seta
        if (player === 1) {
            // Posicionar sobre o Player 1
            $arrowDown.style.left = '6rem';
        } else {
            // Posicionar sobre o Player 2
            $arrowDown.style.left = 'calc(100% - 9rem)';
        }
    };
    
    // Função para alternar entre os jogadores
    window.boardGame.togglePlayer = () => {
        window.boardGame.currentPlayer = window.boardGame.currentPlayer === 1 ? 2 : 1;
        console.log(`Trocando para o jogador ${window.boardGame.currentPlayer}`);
        
        const $arrowDown = document.querySelector('.arrow-down');
        if ($arrowDown) {
            $arrowDown.setAttribute('data-currentPlayer', window.boardGame.currentPlayer);
            window.boardGame.positionArrow(window.boardGame.currentPlayer);
        }
    };
    
    // Inicializa a posição da seta após o carregamento da página
    setTimeout(() => {
        console.log("Inicializando posição da seta");
        window.boardGame.positionArrow(1);
    }, 300);
    
    // Função para incrementar a pontuação do jogador atual
    window.boardGame.addPoint = () => {
        const player = window.boardGame.currentPlayer;
        window.boardGame.scores[player]++;
        
        // Atualiza o placar na tela
        const $playerScore = document.querySelector(`.player-score[data-player="${player}"]`);
        if ($playerScore) {
            $playerScore.textContent = window.boardGame.scores[player];
        }
    };
    
    window.boardGame.handleClick = () => {
        const $boardGame = document.querySelector('.board-game');
        const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active:not(.-matched)');

        if($cardsActive.length == 2) {
            // Não permite clicar em outras cartas enquanto verifica o par
            $boardGame.classList.add('-checking');
            
            // Verifica se as cartas têm o mesmo ícone
            const firstCardIcon = $cardsActive[0].querySelector('.card.-back').getAttribute('data-icon');
            const secondCardIcon = $cardsActive[1].querySelector('.card.-back').getAttribute('data-icon');
            
            if (firstCardIcon === secondCardIcon) {
                // Se forem iguais, adiciona a classe -matched para mantê-las viradas
                $cardsActive.forEach(card => {
                    card.classList.add('-matched');
                });
                
                // Atualiza o contador de pares encontrados
                window.boardGame.matchedPairs++;
                
                // Adiciona ponto ao jogador atual
                window.boardGame.addPoint();
                
                // Permite clicar em outras cartas
                $boardGame.classList.remove('-checking');
            } else {
                // Se forem diferentes, vira para baixo após um tempo
                setTimeout(() => {     
                    $cardsActive.forEach((card) => {
                        card.classList.remove('-active');
                    });
                    
                    // Alterna para o próximo jogador
                    window.boardGame.togglePlayer();
                    
                    // Permite clicar em outras cartas novamente
                    $boardGame.classList.remove('-checking');
                }, 870);
            }
        }
    }
    
    // Função para embaralhar as cartas usando o algoritmo Fisher-Yates
    const shuffleCards = (cardsArray) => {
        const shuffledCards = [...cardsArray];
        for (let i = shuffledCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
        }
        return shuffledCards;
    }
    
    // Embaralha as cartas antes de criar o HTML
    const shuffledCards = shuffleCards(cards);
    const htmlCardsList = shuffledCards.map((card) => CardFrontBack(card.icon, card.altIcon));
    const $htmlCards = htmlCardsList.join('');

    return /*html*/`
    <section class="board-game" onClick="boardGame.handleClick()">
    ${$htmlCards}
    </section>
    `
}

export default BoardGame;