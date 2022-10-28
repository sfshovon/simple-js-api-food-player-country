const searchFood= async () => {
  const searchField = document.getElementById('search-meal-field');
  const searchText = searchField.value;
  // console.log(searchText);
  // searchField.value = '';

  if(searchText == ''){
    alert("Invalid Input! Write something to display");
  }
  else{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    try{
      const response = await fetch(url);
      const data = await response.json();
      displayFoods(data.meals);
    }
    catch(error){
      alert("Food Item Unavailable");
    }
    // fetch(url)
    // .then(response => response.json())
    // .then(data => displayFoods(data.meals))
  }
}

//Press Enter to Search
document.getElementById("search-meal-field")
    .addEventListener("keyup", function(e) {
    e.preventDefault();
    if ((e.key == "Enter" && e.value != "")) {
        document.getElementById("searchMealBtn").click();
    }
});

  const displayFoods = meals => {
    const searchResult =document.getElementById('search-meal-result');
    searchResult.textContent = '';
      meals.forEach(meal => {
        const div = document.createElement('div');
        div.innerHTML = 
        `
        <div class="card w-96 bg-base-100 shadow-xl md:w-80 sm:w-48">
          <figure>
            <img src=${meal.strMealThumb} class="rounded-xl h-56 w-96" alt="Food Image" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-xl font-bold inline-block h-20">${meal.strMeal}</h2>
            <p class="text-justify h-20">${meal.strInstructions.slice(0,100)}>
            <div class="flex justify-center">
              <a href="#my-modal-2" class="mt-2 btn btn-accent bg-sky-200 text-black" onclick="loadMealDetails(${meal.idMeal})">Show Details</a>
            </div>
              <div id="my-modal-2" class="modal" >
                <div class="modal-box">
                  <div id="food-details" class="flex justify-center">
                  
                  </div>
                </div>
              </div>

          </div>
        </div>
        `;
        searchResult.appendChild(div);
      })
  }

  const loadMealDetails = async mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    const response = await fetch(url);
    const data = await response.json();
    displayMealDetails(data.meals[0]);
    // fetch(url)
    // .then(res => res.json())
    // .then(data => displayMealDetails(data.meals[0]));
  }

  const displayMealDetails = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('food-details');
    mealDetails.textContent = '';
    const div = document.createElement('div')
    div.innerHTML = 
    `
    <div class="card w-96 shadow-xl md:w-80 sm:w-48 image-full"> 
      <figure>
        <img class="rounded-xl h-56 w-96" src="${meal.strMealThumb}" alt="Food Image" />
      </figure>
      <div class="card-body">
        <h2 class="card-title"> ${meal.strMeal} </h2>
        <p>${meal.strInstructions}</p>
        <a href="${meal.strYoutube}" class="btn btn-accent mt-2">Youtube Video</a>
      </div>
    </div>

    <div class="modal-action">
      <a href="#" class="btn">Close</a>
    </div>
    `
    mealDetails.appendChild(div);
  }