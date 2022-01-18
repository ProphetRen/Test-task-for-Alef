const closeMenu = document.querySelector('.close-menu');
const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
  menu.classList.add('enabled')
  document.body.classList.add('lock')
})

closeMenu.addEventListener('click', () => {
  menu.style.transition = 'all .3s ease-in'
  menu.classList.remove('enabled')
  document.body.classList.remove('lock')
 setTimeout(()=>{
   menu.style.transition = ''
 }, 200)
})