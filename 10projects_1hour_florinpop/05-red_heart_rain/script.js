function createHeart(){
    const heart = document.createElement("div");
    const heartIcon = document.createElement("i");

    heartIcon.classList.add("fas","fa-heart");
    heart.appendChild(heartIcon);

    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random()*2 + 3 + "s";
    
    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },5000);
}

setInterval(createHeart,500);