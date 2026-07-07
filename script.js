const stars=document.getElementById("stars");

for(let i=0;i<200;i++){

let s=document.createElement("div");

s.style.position="absolute";
s.style.width="2px";
s.style.height="2px";
s.style.background="white";
s.style.borderRadius="50%";

s.style.left=Math.random()*100+"vw";
s.style.top=Math.random()*100+"vh";

s.animate([
{opacity:.2},
{opacity:1},
{opacity:.2}
],{
duration:2000+Math.random()*3000,
iterations:Infinity
});

stars.appendChild(s);

}

const story=[
"Hello... 🌸",
"I've been searching for you.",
"Today is someone's very special day.",
"Will you help me deliver a birthday wish? ✨"
];

let index=0;

const text=document.getElementById("text");

document.getElementById("startBtn").onclick=()=>{

document.getElementById("landing").classList.add("hidden");

document.getElementById("story").classList.remove("hidden");

text.innerHTML=story[index];

}

document.getElementById("nextBtn").onclick=()=>{

index++;

if(index<story.length){

text.innerHTML=story[index];

}else{

alert("⭐ Next: The Star Collection Mini-Game!");

}

}
