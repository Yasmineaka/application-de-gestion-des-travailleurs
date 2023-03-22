console.log("liste des employés")
var nom = document.getElementById("nom")
var prenom = document.getElementById("prenom")
var age = document.getElementById("age")
var sex = document.getElementById("sex")
var enregistrer = document.getElementById("enregistrer")

enregistrer.onclick=function(){
    localStorage.setItem(nom.value, prenom.value, age.value, sex.value)
}
