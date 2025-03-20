console.log("Henry Perez")
// Collect elements
const myform = document.querySelector("#myform")
const greeting = document.querySelector(".greeting")
const greetuser = document.querySelector(".greetuser")
const btnsubmit = document.querySelector(".btnsubmit")
const errormsg = document.querySelector(".errormsg")

// disable the submit button when the webpage is loaded
window.addEventListener("load", function(){
    btnsubmit.disabled = true
})

myform.addEventListener("submit", function(event){
    event.preventDefault()
        
    // Collect the username
    let username = document.querySelector("#username")
    let usernamevalue = username.value


    // Remove whitespace before and after the username
    usernamevalue = usernamevalue.trim()
    
    // Testing
    // console.log(usernamevalue)
    // validation of username
    if(usernamevalue===""){
        alert("Please enter a username")
        return; // stop the execution of the code
    }

    // print the uername in the greeting message
    greetuser.innerHTML = usernamevalue

    greeting.style.display = "block"

    // clear input value
    username.value=""
})

let password = document.querySelector("#password")
myform.addEventListener("input",function(){
    // Collect the password
    let passwordvalue = password.value

    // Trim password
    passwordvalue = passwordvalue.trim()

    // validation of password
    if(passwordvalue.length<8){
        errormsg.style.display = "block"
        btnsubmit.disabled = true

    }
    else{
        errormsg.style.display = "none"
        btnsubmit.disabled = false
    }


})