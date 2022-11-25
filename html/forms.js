const nameL = document.getElementById("name")
const phone = document.getElementById("phone-number")
const age = document.getElementById("number")



const isRequired = (value) => (value === "" ? true : false)

const isBetween = (length, min, max) => 
    length < min || length > max ? false : true


//To show Error
const showError = (input, message) => {
    const formfield = input.parentElement  //to get the input field element

    // add the error class
    formfield.classList.remove("success")
    formfield.classList.add("error")

    //show the error message
    const error = formfield.querySelector("small")
    error.textContent = message;
}

//To show Success
const showSuccess = (input) => {
    const formfield = input.parentElement  //get the input field element

    // add the success class
    formfield.classList.remove("error")
    formfield.classList.add("success")

    //hide the error message
    const error = formfield.querySelector("small")
    error.textContent = "";
}

//Validate the form
const isValid = function validate(){
    console.log("potato")
    let isNameValid = checkName()
    // let isAgeValid = checkAge()
    // let isPhoneValid = checkPhone()
    
    let formValid = isNameValid

    if(formValid){
    window.location.assign("Home.html")
    }
    return formValid
}

// Validate letters
const nameError = (name) => {
    var letters = /^[A-Za-z\s]+$/;
    if (name.match(letters)) {
      return false;
    } else {
      return true;
    }
}; 

//Validating letters in Name
const checkName = () => {
    let valid = false;
    const min = 3;
    const max = 25;
    var studentName = nameL.value.trim();

    if (isRequired(studentName)){
        showError(nameL, "Name cannot be blank!")
    } else if(nameError(studentName)){
        showError(nameL, 'Only Alphabets!')
    } else if(!isBetween(studentName.length, min, max)){
        showError(nameL, `Name must be between ${min} and ${max} characters!`)
    } else{
        showSuccess(nameL)
        valid = true
    }
    return valid
}

// function checkPhone(inputtxt)
// {
//   var phoneno = /^\d{10}$/;
//   if(inputtxt.value.match(phoneno)) {
//     console.log("true")
//     return true;
//     }else
//     {
//     return false;
//     }
// }

// const checkPhone= () =>{
//     let valid = false;

// }

function redirect(){
    window.location.assign("forms.html")
}