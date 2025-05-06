(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function d(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(r){if(r.ep)return;r.ep=!0;const e=d(r);fetch(r.href,e)}})();function g(a="",n=""){return`
    <article class="card-game">
        ${a?`<img src="./src/components/images/${a}.png" alt="${n}">`:""}
    </article>
    `}function v(a,n){return window.cardFrontBack={},window.cardFrontBack.handleClick=d=>{const r=d.target.closest(".card-front-back"),e=document.querySelector(".board-game");!r.classList.contains("-matched")&&!e.classList.contains("-checking")&&r.classList.toggle("-active")},`
    <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
    <div class="card -front">
    ${g()}
    </div>
    <div class="card -back" data-icon="${a}">
    ${g(a,n)}
    </div>
    </article>
    `}const f=[{icon:"hornet",altIcon:"imagem da Hornet"},{icon:"hornet",altIcon:"imagem da Hornet"},{icon:"radiancia",altIcon:"imagem da radiancia"},{icon:"radiancia",altIcon:"imagem da radiancia"},{icon:"knight",altIcon:"imagem do hollow"},{icon:"knight",altIcon:"imagem do hollow"},{icon:"grimm",altIcon:"imagem do grimm"},{icon:"grimm",altIcon:"imagem do grimm"},{icon:"cornifer",altIcon:"imagem do cornifer"},{icon:"zote",altIcon:"imagem do zote"},{icon:"zote",altIcon:"imagem do zote"},{icon:"lordeslouvadeus",altIcon:"imagem do lordeslouvadeus"},{icon:"lordeslouvadeus",altIcon:"imagem do lordeslouvadeus"},{icon:"defensor",altIcon:"imagem do defensor"},{icon:"defensor",altIcon:"imagem do defensor"},{icon:"cornifer",altIcon:"imagem do cornifer"},{icon:"reiPalido",altIcon:"imagem do rei palido"},{icon:"reiPalido",altIcon:"imagem do rei palido"}];function p(a){return window.boardGame={},window.boardGame.currentPlayer=1,window.boardGame.scores={1:0,2:0},window.boardGame.matchedPairs=0,window.boardGame.totalPairs=f.length/2,window.boardGame.positionArrow=e=>{const o=document.querySelector(".arrow-down");if(!o)return;const t=document.querySelector(".player-container:first-child"),i=document.querySelector(".player-container:last-of-type");if(console.log(`Posicionando seta para o player ${e}`),e===1&&t){const c=t.getBoundingClientRect(),l=c.left+c.width/2,m=document.querySelector(".score-board").getBoundingClientRect(),u=l-m.left-o.offsetWidth/2;o.style.left=`${u}px`}else if(i){const c=i.getBoundingClientRect(),l=c.left+c.width/2,m=document.querySelector(".score-board").getBoundingClientRect(),u=l-m.left-o.offsetWidth/2;o.style.left=`${u}px`}},window.boardGame.checkEndGame=()=>{if(window.boardGame.matchedPairs>=window.boardGame.totalPairs){const e=window.boardGame.scores[1],o=window.boardGame.scores[2];let t;e>o?t=1:o>e?t=2:t="Empate",setTimeout(()=>{t==="Empate"?window.showEndGameModal("Empate! Ambos jogadores"):window.showEndGameModal(t)},500)}},window.boardGame.togglePlayer=()=>{window.boardGame.currentPlayer=window.boardGame.currentPlayer===1?2:1,console.log(`Trocando para o jogador ${window.boardGame.currentPlayer}`);const e=document.querySelector(".arrow-down");e&&(e.setAttribute("data-currentPlayer",window.boardGame.currentPlayer),window.boardGame.positionArrow(window.boardGame.currentPlayer))},setTimeout(()=>{console.log("Inicializando posição da seta"),window.boardGame.positionArrow(1),window.addEventListener("resize",()=>{window.boardGame.positionArrow(window.boardGame.currentPlayer)})},300),window.boardGame.addPoint=()=>{const e=window.boardGame.currentPlayer;window.boardGame.scores[e]++;const o=document.querySelector(`.player-score[data-player="${e}"]`);o&&(o.textContent=window.boardGame.scores[e])},window.boardGame.handleClick=()=>{const e=document.querySelector(".board-game"),o=e.querySelectorAll(".card-front-back.-active:not(.-matched)");if(o.length==2){e.classList.add("-checking");const t=o[0].querySelector(".card.-back").getAttribute("data-icon"),i=o[1].querySelector(".card.-back").getAttribute("data-icon");t===i?(o.forEach(c=>{c.classList.add("-matched")}),window.boardGame.matchedPairs++,window.boardGame.addPoint(),window.boardGame.checkEndGame(),e.classList.remove("-checking")):setTimeout(()=>{o.forEach(c=>{c.classList.remove("-active")}),window.boardGame.togglePlayer(),e.classList.remove("-checking")},870)}},`
    <section class="board-game" onClick="boardGame.handleClick()">
    ${(e=>{const o=[...e];for(let t=o.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[o[t],o[i]]=[o[i],o[t]]}return o})(f).map(e=>v(e.icon,e.altIcon)).join("")}
    </section>
    `}function y(a){return`
    <p class = "player-name">${a}</p>
    `}function G(a="vs"){return`
    <span class= "vs-player">
    ${a}
    </span>
    `}function b(a){return`
    <span class="player-score" data-player="${a}">0</span>
    `}function $(a=1){return` 
        <img class="arrow-down" 
        data-currentPlayer="${a}"
        src="./src/components/images/IconArrowDown.png"
        alt="Ícone de seta para baixo" >
    `}function h(){return`
    <header class="score-board">
        <div class="player-container">
            ${y("Player 1")}
            ${b(1)}
        </div>
        
        ${G()}
        
        <div class="player-container">
            ${y("Player 2")}
            ${b(2)}
        </div>
        
        ${$(1)}
    </header>
    `}const w=document.querySelector("#root");w.insertAdjacentHTML("beforeend",`
    <div class="modal-overlay active" id="start-modal-overlay">
        <div class="start-modal">
            <h1 class="modal-title">HK Memory Game</h1>
            <p class="modal-description">Um jogo de memória com personagens de Hollow Knight</p>
            <button class="start-button">Iniciar Jogo</button>
        </div>
    </div>
    `);w.insertAdjacentHTML("beforeend",`
    <div class="modal-overlay" id="end-game-modal">
        <div class="end-modal">
            <h1 class="modal-title">Fim de Jogo!</h1>
            <p class="modal-description" id="winner-message">Jogador X venceu!</p>
            <button class="restart-button">Jogar Novamente</button>
        </div>
    </div>
    `);w.insertAdjacentHTML("beforeend",`
    <div class="game-container hidden" id="game-container">
        ${h()}
        ${p()}
    </div>
    
    <footer class="footer">
        <a href="https://github.com/camilasena-a" target="_blank">
            <p>Desenvolvido por<br>Camila Sena</p>
        </a>
    </footer>
    `);document.querySelector(".start-button").addEventListener("click",()=>{document.querySelector("#start-modal-overlay").classList.remove("active"),document.querySelector("#game-container").classList.remove("hidden")});document.querySelector(".restart-button").addEventListener("click",()=>{document.querySelector("#end-game-modal").classList.remove("active"),P()});function P(){const a=document.querySelector("#game-container");a.classList.add("hidden"),a.innerHTML="",a.innerHTML=`
        ${h()}
        ${p()}
    `,setTimeout(()=>{a.classList.remove("hidden")},100)}window.showEndGameModal=a=>{const n=document.querySelector("#winner-message");n.textContent=`Jogador ${a} venceu!`,document.querySelector("#end-game-modal").classList.add("active")};window.testTogglePlayer=()=>window.boardGame&&typeof window.boardGame.togglePlayer=="function"?(window.boardGame.togglePlayer(),console.log(`Jogador atual: ${window.boardGame.currentPlayer}`),`Alternado para o jogador ${window.boardGame.currentPlayer}`):(console.error("Função togglePlayer não disponível"),"Erro: Função togglePlayer não disponível");
