function learnMore(service) {
  alert("Learn more about " + service);
}

var i = 0;
var txt = "Cnidarion - AI Agents for Software Development and Testing";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function () {
  typeWriter();
  // div.style.height = img.offsetHeight + "px";
};
