        var firstLi = document.getElementsByClassName("lisn");

        for(var i=0;i<=firstLi.length;i++)
        {
            firstLi[i].addEventListener("mouseover", function () {
                this.style.color = "blue";
            });

            firstLi[i].addEventListener("mouseout", function () {
                this.style.color = "black";
            });
        }