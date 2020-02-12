const game = document.getElementById("game");
let player = 0;

buildBoard();
initializeBoard();

function buildBoard() {
    game.innerHTML = '';
    let boxRow = 0;
    let dotRow = 0;
    for (let i = 0; i < 11; i++) {
        if (i%2==0) {
            game.innerHTML += `
                <div class="row h-row">
                    <div class="dot"></div>
                    <div class="line h-line unmarked" id="h${dotRow}0"></div>
                    <div class="dot"></div>
                    <div class="line h-line unmarked" id="h${dotRow}1"></div>
                    <div class="dot"></div>
                    <div class="line h-line unmarked" id="h${dotRow}2"></div>
                    <div class="dot"></div>
                    <div class="line h-line unmarked" id="h${dotRow}3"></div>
                    <div class="dot"></div>
                    <div class="line h-line unmarked" id="h${dotRow}4"></div>
                    <div class="dot"></div>
                </div>
            `
            dotRow++;
        } else {
            game.innerHTML += `
                <div class="row v-row">
                    <div class="line v-line unmarked" id="v${boxRow}0"></div>
                    <div class="box" id="b${boxRow}0"></div>
                    <div class="line v-line unmarked" id="v${boxRow}1"></div>
                    <div class="box" id="b${boxRow}1"></div>
                    <div class="line v-line unmarked" id="v${boxRow}2"></div>
                    <div class="box" id="b${boxRow}2"></div>
                    <div class="line v-line unmarked" id="v${boxRow}3"></div>
                    <div class="box" id="b${boxRow}3"></div>
                    <div class="line v-line unmarked" id="v${boxRow}4"></div>
                    <div class="box" id="b${boxRow}4"></div>
                    <div class="line v-line unmarked" id="v${boxRow}5"></div>
                </div>
            `
            boxRow++;
        }
    }
}

function initializeBoard(){
    player = 0;
    game.addEventListener('click', (event) => {
        if (event.target.id !== '') {
            let el = document.getElementById(event.target.id);
            if (el.classList.contains('unmarked')) {
                el.classList.remove('unmarked');
                if (player % 2 == 0) {
                    el.classList.add('marked-p1');
                    checkForComplete()
                    player++;
                } else {
                    el.classList.add('marked-p2');
                    checkForComplete()
                    player++;
                }
            }
        }
    })
}

function checkForComplete(){
    for(let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            let box = document.getElementById(`b${row}${col}`);

            if (box.classList.length === 1) {
                const top = document.getElementById(`h${row}${col}`);
                const right = document.getElementById(`v${row}${col+1}`);
                const bottom = document.getElementById(`h${row+1}${col}`);
                const left = document.getElementById(`v${row}${col}`);
    
                if (
                    !top.classList.contains('unmarked') && 
                    !right.classList.contains('unmarked') && 
                    !bottom.classList.contains('unmarked') && 
                    !left.classList.contains('unmarked')
                ) {
                    box.classList.add('complete-p1')
                }
            }
        }
    }
}