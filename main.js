import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import BoardGame from './src/objects/BoardGame';
import PlayerName from './src/components/PlayerName';


const $root = document.querySelector("#root"); //boa prática: variavel referente a objeto da tela começa com $

$root.insertAdjacentHTML(
    'beforeend', 
    `
    ${PlayerName("Player 1")}
    ${PlayerName("Player 2")}
    ${BoardGame(8)}
    `
    );