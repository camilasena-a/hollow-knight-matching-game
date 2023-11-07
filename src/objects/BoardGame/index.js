import "./style.css"
import CardFrontBack from "../../components/CardFrontBack";

function BoardGame(amountCards) {
    const cards = [{
        icon: "hollowKnight",
        altIcon: "imagem da Hornert"
    },
    {
        icon: "hollowKnight",
        altIcon: "imagem da Hornert"
    },
    {
        icon: "radiancia",
        altIcon: "imagem da radiancia"
    },
    {
        icon: "radiancia",
        altIcon: "imagem da radiancia"
    },
    {
        icon: "reiPalido",
        altIcon: "imagem da radiancia"
    },    
    {
        icon: "reiPalido",
        altIcon: "imagem da radiancia"
    }];
    
    const htmlCardsList = cards.map((card) => CardFrontBack(card.icon,card.altIcon));
    const $htmlCards = htmlCardsList.join('');

    return /*html*/`
    <section class="board-game">
    ${$htmlCards}
    </section>
    `
}

export default BoardGame;