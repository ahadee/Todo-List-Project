const registerForm = document.getElementById("registerForm")

const userRegistration = (event) => {
    event.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const name = document.getElementById('name').value

    const userData = {
        email,
        password,
        name,
    }

    localStorage.setItem("tabel user", JSON.stringify(userData))

    window.location.href = `${window.origin}/login.html`;

}

registerForm.addEventListener("submit", userRegistration)