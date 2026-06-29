const body=document.body;

for(let i=0;i<20;i++){

const dot=document.createElement("div");

dot.classList.add("particle");

dot.style.left=Math.random()*100+"vw";

dot.style.animationDuration=
5+Math.random()*8+"s";

dot.style.animationDelay=
Math.random()*5+"s";

body.appendChild(dot);

}