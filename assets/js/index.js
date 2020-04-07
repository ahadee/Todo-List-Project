// let result = []
let callStorage = () => {
    //Mengakses local storage, apabila tidak ada data sebelumnya, mengembalikan array kosong
    if (localStorage.getItem(`dbList`) === null) {
        return []

        //Apabila sudah ada data pada local storage, mengembalikan array berisi data tersebut
    } else {
        return JSON.parse(localStorage.getItem(`dbList`))
    }
}

let saveData = list => {
    localStorage.setItem(`dbList`, JSON.stringify(list))
}


let addList = (event) => {

    event.preventDefault()
    let input = document.getElementById('inlineFormInputName2').value
    let createList = document.createElement('li');
    createList.setAttribute('onclick', 'editList(event)');
    createList.setAttribute('id', 'listEdit')
    const text = document.createTextNode(input);
    createList.appendChild(text);
    let listTodos = document.getElementById('list-todos')
    // console.log(createList);
    let deleteList = document.createElement('span')
    let textDelete = document.createTextNode('X')
    deleteList.appendChild(textDelete)
    createList.appendChild(deleteList);
    // deleteList.classList.add('idSpan')
    deleteList.setAttribute('onclick', 'deleteListt(event)');
    deleteList.setAttribute('id', 'listDelete');
    listTodos.appendChild(createList)
    // console.log(createList);
    
    saveData(createList.innerText)

    // let spanAttribute = document.querySelector(`span`)
    // spanAttribute.setAttribute('span',`untukX`)
    // deleting


}

let deleteListt = (event) => {
    event.preventDefault();
    let deleting = document.getElementById('listDelete')
    let deletingResult = document.querySelector('li')
    deletingResult.remove(deleting);
    console.log(deletingResult);
    
}

let editList = (event) => {
    event.preventDefault();
    let textEdit = prompt("Masukan Kata ang Ingin Di ubah");
    let li = document.querySelector('li');
    li.innerHTML = textEdit;
    // let deleteList = document.createElement('span')
    // let textDelete = document.createTextNode('X')
    // deleteList.appendChild(textDelete)
    // createList.appendChild(deleteList);
    // // deleteList.classList.add('idSpan')
    // deleteList.setAttribute('onclick', 'deleteListt(event)');
    // deleteList.setAttribute('id', 'listDelete');
    // listTodos.appendChild(createList)

}

let searchList = (event) => {
    event.preventDefault()
    let input = document.getElementById('inlineFormInputName2').value

    // if (input == )
}



let button = document.getElementById('submitForm')
button.addEventListener('onclick', addList)

// let span = document.



