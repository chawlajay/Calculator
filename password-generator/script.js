const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl= document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowerCase(){
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
}

function getUpperCase(){
    return upperLetters[Math.floor(Math.random()*upperLetters.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}

function getSymbol(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}

function generatePassword(){
    const len = lengthEl.value;
    let password = "";
    if(len>3 && len<41){
        for(let i=0;i<len;i++){
            const x = generateX();
            password += x;
        }
    }
    if(password === "")
    password = "try again..."
    pwEl.innerText = password;
}

function generateX(){
    const xs = [];
    if(upperEl.checked){
        xs.push(getUpperCase());
    }

    if(lowerEl.checked){
        xs.push(getLowerCase());
    }

    if(numberEl.checked){
        xs.push(getNumber());
    }

    if(symbolEl.checked){
        xs.push(getSymbol());
    }
    return (xs.length ? xs[Math.floor(Math.random()*xs.length)] : "");
}

generateEl.addEventListener('click',generatePassword);