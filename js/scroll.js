// Create Scroll Progress Bar

const progress = document.createElement("div");

progress.id = "progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progressHeight =
        (window.scrollY/totalHeight)*100;

    progress.style.width =
        progressHeight + "%";

});