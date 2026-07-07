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

document.querySelector(".active").classList.remove("active");

document.getElementById(id).classList.add("active");

}

const lines=[

"Hello... 🌸",

"I've been looking for you.",

"Today is someone's very special day.",

"Will you help me deliver a birthday wish? ✨"

];

let current=0;

function nextDialogue(){

current++;

if(current<lines.length){

document.getElementById("dialogue").innerHTML=lines[current];

}

else{

alert("Next Chapter: ⭐ Collect the Stars");

}

}
