const button = document.getElementById("theme-toggle");

if(button){

button.addEventListener("click",()=>{

document.body.classList.toggle("light");

});

}