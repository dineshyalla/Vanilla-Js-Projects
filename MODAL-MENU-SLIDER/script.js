const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const navbar = document.getElementById('navbar');

toggle.addEventListener('click', () => {
  return document.body.classList.toggle('show-nav');
  // document.body.addEventListener('click', closeNavbar);
});

open.addEventListener('click', () => modal.classList.add('show-modal'));

close.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

window.addEventListener('click', (e) => {
  //e.target return the object id
  e.target === modal ? modal.classList.remove('show-modal') : false;
});
