function moverandom(el) {
    el.style.position = "absolute";

    // Make it jump further by increasing the range
    el.style.top = Math.floor(Math.random() * 80 + 10) + "%";   // 10% to 90%
    el.style.left = Math.floor(Math.random() * 80 + 10) + "%";  // 10% to 90%
}

const moveRandom = document.getElementById("No_move");

moveRandom.addEventListener("mouseenter", function(e){
    moverandom(e.target);
});

// Mobile support
moveRandom.addEventListener("touchstart", function(e){
    e.preventDefault();
    moverandom(e.target);
});
