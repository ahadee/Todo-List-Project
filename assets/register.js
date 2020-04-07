const registerForm = document.getElementById("registerForm")


const userRegistration = (event) => {
    count = 0;
    var userDataAll = [];
    event.preventDefault();
    var emailInput = document.getElementById("email").value;
    var namaInput = document.getElementById("nama").value;
    var passwordInput = document.getElementById("password").value;
    if(email === "" || nama ==="" ||password ===""){
        alert("form tidak bisa kosong")
    }
    else{
        const userData = {
            email : emailInput,
            nama : namaInput, 
            password: passwordInput
        };
        userDataAll = localStorage.getItem('userData') === null ? [] : JSON.parse(localStorage.getItem('userData'));
        // console.log(userDataAll);
        let userCek = JSON.parse(localStorage.getItem('userData'));
        
        for(let i = 0 ; i<userCek.length ; i++){
            if(emailInput===userCek[i].email){
                count++
                alert("email telah terdaftar");
                break;
            }
        }
        if(count==0){
            userDataAll.push(userData) ;
            localStorage.setItem("userData", JSON.stringify(userDataAll));
            window.location.href = `${window.origin}/login.html` ;
        }
        
       
    }
}

registerForm.addEventListener("submit", userRegistration)