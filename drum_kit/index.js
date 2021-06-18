for(let i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll(".drum")[i].addEventListener('click',function (){

    var buttonInnerHTML = this.innerHTML;
    switch(buttonInnerHTML){
        case "w":
            var play_sound = new Audio("sounds/crash.mp3");
            play_sound.play();
        break;
        case "a":
            var play_sound = new Audio("sounds/kick-bass.mp3");
            play_sound.play();
        break;
        case "s":
            var play_sound = new Audio("sounds/snare.mp3");
            play_sound.play();
        break;
        case "d":
            var play_sound = new Audio("sounds/tom-3.mp3");
            play_sound.play();
        break;
        case "j":
            var play_sound = new Audio("sounds/tom-2.mp3");
            play_sound.play();
        break;
        case "k":
            var play_sound = new Audio("sounds/tom-1.mp3");
            play_sound.play();
        break;
        case "l":
            var play_sound = new Audio("sounds/tom-4.mp3");
            play_sound.play();
        break;
        default: console.log("No button like that available!");
        break;
    }
});
}