import "./style.css"
import CardGame from "../CardGame"

function CardFrontBack() {
    return /*html*/ `
    <article class = "card-front-back">
    <div class = "front">
    ${CardGame()}
    </div>
    <div class = "back">
    ${CardGame('Javascript')}
    </div>
    </article>
    `
}

export default CardFrontBack