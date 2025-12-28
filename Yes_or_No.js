function moverandom(el){
    el.style.position="absolute";
    el.style.top=Math.floor(Math.random()*70+5)+"%";
    el.style.left=Math.floor(Math.random()*70+5)+"%";
}

const moveRandom=document.getElementById("No_move")
moveRandom.addEventListener("mouseenter", function(e){
    moverandom(e.target);
});     