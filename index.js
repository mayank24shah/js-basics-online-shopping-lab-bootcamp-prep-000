var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemObj = {};
 var price = Math.floor(Math.random() * 100) + 1;
  itemObj[item] = price
  cart.push(itemObj)
 console.log(item+ " has been added to your cart.");
 return cart;
}

function viewCart() {
  // write your code here
  if(cart.length===0){
    console.log('Your shopping cart is empty.')
  }
  else{
    var items = [];
    for( var i =0; cart.length>i;i++){
       for(var item in cart[i]){
       items.push(item + "at $"+ cart[i][item])
       }
    }
    console.log("In your cart, you have " + items.join(", ") + ".");
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
