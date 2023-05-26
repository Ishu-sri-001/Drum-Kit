// Detecting Button Press
for (var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var char=this.innerHTML;
       makeSound(char);
       Animation(char);
    });
}

//Detecting Keyboard press
document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
    Animation(event.key);
});


//function for making sound
function makeSound(key) {
    switch(key)
    {
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var sna= new Audio("sounds/snare.mp3");
            sna.play();
            break;
        case "k":
            var cra= new Audio("sounds/crash.mp3");
            cra.play();
            break;
        case "l":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(char);
    }
}

function Animation (curKey)
{
    var actButton=document.querySelector("."+curKey);
    actButton.classList.add("pressed");
    setTimeout(function(){
        actButton.classList.remove("pressed");
    },100)
}