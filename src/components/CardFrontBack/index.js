import "./style.css"
import CardGame from "../CardGame"


function CardFrontBack(icon,altIcon) {
    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = (event) => {
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.card-front-back');
        const $boardGame = document.querySelector('.board-game');
        
        // Não permite virar cartas se já estiver combinada ou se o tabuleiro estiver verificando
        if (!$cardFrontBack.classList.contains('-matched') && 
            !$boardGame.classList.contains('-checking')) {
            $cardFrontBack.classList.toggle('-active');
        }
    }    
    return /*html*/ `
    <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
    <div class="card -front">
    ${CardGame()}
    </div>
    <div class="card -back" data-icon="${icon}">
    ${CardGame(icon,altIcon)}
    </div>
    </article>
    `
}

export default CardFrontBack