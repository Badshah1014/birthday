const stars=document.getElementById("stars");

for(let i=0;i<250;i++){

const s=document.createElement("div");

s.className="star";

let size=Math.random()*3+1;

s.style.width=size+"px";

s.style.height=size+"px";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.animationDuration=(2+Math.random()*4)+"s";

stars.appendChild(s);

}

function nextScreen(id){

    const current=document.querySelector(".active");

    current.style.opacity="0";

    current.style.transition="opacity 1s";

    setTimeout(()=>{

        current.classList.remove("active");

        current.style.opacity="1";

        const next=document.getElementById(id);

        next.classList.add("active");

    },1000);

}

"Hello... 🌸",

"I've been looking for you.",

"Today is someone's very special day.",

"Will you help me deliver a birthday wish? ✨"

];

let current=0;

const dialogue=document.getElementById("dialogue");

function typeText(text){

    dialogue.innerHTML="";

    let i=0;

    let timer=setInterval(()=>{

        dialogue.innerHTML+=text.charAt(i);

        i++;

        if(i>=text.length){

           clearInterval(timer);

setTimeout(()=>{

nextScreen("ending");

},3000);

        }

    },35);

}

function nextDialogue(){

    current++;

    if(current<lines.length){

        typeText(lines[current]);

    }

    else{

       nextScreen("game");

startGame();

    }

} 

typeText(lines[0]);

let basket=document.getElementById("basket");

let game=document.getElementById("gameArea");

let score=0;

let basketX=300;

document.addEventListener("keydown",e=>{

if(e.key==="ArrowLeft") basketX-=25;

if(e.key==="ArrowRight") basketX+=25;

basketX=Math.max(0,Math.min(620,basketX));

basket.style.left=basketX+"px";

});

function startGame(){

score=0;

document.getElementById("score").innerHTML="Stars: 0 / 15";

spawnStar();

}

function spawnStar(){

let star=document.createElement("div");

star.className="starFall";

star.style.left=Math.random()*660+"px";

star.style.top="-20px";

game.appendChild(star);

let y=-20;

let fall=setInterval(()=>{

y+=4;

star.style.top=y+"px";

let sx=parseInt(star.style.left);

if(

y>460 &&

sx>basketX-20 &&

sx<basketX+80

){

clearInterval(fall);

star.remove();

score++;

document.getElementById("score").innerHTML=

"Stars: "+score+" / 15";

if(score<15){

spawnStar();

}else{

setTimeout(()=>{

nextScreen("gift");

},500);

}

}

if(y>520){

clearInterval(fall);

star.remove();

spawnStar();

}

},20);

}

let clicks=0;

const gift=document.getElementById("giftBox");

const giftMessage=document.getElementById("giftMessage");

gift.onclick=()=>{

clicks++;

gift.style.transform="scale(.9)";

setTimeout(()=>{

gift.style.transform="scale(1.05)";

},100);

if(clicks==1){

giftMessage.innerHTML="✨ Something is happening...";

}

if(clicks==2){

giftMessage.innerHTML="🌸 Almost open...";

}

if(clicks>=3){

gift.innerHTML="💖";

gift.style.fontSize="150px";

giftMessage.innerHTML=

"Congratulations! A secret letter has appeared.";

setTimeout(()=>{

nextScreen("letter");

setTimeout(showLetter,500);

},1800);

}

}
const birthdayLetter=

`Happy Birthday 🌸

I wanted to make you something
different this year.

Instead of only wishing you,
I wanted to create a little adventure.

I hope this made you smile.

Have an amazing birthday
and an even more amazing year ahead.`;

function showLetter(){

let i=0;

const area=document.getElementById("letterText");

area.innerHTML="";

const timer=setInterval(()=>{

area.innerHTML+=birthdayLetter.charAt(i);

i++;

if(i>=birthdayLetter.length){

clearInterval(timer);

}

},35);

}
function firework(x,y){

for(let i=0;i<30;i++){

const p=document.createElement("div");

p.className="firework";

p.style.left=x+"px";

p.style.top=y+"px";

const angle=Math.random()*Math.PI*2;

p.style.setProperty("--x",Math.cos(angle));

p.style.setProperty("--y",Math.sin(angle));

document.body.appendChild(p);

setTimeout(()=>p.remove(),1000);

}

}
setInterval(()=>{

const ending=document.getElementById("ending");

if(ending.classList.contains("active")){

firework(

Math.random()*window.innerWidth,

Math.random()*window.innerHeight/2

);

}

},700);
