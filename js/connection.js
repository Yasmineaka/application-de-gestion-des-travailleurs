let nom = document.querySelector("#nom")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let connection = document.querySelector("#connection")


// console.log( nom, email, mot_de_pass, connection)
connecion.addEventListener('click', function() {
    let Entrer_nom =  localStorage.getItem("nom")
    let  Entrer_E_mail = localStorage.getItem("email")
    let  Entrer_password = localStorage.getItem("password")
    
  if((nom.value === Entrer_nom.value) && (email === Entrer_E_mail) && (password === Entrer_password)){
    window.location.href = '/Users/imac-09/Desktop/Site_d-application_web.github.io/index.html'
  }
})
