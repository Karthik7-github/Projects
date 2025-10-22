let cart = false;

let addcartbox = document.querySelector('.inside-addcart');

let addedtocart = ()=>{
    if(cart==false){
        addcartbox.classList.remove('.inside-addcart');
        cart=true;
    }
    else{
        addcartbox.classList.add('.inside-addcart');
        cart=false;
    }
}

/*
const button = item.querySelector('.hoverBtn');
  const box = item.querySelector('.box-in');

  button.addEventListener('mouseenter', () => {
    box.classList.add('glow');
  });

  button.addEventListener('mouseleave', () => {
    box.classList.remove('glow');
  }); */