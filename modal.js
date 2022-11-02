function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function check() {
  const myLocation1 = document.getElementById('location1');  
  const myLocation2 = document.getElementById('location2');  
  const myLocation3 = document.getElementById('location3');
  const myLocation4 = document.getElementById('location4');
  const myLocation5 = document.getElementById('location5');
  const myLocation6 = document.getElementById('location6');

  if ( myLocation1.checked === false && myLocation2.checked === false && myLocation3.checked === false && myLocation4.checked === false && myLocation5.checked === false && myLocation6.checked === false ) {
    return false;
  } else {
    return true;
  }
}

function condition() {
  const myCheckbox1 = document.getElementById("checkbox1");

  if ( myCheckbox1.checked === false ) {
    return false;
  } else {
    return true;
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
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
  const myError6 = document.getElementById('error6');
  const myError7 = document.getElementById('error7');

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

  if ( check() === false ) {
    myError6.textContent = "Veuillez sélectionner une radio";
  } else {
    myError6.textContent = "";
  }

  if ( condition() === false ) {
    myError7.textContent = "Veuillez accepter les conditions d'utilisation";
  } else {
    myError7.textContent = "";
  }

});