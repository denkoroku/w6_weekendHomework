document.addEventListener('DOMContentLoaded', () => {
  const newBikeform = document.querySelector('#new-bike-form');
  newBikeform.addEventListener('submit', handleNewBikeFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

  // const buyBikeButton = document.querySelector('#purchase');
  // buyBikeButton.addEventListener('click', handleBuyBikeClick);
})

// filling in the form
const handleNewBikeFormSubmit = function (event) {
  event.preventDefault();

  const bikeListItem = createBikeListItem(event.target);
  const bikeList = document.querySelector('#bike-list');
  bikeList.appendChild(bikeListItem);
  event.target.reset();
}

const createBikeListItem = function (table) {

  const bikeListItem = document.createElement('tr');
  bikeListItem.classList.add('bike-list-item');

  const category = document.createElement('td');
  category.textContent = table.category.value;
  bikeListItem.appendChild(category);

  const make = document.createElement('td');
  make.textContent = table.make.value;
  bikeListItem.appendChild(make);

  const model = document.createElement('td');
  model.textContent = table.model.value;
  bikeListItem.appendChild(model);

  const wheel = document.createElement('td');
  wheel.textContent = table.wheel.value;
  bikeListItem.appendChild(wheel);

  return bikeListItem;
}


// delete
const handleDeleteAllClick = function (event) {
  const clearBikeList = document.querySelector('#bike-list');
  clearBikeList.innerHTML = '';
}


// bike message
// const handleBuyBikeClick = function (event) {
//   const clearBikeList = document.querySelector('#bike-list');
//   clearBikeList.innerHTML = '';
//
//   const message = document.createElement('div');
//   message.textContent = `The correct number of bikes is n+1 You have ${} bikes therefore the correct number of bikes for you is ${+1} you need to buy a new bike!`;
//   message.appendChild(body);
//
//
// }
