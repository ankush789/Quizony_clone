const toggleButton = document.querySelector('#toggle');
const toggleLinks = document.querySelector('.toggle-links ');
const navLoginLinks = document.querySelector('.nav-login-links');
const navLinks = document.querySelector('.nav-links');
const topList = document.querySelectorAll('.top-list ul li');
console.log(topList);
const toggler = function () {
  toggleLinks.classList.toggle('hidden');
  toggleLinks.classList.remove('toggleHide');
};

toggleButton.addEventListener('click', () => {
  toggler();
});
