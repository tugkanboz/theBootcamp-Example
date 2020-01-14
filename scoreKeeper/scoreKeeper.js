    var p1button = document.getElementById("p1");
    var p2button = document.getElementById("p2");
    var reset = document.getElementById("reset");
    var p1Display = document.getElementById("p1score");
    var p2Display = document.getElementById("p2score");
    var playing = document.getElementById("playing");

    var p1score = 0;
    var p2score = 0;
    var winningGame = 5;
    var gameOver = false;

    p1button.addEventListener("click",function () {
       if(!gameOver)
       {
           p1score++;
           if (p1score === winningGame){
               gameOver = true;
               p1Display.style.color = "green";
           }
           p1Display.textContent = p1score;
       }
    });

    p2button.addEventListener("click",function () {
        if(!gameOver)
        {
            p2score++;
            if (p2score === winningGame)
            {
                gameOver = true;
                p2Display.style.color = "green";

            }
            p2Display.textContent = p2score;
        }
    });

    reset.addEventListener("click",function () {
        p1score=0;
        p2score=0;
        p1Display.innerHTML = 0 ;
        p2Display.innerHTML = 0 ;
        p1Display.style.color = "black";
        p2Display.style.color = "black";
        gameOver = false;
    });