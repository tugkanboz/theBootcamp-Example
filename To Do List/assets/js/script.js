
$("ul").on("click","li",function() {

    $(this).toggleClass("completed");

});

$("ul").on("click","span",function (event) {
    $(this).parent().fadeOut("slow",function(){
        $(this).remove();
    });

    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    var newToDo = $(this).val();
    if(event.which === 13 && newToDo !== "")
    {
        $("ul").append("<li><span>X</span> "+ newToDo + "</li>")
    }

});














/*
if($(this).css("color") === "rgb(128, 128, 128)" ) //don use "gray", use rgb codes
{
    $(this).css(
        {
            "color":"black",
            "textDecoration":"none"
        });
}else
{
    $(this).css(
        {
            "color":"gray",
            "textDecoration":"line-through"
        });
}*/




