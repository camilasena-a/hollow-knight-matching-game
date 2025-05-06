import "./style.css"

function CardGame(icon = "", altIcon = "") {
    return /*html*/`
    <article class="card-game">
        ${icon ? `<img src="./src/components/images/${icon}.png" alt="${altIcon}">` : ""}
    </article>
    `
}

export default CardGame;