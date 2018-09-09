
/**********************************
 *                                *
 *      CREATED BY RAKIB          *
 *                                *
 *//****************************** */


var clickedColor;
var pickedColor;
var o = Math.round;
var r = Math.random;
var s = 256;

var numSquares = 6;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var resetButton = document.getElementById("resetButton");
var modeButtons = document.querySelectorAll(".modeButton");
var colors = [];

init();

function init() {
    modeButtonSetup();
    setSquares();
    reset();
}

function modeButtonSetup() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
                modeButtons[0].classList.remove("selected");
                modeButtons[1].classList.remove("selected");
                this.classList.add("selected")
                this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
                reset();
        });
    }
}


function reset() {
    colors = getRandomColorArray(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    for (var i = 0; i < squares.length; i++) {
        h1.style.background = "#4E83B0";
        messageDisplay.textContent = "";
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
}


function setSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].addEventListener("click", function() {
            clickedColor = this.style.background;
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                showAllColors();
            }
            else {
                messageDisplay.textContent = "Try Again!";
                this.style.background = "#232323";
            }
        });
    }
}

//pick rgb color code
function pickColor() {
    var color = colors[o(r()*colors.length)];
    return color;
}

//show colors when the right color is clicked
function showAllColors() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = clickedColor;
    }
    h1.style.background = clickedColor;
}

// generate random rgb color
function randomRGB() {
    return 'rgb('+o(r()*s)+', '+o(r()*s)+', '+o(r()*s)+')';
}

//new colors or play again button
resetButton.addEventListener("click", function() {
    reset();
});

//get colors array
function getRandomColorArray(number) {
    var arr = [];
    for (var i = 0; i < number; i++) {
        arr.push(randomRGB());
    }
    return arr;
}
