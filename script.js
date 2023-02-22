var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("button");


//Set Gradient Color
function setGradient(){
    body.style.background = "Linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    h3.textContent = body.style.background + ";"
}

//generate random color
function randomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`;
}

//set random background 
function generateRandomColor(){
    color1 = randomColor();
    color2 = randomColor();

    body.style.background = "Linear-gradient(to right, " + color1 + ", " + color2 + ")";
    h3.textContent = body.style.background + ";"
}

//listen select color1
color1.addEventListener("input", setGradient)
//listen select color1
color2.addEventListener("input", setGradient);
//click on "random color"
random.addEventListener("click",generateRandomColor);
