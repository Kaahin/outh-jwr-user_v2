// Login User
const form = document.querySelector(".form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const loginDetails = {
        email: email.value,
        password: password.value
    };

    fetch("api/user/login", 
    {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginDetails), 
    })
        .then((res) => res.json()) 
        .then((response) => {
            localStorage.setItem("token", response.token);
            console.log(response.redirect);
            location.href = response.redirect;  
        })  
});

