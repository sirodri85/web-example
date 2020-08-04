const form = document.querySelector("#info")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (email.value === "" || password.value === "") {
    console.log("Revisar info!")
        } else {
            console.log("Funciona")
    form.submit();
        }
    })