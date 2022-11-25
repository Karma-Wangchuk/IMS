// Form Validation 
const fName = document.getElementById("Fname")
const lName = document.getElementById("Lname")
const email = document.getElementById("email")
const passwd = document.getElementById("passwd") 
const cPasswd = document.getElementById("confirmpasswd") 

// Blank Validation
const isRequired = (value) => (value === "" ? true : false)

// Max and Min character verification
const isBetween = (length, min, max) => 
    length < min || length > max ? false : true

// // When "Register" button is pressed
// const onFormSubmit = () => {
//     if (validate()){
//         resetForm
//     }
// }

//resets the form
// const resetForm = () => {
//     fName = ""
//     lName = ""
//     email = ""
//     passwd = ""
//     cPasswd = ""
// }

//Validate the form
const isValid = function validate(){

    let isFNameValid = checkFname()
    let isLNameValid = checkLname()
    let isPasswordValid = checkPassword()
    let isCPasswordValid = checkCPassword();
    
    let formValid = isFNameValid && isLNameValid && isPasswordValid && isCPasswordValid;
    if(formValid){
    window.location.assign("../index.html")
    }
    return formValid
}


// Changes letters to uppercase
const upperCase = (a) => {
    setInterval(function(){
        a.value = a.value[0].toUpperCase()
    }, )
}

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

// Validate letters
const nameError = (name) => {
    var letters = /^[A-Za-z\s]+$/;
    if (name.match(letters)) {
      return false;
    } else {
      return true;
    }
}; 

//Validating letters in fName
const checkFname = () => {
    let valid = false;
    const min = 3;
    const max = 25;
    var Fname = fName.value.trim();

    if (isRequired(Fname)){
        showError(fName, "Name cannot be blank!")
    } else if(nameError(Fname)){
        showError(fName, 'Only Alphabets!')
    } else if(!isBetween(Fname.length, min, max)){
        showError(fName, `Name must be between ${min} and ${max} characters!`)
    } else{
        showSuccess(fName)
        valid = true
    }
    return valid
}

//Validating letters in LName
const checkLname = () => {
    let valid = false;
    const min = 3;
    const max = 25;
    var Lname = lName.value.trim();

    if (isRequired(Lname)){
        showError(lName, "Name cannot be blank!")
    } else if(nameError(Lname)){
        showError(lName, 'Only Alphabets!')
    } else if(!isBetween(Lname.length, min, max)){
        showError(lName, `Name must be between ${min} and ${max} characters!`)
    } else{
        showSuccess(lName)
        valid = true
    }
    return valid
}

//Validating password field
const checkPassword = () => {
    let valid = false;
    const password = passwd.value.trim();

    if (isRequired(password)) {
    showError(passwd, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
    showError(passwd, 'Password must have at least 8 characters that includes at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character');
    } else {
    showSuccess(passwd);
    valid = true;
    }
    return valid;
    };


const isPasswordSecure = (password) => {
    const re = new
    RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
    };
        
const checkCPassword = () => {
    let valid = false;

    // check confirm password
    const confirmPassword = cPasswd.value.trim();
    const pass = passwd.value.trim();
    if (isRequired(confirmPassword)) {
    showError(cPasswd, 'Please enter the password again');
    } else if (pass !== confirmPassword) {
    showError(cPasswd, 'The password does not match');
    } else {
    showSuccess(cPasswd);
    valid = true;
    }
    return valid;
    };