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
})
