function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// fonction permettant de savoir si au moins une radio a été selectionnée
function check() {
  // on appelle les radios par leurs ID
  const myLocation1 = document.getElementById('location1');  
  const myLocation2 = document.getElementById('location2');  
  const myLocation3 = document.getElementById('location3');
  const myLocation4 = document.getElementById('location4');
  const myLocation5 = document.getElementById('location5');
  const myLocation6 = document.getElementById('location6');
  // si aucune des radios n'est sélectionnée, on retourne false sinon on retourne true
  if ( myLocation1.checked === false && myLocation2.checked === false && myLocation3.checked === false && myLocation4.checked === false && myLocation5.checked === false && myLocation6.checked === false ) {
    return false;
  } else {
    return true;
  }
}

// fonction permettant de savoir si la checkbox est cochée ou non
function condition() {
  // on appelle la checkbox par son ID
  const myCheckbox1 = document.getElementById("checkbox1");
  // si la checkbox n'est pas cochée retourner false sinon retourner true
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

// On crée un event qui au click sur le btnClose fermera .bground
btnClose.addEventListener("click", function(){
  document.querySelector(".bground").style.display = "none";
})

// On appelle la balise form par son ID en l'appellant myForm
const myForm = document.getElementById('form');

// on crée un envnt qui envoie les données du formulaire
myForm.addEventListener('submit', function(e) {
  e.preventDefault();
  // on appelle par leurs id ou leurs classes des éléments html
  const myFirst = document.getElementById('first');
  const myLast = document.getElementById('last');
  const myEmail = document.getElementById('email');
  const myBirthdate = document.getElementById('birthdate');
  const myQuantity = document.getElementById('quantity');
  const myBtn = document.getElementsByClassName('btn-submit')[0];
  const myFormData = document.getElementsByClassName('formData')[0];
  const myFormData1= document.getElementsByClassName('formData')[1];
  const myFormData2 = document.getElementsByClassName('formData')[2];
  const myFormData3 = document.getElementsByClassName('formData')[3];
  const myFormData4 = document.getElementsByClassName('formData')[4];
  const myFormData5 = document.getElementsByClassName('formData')[5];
  const myFormData6 = document.getElementsByClassName('formData')[6];
  const myError = document.getElementById('error');
  const myError2 = document.getElementById('error2');
  const myError3 = document.getElementById('error3');
  const myError4 = document.getElementById('error4');
  const myError5 = document.getElementById('error5');
  const myError6 = document.getElementById('error6');
  const myError7 = document.getElementById('error7');
  const myMessage = document.getElementById('inscription-message');
  // on crée la variable hasError et on lui attribut le booléen false
  let hasError = false;

  // sert à éviter les erreurs dans la consoles lors de la suppression des input
  if (myFirst === null || myLast === null || myEmail === null || myBirthdate === null || myQuantity === null) {
    return;
  }

  // on vérifie si le input est vide, dans ce cas là on affiche une erreur, sinon on affiche aucune erreur
  if (myFirst.value.trim() === "") {
    myError.textContent = "Veuillez renseigner votre prénom"
    myError.style.color = "#FF0000"
    myError.style.fontSize = "10px"
    myFirst.style.border = "2px solid #FF0000"
    hasError = true
  } else {
    myError.textContent = ""
    myFirst.style.border = ""
  }
  // on vérifie si le input est vide, dans ce cas là on affiche une erreur, sinon on affiche aucune erreur
  if (myLast.value.trim() === "") {
    myError2.textContent = "Veuillez renseigner votre nom"
    myError2.style.color = "#FF0000"
    myError2.style.fontSize = "10px"
    myLast.style.border = "2px solid #FF0000"
    hasError = true
  } else {
    myError2.textContent = ""
    myLast.style.border = ""
  }
  // on vérifie si le input est vide, dans ce cas là on affiche une erreur, sinon on affiche aucune erreur
  if (myEmail.value.trim() === "") {
    myError3.textContent = "Veuillez renseigner votre mail"
    myError3.style.color = "#FF0000"
    myError3.style.fontSize = "10px"
    myEmail.style.border = "2px solid #FF0000"
    hasError = true
  } else {
    myError3.textContent = "";
    myEmail.style.border = ""
  }
  // on vérifie si le input est vide, dans ce cas là on affiche une erreur, sinon on affiche aucune erreur
  if (myBirthdate.value.trim() === "") {
    myError4.textContent = "Veuillez renseigner votre date de naissance"
    myError4.style.color = "#FF0000"
    myError4.style.fontSize = "10px"
    myBirthdate.style.border = "2px solid #FF0000"
    hasError = true
  } else {
    myError4.textContent = "";
    myBirthdate.style.border = ""
  }
  // on vérifie si le input est vide, dans ce cas là on affiche une erreur, sinon on affiche aucune erreur
  if (myQuantity.value.trim() === "") {
    myError5.textContent = "Veuillez renseigner le nombre de tournois auxquels vous avez participé"
    myError5.style.color = "#FF0000"
    myError5.style.fontSize = "10px"
    myQuantity.style.border = "2px solid #FF0000"
    hasError = true
  } else {
    myError5.textContent = ""
    myQuantity.style.border = ""
  }
  // on vérifie si au moins une radio est sélectionnée, si ce n'est pas le cas on affiche une erreur, sinon on affiche aucune erreur
  if ( check() === false ) {
    myError6.textContent = "Veuillez sélectionner une radio";
    myError6.style.color = "#FF0000"
    myError6.style.fontSize = "10px"
    hasError = true
  } else {
    myError6.textContent = "";
    myError6.style.color = ""
  }
  // on vérifie si la checkbox est cochée, si ce n'est pas le cas on affiche une erreur, sinon on affiche aucune erreur
  if ( condition() === false ) {
    myError7.textContent = "Veuillez accepter les conditions d'utilisation";
    myError7.style.color = "#FF0000"
    myError7.style.fontSize = "10px"
    hasError = true    
  } else {
    myError7.textContent = "";
    myError7.style.color = ""
  }

  // si hasError a pour valeur false, executer ce qu'il y a dans la condition
  if ( hasError === false ) {
    // on retire les input du formulaire
    myFormData.remove()
    myFormData1.remove()
    myFormData2.remove()
    myFormData3.remove()
    myFormData4.remove()
    myFormData5.remove()
    myFormData6.remove()
    // on y rajouter un message
    myMessage.innerHTML = "Merci pour <br> votre inscription";
    // on stylise le message
    myMessage.style.display = "flex";
    myMessage.style.justifyContent = "center";
    myMessage.style.textAlign = "center";
    myMessage.style.fontSize = "38px"
    myMessage.style.margin = "258px 0"
    myMessage.style.fontWeight = "200"
    // on modifie la value du boutton qui était "C'est parti" pour devenir "Fermer"
    myBtn.value = "Fermer"
    // On crée un event qui au click execute la fermeture de .bground
    myBtn.addEventListener("click", function(){
      document.querySelector(".bground").style.display = "none";
    })
  }
});