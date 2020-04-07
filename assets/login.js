const loginForm = document.getElementById("loginForm");

const userLogin = (event)=>{
    event.preventDefault();
    let userData = JSON.parse(localStorage.getItem('userData'))
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    count = 0;
    for(let i = 0 ; i<userData.length ; i++){
        if(emailInput === userData[i].email && passwordInput === userData[i].password){
            count =+ 1;
            alert("berhasil Login");
            window.location.href = `${window.origin}/index.html`;
            break;
        }
    }
    if(count ==0){
        alert("email atau Password salah")
    }

}
loginForm.addEventListener("submit", userLogin);