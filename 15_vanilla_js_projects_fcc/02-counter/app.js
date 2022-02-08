const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const decreaseBtn = document.getElementById("decrease");
const counter_el = document.getElementById("value");

increaseBtn.addEventListener('click',function(){
    let val = counter_el.innerText;
    counter_el.innerHTML = parseInt(val) + 1;
});

decreaseBtn.addEventListener('click',function(){
    let val = counter_el.innerText;
    counter_el.innerHTML = parseInt(val) - 1;
});

resetBtn.addEventListener('click',function(){
    counter_el.innerHTML = 0;
});