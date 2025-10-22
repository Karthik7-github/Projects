
// /*Adding to cart */
// let cart1 = false;
// let procart1 = document.querySelector('.addcart1');
// let addedtocart1= ()=>{
//     if(cart1==true){
//       procart1.innerHTML='<div class="inside-addcart"> <img src="assets/images/icon-add-to-cart.svg" alt="add-to-cart"><p class="addtocart-text">Add to Cart</p></div>';
//         cart1=false;
//     }
//     else{
//       procart1.innerHTML = '<div class="outside-addcart"><h4>Hi</h4></div>';
//         cart1=true;
//     }
// }

// let cart2 = false;
// let procart2 = document.querySelector('.addcart2');
// let addedtocart2= ()=>{
//     if(cart2==true){
//       procart2.innerHTML='<div class="inside-addcart"> <img src="assets/images/icon-add-to-cart.svg" alt="add-to-cart"><p class="addtocart-text">Add to Cart</p></div>';
//         cart2=false;
//     }
//     else{
//       procart2.innerHTML = '<div class="outside-addcart"><h4>Hi</h4></div>';
//         cart2=true;
//     }
// }

const carts = document.querySelectorAll('.addcart');

carts.forEach(cart => {
  cart.addEventListener('click', () => {
    cart.classList.toggle('active');

    if (cart.classList.contains('active')) {
      cart.innerHTML = '<div class="outside-addcart"><div class="decrement">-</div><h5>1</h5><div class="increment">+</div></div>';
    } else {
      cart.innerHTML = '<div class="inside-addcart"><img src="assets/images/icon-add-to-cart.svg" alt="add"><p class="addtocart-text">Add to Cart</p></div>';
    }
  });
});


const decrease = document.querySelectorAll('.decrement');

decrease.forEach(cart => {
  cart.addEventListener('click', () => {
    cart.classList.toggle('active');
    let value = document.querySelector('');
    if (cart.classList.contains('active')) {

    } else {
    }
  });
});