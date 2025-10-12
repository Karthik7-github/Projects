
let skillsection = document.querySelector('.skills-section');
let boxes = document.querySelector('.boxes-bar2');
let x = true;

function moreski() {
  if (x) {
    skillsection.style.height = '140vh';
    boxes.classList.add('show');  // show boxes
    x = false;
  } else {
    skillsection.style.height = '105vh';
    boxes.classList.remove('show'); // hide boxes
    x = true;
  }
}




let Achievmwntssection = document.querySelector('.Achievments');
let boxess = document.querySelector('.boxes-notvisi');
let y = true;

function moreach() {
  if (y) {
    Achievmwntssection.style.height = '200vh';
    boxess.classList.add('show');  // show boxes
    y = false;
  } else {
    Achievmwntssection.style.height = '140vh';
    boxess.classList.remove('show'); // hide boxes
    y = true;
  }
}



const allBoxes = document.querySelectorAll('.bb');

allBoxes.forEach(item => {
  const button = item.querySelector('.hoverBtn');
  const box = item.querySelector('.box-in');

  button.addEventListener('mouseenter', () => {
    box.classList.add('glow');
  });

  button.addEventListener('mouseleave', () => {
    box.classList.remove('glow');
  });
});
