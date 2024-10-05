const heartIcons = document.querySelectorAll('.heart');

function like() {
  this.style.display = 'none';
}
  
heartIcons.forEach((item) => item.addEventListener('click', like));