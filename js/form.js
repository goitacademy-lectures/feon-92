const form = document.querySelector('.modal-form');
const rangeInput = document.querySelector('[type="range"]');
const rangeValue = document.querySelector('.range-value');

rangeInput.addEventListener('input', event => {
  rangeValue.innerHTML = event.target.value;
});

form.addEventListener('submit', event => {
  event.preventDefault();

  console.log('🚀 ~ event.target.name:', event.target.name);
});

const firstMaxNumber = 5;
const first_max_number = 5;
