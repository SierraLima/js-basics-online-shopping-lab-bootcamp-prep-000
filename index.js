var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
  var item = createItem(item)
 
  getCart.push(item)
 
  return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (!cart.length) {
    return "Your shopping cart is empty."
  }
  return `In your cart, you have` 
  return `In your cart, you have ${numbersAndNames.join(', ')}`
}

function total() {
  var sum = priceItem()
 return sum
}

function removeFromCart(itemName) {
  var itemToRemove = searchForItemToRemove(itemName)
  if ()
  getCart().splice(itemToRemove,1)
}

function placeOrder(cardNumber) {
  // write your code here
}

//helper function

function randomPrice(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createItem(itemName){
  return{
      itemName:itemName, 
      itemPrice:randomPrice(1,100)
  }
}

function priceItem() {
  var sum = 0;
  
  for (let i=0; i<getCart().length ; i++) {
    sum = sum + getCart()[i].itemPrice
  }
  
  return sum
  
}

function searchForItemToRemove (itemName){
  var searchResult
  for (let i=0; i<getCart().length; i++ ){
    if (getCart()[i].itemName == itemName ) {searchResult = getCart()[i]}
  }
  return searchResult
}

