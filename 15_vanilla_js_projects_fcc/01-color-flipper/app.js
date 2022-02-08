const colors = ["blue","green", "red", "rgba(133,122,200)", "#f15025","#f1f5f8","purple","yellow","orangered","brown","rebeccapurple"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    let current_color = colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor = current_color;
    color.innerText = current_color;
});
