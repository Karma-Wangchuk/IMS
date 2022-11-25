const username = document.getElementById("username")


const isRequired = (value) => (value === "" ? true : false)

const isBetween = (length, min, max) => 
    length < min || length > max ? false : true

//Validate the form
const isValid = function validate(){

    let isNameValid = checkName()
    
    let formValid = isNameValid;

    if(formValid){
    window.location.assign("otp.html")
    }
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
    const min = 4;
    const max = 25;
    var studentName = username.value.trim();

    if (isRequired(studentName)){
        showError(username, "Name cannot be blank!")
    } else if(nameError(studentName)){
        showError(username, 'Only Alphabets!')
    } else if(!isBetween(studentName.length, min, max)){
        showError(username, `Name must be between ${min} and ${max} characters!`)
    } else{
        showSuccess(username)
        valid = true
    }
    return valid
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

