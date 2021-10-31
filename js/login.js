// const todoContainer = document.querySelector("#todo_container");
const todoContainer = document.querySelector("#logged-in-container");
const login = document.querySelector("#login_container");
const registerContainer = document.querySelector("#register");
const loginId = document.querySelector("#login_id");
const loginPw = document.querySelector("#login_pw");
const loginBtn = document.querySelector("#login_btn");
// const logoutBtn = document.querySelector("#logout_btn");
const logoutBtn = document.querySelector("#logout-text");
const registerBtn = document.querySelector("#register_btn");
const registerId = document.querySelector("#register_id");
const registerPw = document.querySelector("#register_pw");
const confirmBtn = document.querySelector("#confirm_btn");
const cancelBtn = document.querySelector("#cancel_btn");
const greetingMsg = document.querySelector("#greeting");
const weatherPanel = document.querySelector("#weather");
const clockPanel = document.querySelector("#clock");

function checkValue(){
    console.log("checkvalue")
    const ID = loginId.value;
    const PASSWORD = loginPw.value; 
    if(localStorage.getItem(ID) == PASSWORD) {
        localStorage.setItem("loggedIn",ID)
        alert(`Hello! ${ID}`)
        logIn()
    }else{
        alert("WRONG id/password")
    }
}
function register(){
    login.classList.add("hidden")
    registerContainer.classList.remove("hidden")
}
function confrimRegister(){
    const ID = registerId.value
    const PASSWORD = registerPw.value
    if(ID=="" || PASSWORD=="" || ID=="todos"){
        alert("Please enter id and password!")
    }else{
        if(localStorage.getItem(ID)) {
            alert("This id is already in use")
        }else{
            console.log(ID,PASSWORD)
            localStorage.setItem(ID,PASSWORD)
        }
    }
    
    login.classList.remove("hidden")
    registerContainer.classList.add("hidden")
}

function cancelRegister(){
    clearLoginInput()
    registerContainer.classList.add("hidden")
    login.classList.remove("hidden")
}
function clearLoginInput(){
    registerId.value=""
    registerPw.value=""
}
function logIn(){
    clearLoginInput()
    login.classList.add("hidden")
    registerContainer.classList.add("hidden")
    todoContainer.classList.remove("hidden")
    weatherPanel.classList.add("logged-in-clock-weather")
    clockPanel.classList.add("logged-in-clock-weather")

    greetingMsg.innerText = `Hello ${localStorage.getItem("loggedIn")}!`

}

function logOut(){
    login.classList.remove("hidden")
    registerContainer.classList.add("hidden")
    todoContainer.classList.add("hidden")
    weatherPanel.classList.remove("logged-in-clock-weather")
    clockPanel.classList.remove("logged-in-clock-weather")
    localStorage.removeItem("loggedIn");
}

loginBtn.addEventListener("click", checkValue)
logoutBtn.addEventListener("click", logOut)
registerBtn.addEventListener("click", register)
confirmBtn.addEventListener("click", confrimRegister)
cancelBtn.addEventListener("click", cancelRegister)
loginPw.addEventListener("keypress", function(e){
    if(e.key === 'Enter'){
        checkValue()
    }
});

const loggedIn = localStorage.getItem("loggedIn");

if (loggedIn !== null) {
    logIn()
}