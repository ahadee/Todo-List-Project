const loginForm = document.getElementById("loginForm")

const userLogin = (event) => {
    event.preventDefault()

    const {email, password} = JSON.parse(localStorage.getItem("tabel user"))
    const emailInput = document.getElementById('email').value
    const passwordInput = document.getElementById('password').value
    // const name = document.getElementById('name').value

    if (emailInput === email && password === passwordInput ) {
        alert("Anda berhasil login")
        window.location.href = `${window.origin}/index.html`
    }
    else {
        alert ('email atau password salah')
    }
}

loginForm.addEventListener("submit", userLogin)