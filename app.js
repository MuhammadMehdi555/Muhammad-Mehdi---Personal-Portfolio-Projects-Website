let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let home = document.getElementById('home');
let option = document.querySelector('.option');

function isVisible(elem) {
  return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
}

menuIcon.onclick = () => {
  if (navbar.classList.toggle('active')) {
    home.style.marginTop = "210px";
  } else {
    home.style.marginTop = "50px";
  }
};

function pro() {
  if (option.style.display === "flex") {
    option.style.display = "none";
  } else {
    option.style.display = "flex";
  }

  if (isVisible(menuIcon)) {
    home.style.marginTop = option.style.display === "flex" ? "270px" : "210px";
  } else {
    home.style.marginTop = "50px";
  }
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navbar.classList.remove('active');
    option.style.display = "none";
    home.style.marginTop = "50px";
  }
});


const typed = new Typed(".multiple-text", {
  strings: ['Frontend Developer', 'WordPress Expert'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 70,
  loop: true
})