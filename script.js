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

        }

    },35);

}

function nextDialogue(){

    current++;

    if(current<lines.length){

        typeText(lines[current]);

    }

    else{

        alert("⭐ Mini Game Coming!");

    }

} 

typeText(lines[0]);
