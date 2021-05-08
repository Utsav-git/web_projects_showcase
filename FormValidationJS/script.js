//Declaring const
const form = document.querySelector(".needs-validation");
const errorFirstName = document.getElementById("errorFirstname");
const errorLastName = document.getElementById("errorLastname");
const errorUserName = document.getElementById("errorUsername");
const errorPassword = document.getElementById("errorPassword");
const errorGender = document.getElementById("errorSelectGender");



// Adding event listeners
form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    checkFirstName(event.target.firstname.value);
    checkLastName(event.target.lastname.value);
    checkUserName(event.target.username.value);
    checkPassword(event.target.password.value);
    checkGender(event.target.gender.value);
    // checkRating(event.target.radio-btn.value);


    event.target.firstname.value = "";
    // errorFirstName.innerHTML = "";
    event.target.lastname.value = "";
    event.target.username.value = "";
    event.target.password.value = "";
    event.target.gender.value = "";
    // event.target.radio-btn.value = "" ;



});

// Functions
var checkFirstName = (firstName) => {
    var reg = /^[a-zA-Z]+$/;
    if(!(firstName.match(reg))){
         errorFirstName.innerHTML = "Please use alphabets only";
    }
    if(firstName === ""){
        errorFirstName.innerHTML = "Firstname can't be empty"
    }
    if(firstName.match(reg)){
        errorFirstName.innerHTML = "";
    }
}
var checkLastName = (lastName) => {
    var reg = /^[a-zA-Z]+$/;
    if(!(lastName.match(reg))){
         errorLastName.innerHTML = "Please use alphabets only";
    }
    if(lastName === ""){
        errorLastName.innerHTML = "Lastname can't be empty"
    }
    if(lastName.match(reg)){
        errorLastName.innerHTML = "";
    }
}
var checkUserName = (userName) => {
    var reg = /^[a-zA-Z]+$/;
    if(!(userName.match(reg))){
         errorUserName.innerHTML = "Please use alphabets only";
    }
    if(userName === ""){
        errorUserName.innerHTML = "Username can't be empty"
    }
    if(userName.match(reg)){
        errorUserName.innerHTML = "";
    }
}

var checkPassword = (password) => {
   
    var minLength = 5;
    var maxLength = 10;

    
    if(!(password === "")){
        errorPassword.innerHTML = "";
    }
    if((password.length < minLength || password.length > maxLength)) {
        errorPassword.innerHTML = "Password length must be from 5-10 characters";
    }
}

var checkGender = (gender) => {
    if(gender === ""){
        errorGender.innerHTML = "Please Select a gender";
    }
    if(gender === "male" || gender === "female"){
        errorGender.innerHTML = "";
    }
}