import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import BoardGame from './src/objects/BoardGame';
import ScoreBoard from './src/objects/ScoreBoard';


const $root = document.querySelector("#root"); //boa prática: variavel referente a objeto da tela começa com $

$root.insertAdjacentHTML(
    'beforeend', 
    `
    ${ScoreBoard()}
    ${BoardGame(6)}
    `
    );