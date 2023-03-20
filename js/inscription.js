let nom = document.querySelector("#nom")
let prenom = document.querySelector("#prenom")
let e_mail = document.querySelector("#e_mail")
let mot_de_pass = document.querySelector("#mot_de_pass")
let confirmation = document.querySelector("#confirmation")
let inscription = document.querySelector("#inscription")


//console.log(nom, prenom, email, mot_de_pass, confirmation, inscription)

inscription.addEventListener('click', function() {
   localStorage.setItem("nom", nom.value)
   localStorage.setItem("prenom", prenom.value)
   localStorage.setItem("e_mail", e_mail.value)
   localStorage.setItem("mot_de_pass", mot_de_pass.value)
   localStorage.setItem("confirmation", confirmation.value)
   window.location.replace("file:///Users/imac-09/Desktop/Site_d-application_web.github.io/html/connection.html")
})
