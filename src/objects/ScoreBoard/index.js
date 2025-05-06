import "./style.css"
import PlayerName from '../../components/PlayerName';
import VsPlayer from "../../components/VsPlayer";
import PlayerScore from "../../components/PlayerScore";
import ArrowDown from "../../components/ArrowDown";

function ScoreBoard() {
    return /*html*/ `
    <header class="score-board">
        <div class="player-container">
            ${PlayerName("Player 1")}
            ${PlayerScore(1)}
        </div>
        
        ${VsPlayer()}
        
        <div class="player-container">
            ${PlayerName("Player 2")}
            ${PlayerScore(2)}
        </div>
        
        ${ArrowDown(1)}
    </header>
    `
}

export default ScoreBoard;