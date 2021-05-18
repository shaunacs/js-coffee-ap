"use strict";

const addItemToCart = (itemName) => {
  // takes in itemName, uses jQuery to add itemName to
  // some kind of table of existing cart-item HTML elements
  // 
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

const resetCart = () => {
  // Changes cart total html to 0.00
  $('#cart-total').html('0.00');
  // Empties somehow
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  // Takes in price as argument,
  // pulls id=cart-total from html
  const cartTotal = $('#cart-total');
  // takes total from html and converts to Number,
  // adds cartTotal.html to price argument
  let total = Number(cartTotal.html());
  total += price;
  // return the final total?
  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  // Grabbing number of coffee sold and adding amount sold to it
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  // takes in a progress value (0-100) and status message and update
  // order progress bar value, and display message below
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
// use "Add to Cart" button from HTML and add event that calls the addItemToCart function
$('.add-to-order').on('click', () => {
  const item = 'Coffee'
  const value = 1.50
  addItemToCart(item)
  incrementCartTotal(value)
}); // add some kind of info to pass item name to addItemtoCart function

$('#place-order').on('click', () => {
  incrementCoffeeSold($('#cart-items').children().length)
  resetCart()
});