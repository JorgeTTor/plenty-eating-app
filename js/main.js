const searchForm = document.querySelector('form');
const searchResult = document.querySelector('.recipes__result');
const container = document.querySelector('.recipes__container');
let searchQuery = ' ';
const PLENTYAPP_ID = "0b5b5122";
const PLENTYAPP_key = "6fc7e1d068c388df98233ed5c0894b19";


searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector('input').value;
  console.log(searchQuery)
  fetchAPI();
})

async function fetchAPI() {
  const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=${PLENTYAPP_ID}&app_key=${PLENTYAPP_key}&to=20`;
  const response = await fetch(baseURL);
  const data = await response.json();
  renderHTML(data.hits)
  console.log(data)

}
function renderHTML(results) {
  let renderedHTML = '';
  results.map(result => {
    renderedHTML += 
    `
    <div class="recipe__item">
    <img src="${result.recipe.image}" alt="healthy salad" class="recipe__img">
    <div class="recipe__content">
      <h2 class="dish">${result.recipe.label}</h2>
      <a href="${result.recipe.url}" target="_blank"  class="recipe__btn">View Recipe</a>
    </div>
    <p class="recipe__data">Calories: ${result.recipe.calories.toFixed(2)}</p>
    <p class="recipe__data">Diet Label: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels : 'Sorry, We did not find any data' }</p>
    <p class="recipe__data">Health: ${result.recipe.healthLabels}</p>
  </div>
    `
  })
  searchResult.innerHTML = renderedHTML;
}
