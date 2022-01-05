// Register User
const formReg = document.querySelector(".formReg");
const nameReg = document.querySelector("#nameReg");
const emailReg = document.querySelector("#emailReg");
const passwordReg = document.querySelector("#passwordReg");

formReg.addEventListener("submit", (e) => {
    e.preventDefault();

    const loginDetails = {
        name : nameReg.value,
        email : emailReg.value,
        password : passwordReg.value
    };

    fetch("api/user/register", 
    {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(loginDetails), 
    })
        .then((res) => res.json()) 
        .then((response) => {
            localStorage.setItem("user", response.user);
            localStorage.setItem("token", response.token);  
            if (response.redirect===undefined) {
                alert('The User already exist')
            } else {
                alert('New User has register')
                location.href = response.redirect; 
            }      
        });   
});