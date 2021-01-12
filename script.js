let popup = document.querySelector('.sidebar');
let openBtn = document.querySelector('.openbtn');
let closeBtn = popup.querySelector('.closebtn');

openBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('sidebar-opn');
  openBtn.classList.add('openbtnon');
});

closeBtn.addEventListener('click', function () {
  popup.classList.remove('sidebar-opn');
  openBtn.classList.remove('openbtnon');
});

let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 2000) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }

};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};