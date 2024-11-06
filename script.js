const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}

// change Image

var MainImage = document.getElementById("MainImg");
var SmallImage = document.getElementsByClassName("small-img");

SmallImage[0].onclick = function () {
  MainImage.src = SmallImage[0].src
}
SmallImage[1].onclick = function () {
  MainImage.src = SmallImage[1].src
}
SmallImage[2].onclick = function () {
  MainImage.src = SmallImage[2].src
}
SmallImage[3].onclick = function () {
  MainImage.src = SmallImage[3].src
}
