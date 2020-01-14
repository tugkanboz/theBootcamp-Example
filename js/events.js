    var button = document.querySelector("button");
    var parag2 = document.querySelector("#accbut");
    var has1 = document.querySelector("h1"); // alert
    var has2 = document.querySelector("h2"); //h2 click değiştir
    var ull = document.querySelectorAll("ul"); //tüm datayı boya
    var lii = document.querySelector("ul");
    //var body = document.querySelector("body");
    var togglebutton = document.querySelector("#bg-change");


    button.addEventListener("click",function () {
        parag2.textContent = "you clicked me ";
        button.textContent = "enough";
    });

    has1.addEventListener("click",function () {
        alert("haay");
    });

    has2.addEventListener("click", function () {
        has2.style.color = "orange";
    });

    lii.addEventListener("click",function () {
        console.log("ccc");
    });



    for(let i=0; i< ull.length; i++)
    {
    ull[i].addEventListener("click",function () {
            this.style.color = "pink";
    });
    }



    /*
    var fa = false;
    var bg = document.getElementById("bg-change");
    bg.addEventListener("click",function () {
        if(fa==false){
            body.style.background = "yellow";
        } else
        {
            body.style.background = "white";
        }
        fa = !fa;
    });
*/



    togglebutton.addEventListener("click",function () {
        document.body.classList.toggle("yellow");
    });