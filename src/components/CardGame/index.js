import './style.css';

function CardGame(icon = 'hkcapa.png',alt='capa do Holow Knight') { 
    return /*html*/`
    <article class = "card-game">
        <img src="src/components/images/${icon}" alt="${alt}">
    </article>
    `
 }

 export default CardGame;