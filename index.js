var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
 var price = Math.floor(Math.random() * 100);
 cart.push({[item] : price});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if(cart.length === 0){
    console.log("Your shopping cart is empty.");
  }else {
    var array = [];
    for(let i = 0; i < cart.length; i++){
      var price = Object.keys(cart[i]);
      array.push(`${Object.keys(cart[i])} at $${cart[i][price]}`);
    }
    if(cart.length === 1){
      console.log(`In your cart, you have ${array}.`)
    }
    else if(cart.length === 2){
      console.log(`In your cart, you have ${array.join(" and ")}.`);
    } else {
      array[array.length - 1] = "and " + array[array.length -1 ]
      console.log(`In your cart, you have ${array.join(", ")}.`)
    }
  }
}

function total() {
    
}


function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
