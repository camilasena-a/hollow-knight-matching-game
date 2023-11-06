import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'
import CardGame from "./src/components/CardGame";
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector("#root") //boa prática: variavel referente a objeto da tela começa com $
const $htmlBoardGame = BoardGame(8)

$root.insertAdjacentHTML('beforeend', $htmlBoardGame);