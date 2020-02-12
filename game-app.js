const game = document.getElementById("game");

for (let i = 0; i < 11; i++) {
    if (i%2==0) {
        game.innerHTML += `
            <div class="row h-row">
                <div class="dot"></div>
                <div class="h-line" id="h${i}0"></div>
                <div class="dot"></div>
                <div class="h-line" id="h${i}1"></div>
                <div class="dot"></div>
                <div class="h-line" id="h${i}2"></div>
                <div class="dot"></div>
                <div class="h-line" id="h${i}3"></div>
                <div class="dot"></div>
                <div class="h-line" id="h${i}4"></div>
                <div class="dot"></div>
            </div>
        `

    } else {
        game.innerHTML += `
            <div class="row v-row">
                <div class="v-line" id="v${i}0"></div>
                <div class="box"></div>
                <div class="v-line" id="v${i}1"></div>
                <div class="box"></div>
                <div class="v-line" id="v${i}2"></div>
                <div class="box"></div>
                <div class="v-line" id="v${i}3"></div>
                <div class="box"></div>
                <div class="v-line" id="v${i}4"></div>
                <div class="box"></div>
                <div class="v-line" id="v${i}5"></div>
            </div>
        `
    }
}