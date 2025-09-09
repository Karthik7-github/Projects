const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
})

loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
})

const btnpopup = document.querySelector('.btnlogin-popup');

btnpopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
})

const iconclose = document.querySelector('.icon-close');

iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});