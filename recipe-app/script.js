const meals = document.getElementById('meals');
const favouriteContainer = document.getElementById('fav-meals');
getRandomMeal();
fetchFavMeals();

async function getRandomMeal(){
    let url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const resp = await fetch(url);
    const respData = await resp.json();
    const randomMeal = respData.meals[0];
    addMeal(randomMeal, true);    
}

async function getMealById(id){
    let url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id;
    const resp = await fetch(url);
    const respData = await resp.json();
    const meal = respData.meals[0];

    return meal;
}

async function getMealBySearch(term){
    const meals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + term);
}

function addMeal(mealData, random = false){
    console.log(mealData);

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
    meals.appendChild(meal);
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
    favouriteContainer.appendChild(favMeal);
}