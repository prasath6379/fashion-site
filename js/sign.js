const form = document.querySelector("#form")
const firstname = document.querySelector("#firstname")
const lastname = document.querySelector("#lastname")
const email = document.querySelector("#email")
const phonenumber = document.querySelector("#phonenumber")
const password = document.querySelector("#password")
const cpassword = document.querySelector("#cpassword")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
})

function validateInputs() {
    const firstnameVal = firstname.value.trim();
    const lastnameVal = lastname.value.trim();
    const emailVal = email.value.trim();
    const phonenumberVal = phonenumber.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if (firstnameVal === '') {
        setError(firstname, "first name is required")
    } else {
        setSuccess(firstname)
    }

    if (lastnameVal === '') {
        setError(lastname, "last name is required")
    } else {
        setSuccess(lastname)
    }

    if (emailVal === '') {
        setError(email, "email is required")
    } else if (!validateEmail(emailVal)) {
        setError(email, "enter the correct email")
    } else {
        setSuccess(email)
    }

    if (phonenumberVal === '') {
        setError(phonenumber, "phone number is required")
    } else {
        setSuccess(phonenumber)
    }

    if (passwordVal === '') {
        setError(password, "password is required")
    } else if (passwordVal.length < 8) {
        setError(password, "required atleast 8 character")
    } else {
        setSuccess(password)
    }

    if (cpasswordVal === '') {
        setError(cpassword, "confirm password is required")
    } else if (cpasswordVal !== passwordVal) {
        setError(cpassword, "password is not same")
    } else {
        setSuccess(cpassword)
    }
}




function setError(element, message) {
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector(".error")

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')

}



function setSuccess(element) {
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector(".error")

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')

}



const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};