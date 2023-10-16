
function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i< reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
       
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else{
        reveals[i].classList.remove("active");
      }
    }
}
var active = false;
var yellow = document.getElementById("myYe").play();
const btn = document.querySelector("button");
const timeStamps = [3300,4200,5000,5900];
const sections = [1,2,3,4,5,6,7,8,9,10]

function playYellow(){
    if (active != true) {
      yellow.currentTime = 25;
      active = true;
      console.log("active");
      autoS(yellow);
    }
    else{
      yellow.pause();
      yellow.currentTime = 0;
      active =  false;
    }
}

function autoS(y) {
  if (y.currentTime == 33) {
    console.log("scroll now");
  }
}


window.addEventListener("scroll", reveal);
reveal();

