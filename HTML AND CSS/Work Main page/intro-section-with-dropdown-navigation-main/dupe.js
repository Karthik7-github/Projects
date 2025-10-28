const features = document.querySelector('.ex-1');
const company = document.querySelector('.ex-2');
const tools = document.querySelector('.tools');

// Show dropdown when hovering "Features"
features.addEventListener('mouseenter', () => {
  tools.classList.add('active');
});

features.addEventListener('mouseleave', () => {
  tools.classList.remove('active');
});

// Optional: Keep dropdown visible when hovering inside
tools.addEventListener('mouseenter', () => {
  tools.classList.add('active');
});

tools.addEventListener('mouseleave', () => {
  tools.classList.remove('active');
});
