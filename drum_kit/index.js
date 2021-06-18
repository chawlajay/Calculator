for(let i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll(".drum")[i].addEventListener('click',function (){
    var play_sound = new Audio("sounds/tom-1.mp3");
    play_sound.play();
});
}