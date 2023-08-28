let timer = 60;
let score = 0;
let hitrn = 0;

function inceeaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").innerHTML = hitrn;
}

function makeBubble() {
    let clutter = "";
    for (let i = 1; i < 169; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer() {
    let timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
        }
        else {
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
        document.querySelector("#timerval").textContent = timer;
    }, 1000)

}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    let clickedNumber = Number(dets.target.textContent);
    if (hitrn === clickedNumber) {
        inceeaseScore();
        makeBubble();
        getNewhit();
    }
});


getNewhit();
runTimer();
makeBubble();

