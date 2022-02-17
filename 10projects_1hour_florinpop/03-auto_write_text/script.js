const text = "Jay, you're awesome! Believe it and keep going, keep hustling. You are doing great and just keep doing your karm, don't focus on fruits.";

let index=0;

function writeText(){
    document.body.innerHTML = text.slice(0,index);
    index++;

    if(index>text.length-1)
    index=0;
}

setInterval(writeText,100);