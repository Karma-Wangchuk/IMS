const username = document.getElementById("username")
const passwd = document.getElementById("passwd")

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

    let isNameValid = checkName()
   
    let isPasswordValid = checkPassword()
    
    let formValid = isNameValid && isPasswordValid;

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

//Validating password field
const checkPassword = () => {
    let valid = false;
    const password = passwd.value.trim();

    if (isRequired(password)) {
    showError(passwd, 'Password cannot be blank!');
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