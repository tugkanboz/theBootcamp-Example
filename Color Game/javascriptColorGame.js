    var colors = generateRandomColors(6);
    var squares = document.querySelectorAll(".square");
    var pickedColor = pickColor();
    var colorDisplay = document.getElementById("colorDisplay");
    var messageDisplay = document.getElementById("message");
    var h1 = document.querySelector("h1");
    var stripe = document.getElementById("stripe");
    var resetButton = document.getElementById("reset");

    resetButton.addEventListener("click",function () {
        colors = generateRandomColors(6);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for (var i=0; i<squares.length;i++){
            squares[i].style.background = colors[i];
        }
        h1.style.background = "#232323";
    });

    colorDisplay.textContent = pickedColor;

    for(var i=0; i<squares.length; i++)
        {
            squares[i].style.backgroundColor = colors[i];

            squares[i].addEventListener("click",function () {
                const clickedColor = this.style.backgroundColor;
                if(clickedColor === pickedColor) {
                    messageDisplay.textContent = "Correct";
                    changeColors(clickedColor);
                    h1.style.background = clickedColor;
                    resetButton.textContent = "Play again?";
                } else{
                    this.style.backgroundColor = "#232323";
                    messageDisplay.textContent = "Try Again";
                }
            });
        }

    function changeColors(color){
        for(var i=0; i< squares.length;i++)
        {
            squares[i].style.background = color;
        }
    }

    function pickColor()
    {
       var random = Math.floor(Math.random() * colors.length);
       return colors[random];
    }

    function  generateRandomColors(num) {
        var arr = [];

        for(var i=0; i < num;i++)
        {
            arr.push(randomColor());
        }

        return arr;
    }

    function randomColor() {
        //pick red
        var r = Math.floor(Math.random()*256);
        //pick green
        var g = Math.floor(Math.random()*256);
        //pick blue
        var b = Math.floor(Math.random()*256);
        return "rgb(" +  r + ", " + g + ", " + b + ")";
    }