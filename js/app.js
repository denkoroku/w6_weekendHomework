document.addEventListener('DOMContentLoaded', () => {
  const newBikeform = document.querySelector('#new-bike-form');
  newBikeform.addEventListener('submit', handleNewBikeFormSubmit);

  const buyBikeButton = document.querySelector('#purchase');
  buyBikeButton.addEventListener('click', handleBuyBikeClick);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

// filling in the form
let bikeTotal = 0
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

  bikeTotal += 1;
  return bikeListItem;
}


// bike message
const handleBuyBikeClick = function (event) {
  const message = document.createElement('h2');
  message.textContent = `YES! The correct number of bikes is n+1 You have ${bikeTotal} bikes therefore the correct number of bikes for you is ${bikeTotal+1}. You need to buy a new bike!`;
  messageHolder.appendChild(message);
}


// Delete all
const handleDeleteAllClick = function (event) {
  const bikeList = document.getElementsByTagName('td');
    for (bike of bikeList){
      bike.innerHTML = '';
    }
    bikeTotal=0;
}
