function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// ajout
const btnClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// ajout
btnClose.addEventListener("click", function(){
  document.querySelector(".bground").style.display = "none";
})

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}




/* test

const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get values from the input
  const firstValue = first.value.trim();
  const lastValue = last.value.trim();
  const emailValue = email.value.trim();
  const birthdateValue = birthdate.value.trim();
  const quantityValue = quantity.value.trim();

  if(firstValue === '') {
    //afficher erreur
    //ajouter class erreur
    setErrorFor(first, 'Le prénom ne peut pas être vide');
  } else {
    //ajouter class success
    setSuccessFor(first);
  }
}

function setErrorFor(input, message) {
  const formData = input.parent
}
*/