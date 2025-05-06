import "./style.css"

function PlayerScore(playerNumber) {
    return /*html*/ `
    <span class="player-score" data-player="${playerNumber}">0</span>
    `
}

export default PlayerScore;