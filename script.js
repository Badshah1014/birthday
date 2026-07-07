const stars=document.getElementById("stars");

for(let i=0;i<250;i++){

let star=document.createElement("div");

star.className="star";

let size=Math.random()*3+1;

star.style.width=size+"px";
star.style.height=size+"px";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=
(Math.random()*3+2)+"s";

stars.appendChild(star);

}

const btn=document.getElementById("startBtn");

btn.onclick=()=>{

document.body.style.transition="1.5s";

document.body.style.opacity="0";

setTimeout(()=>{

alert("🚧 Scene 2 Coming Next!");

},1500);

}
