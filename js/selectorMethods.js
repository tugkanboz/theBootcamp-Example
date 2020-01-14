    var tag = document.getElementById("tag");
    var bolded = document.getElementsByClassName("bolded");
    var listData = document.getElementsByTagName("li");

    var parag = document.querySelector("p");

    console.log(parag.textContent);

    parag.textContent = "vela vela vel vela";

    console.log(parag.textContent);

    console.log(tag);


    //classlı listenin ilk elementini getir
    console.log( "bolded[0]");
    console.log( bolded[0]);
    console.log( "bolded[0]");

    //similar textContent and innerHTML
    bolded[1].textContent = "muz";
    bolded[0].innerHTML = "asdsad";

    //get and set attribute
    var link = document.querySelector("a");
    console.log(link);

    link.setAttribute("href","https://twitter.com/home")


    console.log("second class element");
    console.log(bolded[1]);
    console.log("second class element");

    //tagi li olan dataları getir
    console.log("list data");
    console.log(listData);
    console.log("list data");

    var selectbyid = document.querySelector("#tag");
    console.log(selectbyid);

    var queryAll = document.querySelectorAll(".a");
    console.log(queryAll);

    tag.style.marginTop = "15px";
    tag.classList.add("bolded");
