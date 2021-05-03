let navItem = document.querySelectorAll('.nav-item');

navItem.forEach((btn) => {
  btn.addEventListener('click', function () {
    navItem.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
  });
});

//////pop up form
const popUpBtn = document.querySelector('.pop-up-btn');
const form = document.querySelector('form');
const closeBtn = document.querySelector('.close-btn');

popUpBtn.addEventListener('click', () => {
  form.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
  form.style.display = 'none';
});
