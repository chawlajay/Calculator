const imgs = document.getElementById("imgs");
let index=0;

const img = document.querySelectorAll("#imgs img");

function slide(){
    index++;
    if(index==img.length)
    index=0;

    imgs.style.transform = `translateX(-${index*100}%)`;

    setTimeout(slide,1000);
    clearInterval(slip);
}

let slip = setInterval(slide,2000);