const mealSection = document.getElementById('meal-db-section');
const playerSection = document.getElementById('player-db-section');
const countrySection = document.getElementById('rest-country-section');

playerSection.style.display = "none";
countrySection.style.display = "none";

function playerFunction(){
  mealSection.style.display = "none";
  countrySection.style.display = "none";
  playerSection.style.display = "block";
}

function mealFunction(){
  playerSection.style.display = "none";
  countrySection.style.display = "none";
  mealSection.style.display = "block";
}

function countryFunction(){
  countrySection.style.display = "block";
  mealSection.style.display = "none";
  playerSection.style.display = "none";
}
