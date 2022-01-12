const meals = document.getElementById('meals');


async function getRandomMeal(){
    let url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const resp = await fetch(url);
    const respData = await resp.json();
    const randomMeal = respData.meals[0];
    addMeal(randomMeal, true);    
}
getRandomMeal();
async function getMealById(id){
    const meal = await fetch('www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
}

async function getMealBySearch(term){
    const meals = await fetch('www.themealdb.com/api/json/v1/1/search.php?s=' + term);
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