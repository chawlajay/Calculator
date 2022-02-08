const mealsElement = document.getElementById('meals');
const favouriteContainer = document.getElementById('fav-meals');

const searchTerm = document.getElementById("search-term");
const searchBtn = document.getElementById("search");

const mealPopup = document.getElementById("meal-popup");
const mealInfoEl = document.getElementById("meal-info");
const popupCloseBtn = document.getElementById("close-popup");

getRandomMeal();
fetchFavMeals();

async function getRandomMeal(){
    let url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const resp = await fetch(url);
    const respData = await resp.json();
    const randomMeal = respData.meals[0];
    addMeal(randomMeal, true);   
    console.log(randomMeal); 
}

async function getMealById(id){
    let url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id;
    const resp = await fetch(url);
    const respData = await resp.json();
    const meal = respData.meals[0];

    return meal;
}

async function getMealsBySearch(term){
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + term);
    const respData = await resp.json();
    const meals = respData.meals;
// console.log(meals);
    return meals;
}

function addMeal(mealData, random = false){
    // console.log(mealData);

    const meal = document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML = `
                <div class="meal-header">
                    ${random ? `
                    <span class="random">
                        Random Recipe
                    </span>
                    ` : ``}
                    <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
                </div>
                <div class="meal-body">
                    <h4>${mealData.strMeal}</h4>
                    <button class="fav-btn">
                        <i class="fas fa-heart"></i>
                        <!-- <i class="fas fa-heart"></i> -->
                    </button>
                </div>
    `;

    const buttonElement = meal.querySelector(".meal-body .fav-btn");
    buttonElement.addEventListener('click',()=>{
        
        buttonElement.classList.toggle('active');

        if(buttonElement.classList.contains('active')){
            addMealLS(mealData.idMeal);
        }
        else{
            removeMealLS(mealData.idMeal);
        }

        fetchFavMeals();
        // console.log("click");
    });

    meal.addEventListener('click', ()=>{
        showMealInfo(mealData);
    })
    mealsElement.appendChild(meal);
}

function addMealLS(mealId){     // LS - local storage
    const mealIds = getMealLS();
    localStorage.setItem('mealIds',JSON.stringify([...mealIds,mealId]));
}

function removeMealLS(mealId){
    const mealIds = getMealLS();
    localStorage.setItem('mealIds',JSON.stringify(mealIds.filter(id => id !== mealId)));
}

function getMealLS(){
    const mealIds = JSON.parse(localStorage.getItem('mealIds'));
    return mealIds === null ? [] : mealIds;
}

async function fetchFavMeals(){
    favouriteContainer.innerHTML = '';
    
    const mealIds = getMealLS();
    
    mealIds.forEach(async mealId => {
        let meal = await getMealById(mealId);
        addMealFav(meal);
    });
}

function addMealFav(mealData){
    const favMeal = document.createElement('li');
    favMeal.innerHTML = `
    <button class="clear"><i class="fas fa-window-close"></i></button>
    <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
    <span>${mealData.strMeal}</span>
    `;
    const btn = favMeal.querySelector(".clear");
    btn.addEventListener('click',()=>{
        removeMealLS(mealData.idMeal);
        fetchFavMeals();
    });
    favMeal.addEventListener('click',(e)=>{
        showMealInfo(mealData);
    });
    favouriteContainer.appendChild(favMeal);
}

function showMealInfo(mealData){
    console.log(mealData);
    const mealEl = document.createElement('div');
    mealInfoEl.innerHTML ="";
    mealEl.innerHTML = `<h1>${mealData.strMeal}</h1>
    <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
    <h3>Ingredients:</h3>
    <ul></ul>
    <h3>Instuctions:</h3>
    <p>${mealData.strInstructions}</p>
    `;
    for(let i=1;i<=20;i++){
        let ingre = "strIngredient"+i;
        let ingreMeasure = "strMeasure"+i;
        let liEle = document.createElement("li");
        if(mealData[ingre])
        {
            liEle.innerHTML = mealData[ingre] + " - " + mealData[ingreMeasure]; 
            mealEl.querySelector("ul").appendChild(liEle);  
        }
    }

    mealInfoEl.appendChild(mealEl);
    mealPopup.classList.remove("hidden");
}

searchBtn.addEventListener('click',async () => {
    // console.log("before");
     mealsElement.innerHTML = "";
    // console.log("after")
    const searchValue = searchTerm.value;
    const foundMeals = await getMealsBySearch(searchValue);
    if(foundMeals){
        foundMeals.forEach((meal) => {
            addMeal(meal);
            // console.log(meal);
        });
    }

    // if(meals.innerHTML="")
    // getRandomMeal();
});

popupCloseBtn.addEventListener('click',()=>{
mealPopup.classList.add("hidden");
});