// let link1 = document.querySelector('.ex-1');
// let link2 = document.querySelector('.ex-2');

// let box1 = document.querySelector('.box-1');
// let box2 = document.querySelector('.box-2');


// link1.addEventListener('mouseenter', () => {
//   box1.classList.add('drop');
// });

// link1.addEventListener('mouseleave', () => {
//   box1.classList.remove('drop');
// });

let link1 = document.querySelector('.ex-1');
let box1 = document.querySelector('.box-1');

link1.addEventListener('mouseenter', () => {
  box1.classList.add('show');
});

link1.addEventListener('mouseleave', () => {
  box1.classList.remove('show');
});
