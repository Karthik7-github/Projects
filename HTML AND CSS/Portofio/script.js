
let skillsection = document.querySelector('.skills-section');
let boxes = document.querySelector('.boxes-bar2');
let x = true;

function more() {
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

