const counter = document.getElementById("counter");
const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const resetButton = document.getElementById("reset");
const selamat = document.getElementById("selamat")

const addCounter = () =>{
    counter.innerHTML = Number(counter.innerHTML) + 1;
    if(counter.innerText == 10){
        console.log("selamat");
        selamat.innerHTML += '<h6> Selamat </h6>'
    }
}
const subCounter = () =>{
    if(Number(counter.innerHTML) >0 ){
        counter.innerHTML = Number(counter.innerHTML) - 1;
    }
    else{
        alert("Cannot to sub 0")
    }
    
}
const resetCounter = () =>{
    counter.innerHTML = 0;
    let paragraf = document.querySelector('#selamat h6');
    paragraf.remove(paragraf)
}

addButton.addEventListener('click', addCounter);
subButton.addEventListener('click', subCounter);
resetButton.addEventListener('click', resetCounter);
