var ol = 0;
var isPlaying = false;
var circleInterval;
function circleAnimation(time) {
  ol++;
  document.getElementById("circle").style.left = ol + "px";
  circleInterval = requestAnimationFrame(circleAnimation);
}

function mouseClicked() {
  if (isPlaying) {
    isPlaying = false;
    document.getElementById("circle").style.backgroundColor = "dimgrey";
    document.getElementById("circle").style.borderRadius = "";
    cancelAnimationFrame(circleInterval);    
  } else {
    isPlaying = true;
    document.getElementById("circle").style.backgroundColor = "green";    
    document.getElementById("circle").style.borderRadius = "0";
    circleInterval = requestAnimationFrame(circleAnimation);
  }
}


document.getElementById("circle").addEventListener("click", mouseClicked);
document.getElementById("circle").style.backgroundColor = "dimgrey";

