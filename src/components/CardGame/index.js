import './style.css';

function CardGame(icon = 'hkcapa',alt='capa do Holow Knight') { 
    return /*html*/`
    <article class = "card-game">
        <img src="src/components/images/${icon}.png" alt="${alt}">
    </article>
    `
 }

 export default CardGame;