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
// ajout --------------------
const btnClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// ajout --------------------
btnClose.addEventListener("click", function(){
  document.querySelector(".bground").style.display = "none";
})

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//test -------------------------------------------

const myForm = document.getElementById('form');


myForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const myFirst = document.getElementById('first');
  const myLast = document.getElementById('last');
  const myEmail = document.getElementById('email');
  const myBirthdate = document.getElementById('birthdate');
  const myQuantity = document.getElementById('quantity');
  const myError = document.getElementById('error');
  const myError2 = document.getElementById('error2');
  const myError3 = document.getElementById('error3');
  const myError4 = document.getElementById('error4');
  const myError5 = document.getElementById('error5');

  if (myFirst.value.trim() === "") {
    myError.textContent = "Veuillez renseigner votre prénom";
  } else {
    myError.textContent = "";
  }

  if (myLast.value.trim() === "") {
    myError2.textContent = "Veuillez renseigner votre nom";
  } else {
    myError2.textContent = "";
  }

  if (myEmail.value.trim() === "") {
    myError3.textContent = "Veuillez renseigner votre mail";
  } else {
    myError3.textContent = "";
  }

  if (myBirthdate.value.trim() === "") {
    myError4.textContent = "Veuillez renseigner votre date de naissance";
  } else {
    myError4.textContent = "";
  }

  if (myQuantity.value.trim() === "") {
    myError5.textContent = "Veuillez renseigner le nombre de tournois auxquels vous avez participé";
  } else {
    myError5.textContent = "";
  }

});