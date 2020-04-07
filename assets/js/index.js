const buttonAdd = document.getElementById("submitForm")
const buttonSearch = document.getElementById("searchList")
const addList = (event)=>{
    event.preventDefault();
    let addBarang = document.getElementById("inlineFormInputName2").value;
    let todos = get();
    if(addBarang){
        todos.push(addBarang);
        save(todos);
        tampilkanBarang();
    }
    else{
        alert("Inputan tidak boleh kosong")
    }
}

let get = () =>{
    if(localStorage.todos){
        return JSON.parse(localStorage.todos);
    }
    else{
        localStorage.todos = "[]";
        return [];
    }
}
let save = (barang) =>{
    localStorage.todos = JSON.stringify(barang)
}

let tampilkanBarang = (barang = get())=>{
    let tampil = document.getElementById("list-todos");
    if(barang.length!=0){
        tampil.innerHTML = "";
        for(let i = 1 ; i<barang.length ; i++){
            tampil.innerHTML += `<li class ="">
            <span id = barang-${i}>${barang[i]}</span>
            <button id = hapus-${i} class="btn btn-outline-dark btn-sm" aria-hidden="true" aria-hidden="true" onclick = "hapusButton(this)" >hapus</button>
            <button id = edit-${i} class="btn btn-outline-dark btn-sm" aria-hidden="true"  onclick = "editButton(this)">edit</button> 
            </li>`
        }
    }
}

let tampilkanSearch = (barang = get())=>{
    let tampil = document.getElementById("list-todos");
    if(barang.length!=0){
        tampil.innerHTML = "";
        for(let i = 0 ; i<barang.length ; i++){
            tampil.innerHTML += `<li class ="d-flex justify-content-between">
            <span id = barang-${i}>${barang[i]}</span> 

            </li> `
        }
    }
}
const hapusButton = (posisi)=>{
    let todos = get();
    let id = posisi.id.replace("hapus-", "");
    todos.splice(id,1);
    save(todos);
    tampilkanBarang();
}

const editButton = (posisi)=>{
    let todos = get();
    let id = posisi.id.replace("edit-", "")
    const ubah = prompt(`ubah ${todos[id]}`)
    if(ubah){
        todos[id] = ubah ;
        save(todos);
        tampilkanBarang();
    }
    else{
        alert("Edit Belum di lakukan")
        tampilkanBarang();
    }
    
}
const searchList = (event)=>{
    event.preventDefault();
    let todos = get();
    let textSearch = document.getElementById("inlineFormInputName1").value.toLowerCase();
    let result = todos.filter(item=>{
        if(item.includes(textSearch)){
            return item;
        }
    })
    if (result.length!=0){
        tampilkanSearch(result);
        
        
    }
    else{
        alert("Barang Tidak Di Temukan")
    }
    
}
buttonAdd.addEventListener('click', addList);
buttonSearch.addEventListener('click', searchList)