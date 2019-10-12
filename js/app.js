document.addEventListener('DOMContentLoaded', () => {
  const newBikeform = document.querySelector('#new-bike-form');
  newBikeform.addEventListener('submit', handleNewBikeFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewBikeFormSubmit = function (event) {
  event.preventDefault();

  const bikeListItem = createBikeListItem(event.target);
  const bikeList = document.querySelector('#bike-list');
  bikeList.appendChild(bikeListItem);

  event.target.reset();
}

const createBikeListItem = function (form) {

  const bikeListItem = document.createElement('li');
  bikeListItem.classList.add('bike-list-item');

  const category = document.createElement('p');
  category.textContent = form.category.value;
  bikeListItem.appendChild(category);

  const make = document.createElement('h2');
  make.textContent = form.make.value;
  bikeListItem.appendChild(make);

  const model = document.createElement('h2');
  model.textContent = form.model.value;
  bikeListItem.appendChild(model);

  const wheel = document.createElement('h2');
  wheel.textContent = form.wheel.value;
  bikeListItem.appendChild(wheel);

  return bikeListItem;
}

const handleDeleteAllClick = function (event) {
  const clearBikeList = document.querySelector('#bike-list');
  clearBikeList.innerHTML = '';
}
