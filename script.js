var css = document.querySelector("h3");

// Need to define className in Color picker1 <input> in HTML
var color1 = document.querySelector(".color1");

// Need to define className in Color picker2 <input> in HTML
var color2 = document.querySelector(".color2");

//Background is in <body>
var body = document.getElementById("gradient");

var h3 = document.querySelector("h3");
// h3.textContent = ;

//1. Write code so that the color inputs match the background generated on the first page load
var defaultBackground = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

body.style.background = defaultBackground;

//2. Display the initial CSS linear gradient property on page load
h3.textContent = body.style.background + ";";

//3. BONUS: Add a random button which generates 2 random numbers for the color inputs
var button = document.getElementById("button");
// button.addEventListener("click", )

function randomColors() {
	var randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
	console.log(randomColor1);
	console.log(randomColor2);
	var randomBackground = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
	console.log(randomBackground);
	body.style.background = randomBackground;
	h3.textContent = body.style.background;
}

button.addEventListener("click", randomColors)


	
// console.log(pageLoad);

// function showGradientOnLoad() {
	
// 	pageLoad.textContent = initialGradient;

// }


//Try to define manually the <body> background color
// body.style.background = "red";

// Checking that var css, color1, color2 are working
// console.log(css);
// console.log(color1);
// console.log(color2);

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	// console.log(css);

	//Adding textContent to DOM
	//It's much easier to handle DOM in React
	css.textContent = body.style.background + ";";
}





//Want function to be called everytime an input exists
color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);