import "./style.css"
import CardGame from "../CardGame"

function CardFrontBack() {
    return /*html*/ `
    <article class = "card-front-back -active">
    <div class = "card -front">
    ${CardGame()}
    </div>
    <div class = "card -back">
    ${CardGame('radiancia','imagem da radiancia')}
    </div>
    </article>
    `
}

export default CardFrontBack