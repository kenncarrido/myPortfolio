window.addEventListener("scroll",()=>{

const nav=document.querySelector("#navbar");

if(window.scrollY>100){

nav.classList.add("glass");

}else{

nav.classList.remove("glass");

}

});