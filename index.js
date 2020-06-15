var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 //assign item (which is just a string name) to cart object itemName: thing, itemPrice: 5
 //assign a random price between 1 & 100 to key's value
 //assign complete object to an array of objects to make the cart
 //return the msg the item was added to a cart

  //const prices = Math.floor(Math.random() * 100) + 1  //random generate price of item
  //var ItemsObj = {itemName: item, itemPrice: price} //make a object of the item and the price
  var itemsObj = {
      itemName: item,
      itemPrice: Math.floor(Math.random() * 100) + 1
    }
  cart.push(itemsObj) //add new item objects to the the cart, at array end


 return (`${item} has been added to your cart.`)
}



function viewCart() {
  // write your code here
  //if cart.length === 0 return empty message
  //else if cart.length ===1, return msg for 1 item and its price
  //else if cart.length ===2, return msg for 2 items and their price
  //else if cart.lenght =>3, return msg for all items using oxfard comma (x,y, and z) listing


  //var cart = ["apple", "4"]
  if (cart.length === 0){
    return ("Your shopping cart is empty.")
  }

  else if(cart.length === 1){
      //if the cart's length equals
      //return the object positions (0) and the keys
    return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
    }

  else if (cart.length === 2){
  //return the results of a loop through the array showing item names and price
  return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
    }


  else if (cart.length >= 3){
    let yourCartHas = []
    console.log("adfadf")
    for (let index = 0; cart.length >= 3; index+=1){
      yourCartHas.push(` ${cart.index.itemName} at $${cart.index.itemPrice}`)

    }

  }



}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
