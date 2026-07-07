// ===============================
// PROJECT MOONLIGHT - SCRIPT 3A
// ===============================

// ---------- BACKGROUND STARS ----------

const stars = document.getElementById("stars");

for (let i = 0; i < 250; i++) {

    const s = document.createElement("div");

    s.className = "star";

    const size = Math.random() * 3 + 1;

    s.style.width = size + "px";
    s.style.height = size + "px";

    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";

    s.style.animationDuration = (2 + Math.random() * 4) + "s";

    stars.appendChild(s);

}

// ---------- SCREEN SWITCHING ----------

function nextScreen(id){

    const current = document.querySelector(".screen.active");

    current.classList.remove("active");

    document.getElementById(id).classList.add("active");

}

// ---------- STORY ----------

const lines = [

"The stars whispered your name tonight... 🌸",

"So I followed their light.",

"Until I found you.",

"Today is someone's very special day.",

"Will you help me collect 15 birthday stars? ✨"

];

let currentLine = 0;

const dialogue = document.getElementById("dialogue");

function typeText(text){

    dialogue.innerHTML="";

    let i=0;

    const timer=setInterval(()=>{

        dialogue.innerHTML+=text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(timer);

        }

    },35);

}

typeText(lines[0]);

document.getElementById("startBtn").onclick=()=>{

    nextScreen("story");

    currentLine=0;

    typeText(lines[currentLine]);

}

document.getElementById("nextBtn").onclick=()=>{

    currentLine++;

    if(currentLine<lines.length){

        typeText(lines[currentLine]);

    }

    else{

        nextScreen("game");

        startGame();

    }

}

// ---------- GAME ----------

const basket=document.getElementById("basket");

const game=document.getElementById("gameArea");

const scoreText=document.getElementById("score");

let basketX=300;

let score=0;

document.addEventListener("keydown",(e)=>{

    if(!document.getElementById("game").classList.contains("active")) return;

    if(e.key==="ArrowLeft") basketX-=25;

    if(e.key==="ArrowRight") basketX+=25;

    basketX=Math.max(0,Math.min(game.clientWidth-90,basketX));

    basket.style.left=basketX+"px";

});

function startGame(){

    basketX=(game.clientWidth-90)/2;

    basket.style.left=basketX+"px";

    score=0;

    scoreText.innerHTML="Stars : 0 / 15";

    spawnStar();

}

function spawnStar(){

    const star=document.createElement("div");

    star.className="starFall";

    star.style.left=Math.random()*(game.clientWidth-30)+"px";

    star.style.top="-30px";

    game.appendChild(star);

    let y=-30;

    const fall=setInterval(()=>{

        y+=4;

        star.style.top=y+"px";

        const x=parseFloat(star.style.left);

        if(

            y>game.clientHeight-45 &&

            x>basketX-20 &&

            x<basketX+90

        ){

            clearInterval(fall);

            star.remove();

            score++;

            scoreText.innerHTML="Stars : "+score+" / 15";

            if(score>=15){

                setTimeout(()=>{

                    nextScreen("gift");

                },600);

            }else{

                spawnStar();

            }

        }

        if(y>game.clientHeight){

            clearInterval(fall);

            star.remove();

            spawnStar();

        }

    },20);

}

// ===============================
// PROJECT MOONLIGHT - SCRIPT 3B
// ===============================

// ---------- GIFT ----------

let giftClicks = 0;

const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

giftBox.onclick = () => {

    giftClicks++;

    giftBox.style.transform = "scale(.9)";

    setTimeout(() => {
        giftBox.style.transform = "scale(1)";
    }, 120);

    if (giftClicks === 1) {
        giftMessage.innerHTML = "✨ Something is happening...";
    }

    if (giftClicks === 2) {
        giftMessage.innerHTML = "🌸 Almost there...";
    }

    if (giftClicks >= 3) {

        giftBox.innerHTML = "💌";

        giftBox.style.fontSize = "140px";

        giftMessage.innerHTML = "A letter appeared...";

        setTimeout(() => {

            nextScreen("letter");

            showLetter();

        }, 1500);

    }

};

// ---------- LETTER ----------

const birthdayLetter = `Happy Birthday 🌸

I wanted to make you something a little different this year.

Instead of sending only a message,
I wanted to build a tiny adventure just for you.

I hope this made you smile.

May this year bring you happiness,
good health,
lots of laughter,
and beautiful memories.

Happy Birthday! ❤️`;

function showLetter() {

    const area = document.getElementById("letterText");

    area.innerHTML = "";

    let i = 0;

    const timer = setInterval(() => {

        area.innerHTML += birthdayLetter.charAt(i);

        i++;

        if (i >= birthdayLetter.length) {

            clearInterval(timer);

            setTimeout(() => {

                nextScreen("ending");

            }, 2500);

        }

    }, 30);

}

// ---------- FIREWORKS ----------

function firework(x, y) {

    for (let i = 0; i < 30; i++) {

        const p = document.createElement("div");

        p.className = "firework";

        p.style.left = x + "px";
        p.style.top = y + "px";

        const angle = Math.random() * Math.PI * 2;

        p.style.setProperty("--x", Math.cos(angle));
        p.style.setProperty("--y", Math.sin(angle));

        document.body.appendChild(p);

        setTimeout(() => {

            p.remove();

        }, 1000);

    }

}

setInterval(() => {

    const ending = document.getElementById("ending");

    if (ending.classList.contains("active")) {

        firework(

            Math.random() * window.innerWidth,

            Math.random() * (window.innerHeight / 2)

        );

    }

}, 700);

// ---------- REPLAY ----------

document.getElementById("restartBtn").onclick = () => {

    location.reload();

};
