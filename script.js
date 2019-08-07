var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randColor()
{
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}
//document.querySelector("input").setAttribute("value", "#ff0000");
//document.querySelectorAll("input")[1].setAttribute("value", "#ffff00");

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

body.style.background = 
	"linear-gradient(to right, " 
	+ "green" 
	+ ", " 
	+ "red" 
	+ ")";

var random = document.createElement("button");
random.appendChild(document.createTextNode("Randomize"));
body.appendChild(random);

	random.addEventListener("click", function(){
		body.style.background = 
		"linear-gradient(to right, " 
		+ randColor() 
		+ ", " 
		+ randColor() 
		+ ")";
	});
