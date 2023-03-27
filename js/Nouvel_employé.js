
function validateForm(){
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var age = document.getElementById("age");
    var sex = document.getElementById("sex");
    var contact = document.getElementById("contact");
    // var enregistrer = document.getElementById("enregistrer"); 

    if (nom == ""){
        alert("Vous devez entrer un nom");
        return false;
    }
    if (prenom == ""){
        alert("Vous devez entrer un prenom");
        return false;  
    }
    if (age == ""){
        alert("Vous devez entrer un chiffre");
        return false;
    }
    else if (age < 18){
        alert("les employers doivent avoir au minimum 18ans");
        return false;
    }
    if (sex == ""){
        alert("Vous devez entrer le genre de l'employé");
        return false;
    }

    if (contact == ""){
        alert("Vous devez entrer un contact");
        return false;
    }
    return true;
 
}



function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
      peopleList = []; 
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }
    var html = "";
    peopleList.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.nom + "</td>";
        html += "<td>" + element.prenom + "</td>";
        html += "<td>" + element.age+ "</td>";
        html += "<td>" + element.sex + "</td>";
        html += "<td>" + element.contact+ "</td>";
        html += 
            '<td><button onclick="deleteData(' +
            index +
            ')" class="btn btn-danger">Delete</button><button onclick = "updateData(' +
             index +
            ')" class="btn btn-warning m-2">Edit</button></td>';
        html += "</tr>";
    });
    document.querySelector("#crudTable tbody").innerHTML = 
    html;
}
document.onload = showData();


function addData(){
    if(validateForm()==true){
        var nom = document.getElementById("nom").value;
        var prenom = document.getElementById("prenom").value;
        var age = document.getElementById("age").value;
        var sex = document.getElementById("sex").value;
        var contact = document.getElementById("contact").value;

        var peopleList;
        if (localStorage.getItem("peopleList") == null){
            peopleList = [];
        } else {
            peopleList = JSON.parse(localStorage.getItem
            ("peopleList"));
        }
        peopleList.push({
            nom : nom,
            prenom : prenom,
            age : age,
            sex : sex,
            contact: contact,
        });
        localStorage.setItem("peopleList", JSON.stringify
        (peopleList));
        showData();
        document.getElementById("nom").value = "";
        document.getElementById("prenom").value = "";
        document.getElementById("age").value = "";
        document.getElementById("sex").value = "";
        document.getElementById("contact").value = "";
    }
}








function deleteData(index){
    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList= JSON.parse(localStorage.getItem
            ("peopleList"));
    }
    peopleList.splice(index, 1)
    localStorage.setItem("peopleList",JSON.stringify
    (peopleList));
    showData();
}





function updateData(index){
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "none";

    var peopleList;
    if (localStorage.getItem("peopleList")== null){
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    document.getElementById("name").value = peopleList[index].nom;
    document.getElementById("name").value = peopleList[index].prenom;
    document.getElementById("name").value = peopleList[index].age;
    document.getElementById("name").value = peopleList[index].sex;
    document.getElementById("name").value = peopleList[index].contact;

    document.querySelector("#Update").onclick = function(){
        if (validateForm == true){
        peopleList[index].nom = document.getElementById
        ("nom").value;
        peopleList[index].prenom = document.getElementById
        ("prenom").value
        peopleList[index].age = document.getElementById
        ("age").value
        peopleList[index].sex = document.getElementById
        ("sex").value
        peopleList[index].contact = document.getElementById
        ("contact").value;


        localStorage.setItem("peopleList", JSON.stringify
        (peopleList));

        showData();

        
        document.getElementById("nom").value = "";
        document.getElementById("prenom").value = "";
        document.getElementById("age").value = "";
        document.getElementById("sex").value = "";
        document.getElementById("contact").value = "";

        document.getElementById("Submit").style.display =
        "block";
        document.getElementById("Update").style.display =
        "none";
       }
    }
}