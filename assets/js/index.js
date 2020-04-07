// let result = []

const output = document.getElementById("list-todos")
let listTodos = document.getElementById('list-todos')

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

let displayTodo = (list= callStorage()) =>{
    output.innerHTML=""
    list.forEach((element,index )=> {
        const list = document.createElement("li")
        // list.setAttribute('ondblclick', 'editList(event)');
        list.innerHTML = `<span id=edit-${index}>${element}</span><span id=delete-${index}>X</span>`

        listTodos.appendChild(list)
        deleteSpan = document.getElementById(`delete-${index}`).addEventListener('click',deleteListt)
        editSPan = document.getElementById(`edit-${index}`).setAttribute('ondblclick','editList(event)')
    });

}

let addList = (event) => {
    let currentList = callStorage()
    event.preventDefault()
    let input = document.getElementById('inlineFormInputName2').value
    // let createList = document.createElement('li');
    // createList.setAttribute('ondblclick', 'editList(event)');
    // createList.setAttribute('id', 'listEdit')
    // const text = document.createTextNode(input);
    // createList.appendChild(text);
    // let deleteList = document.createElement('span')
    // let textDelete = document.createTextNode('X')
    // deleteList.appendChild(textDelete)
    // createList.appendChild(deleteList);
    // deleteList.setAttribute('onclick', 'deleteListt(event)');
    // deleteList.setAttribute('id', 'listDelete');
    // listTodos.appendChild(createList)

    currentList.push(input)
    saveData(currentList)

    displayTodo(currentList)
    // let spanAttribute = document.querySelector(`span`)
    // spanAttribute.setAttribute('span',`untukX`)
    // deleting
}

let deleteListt = (event) => {
    event.preventDefault();
    const id = event.target.id.replace("delete-", "")
    console.log(id, "id");
    
    const todos = callStorage() // []
    todos.splice(id, 1)
    saveData(todos)
    displayTodo(todos)
    
    // let deleting = document.getElementById('listDelete')
    // let deletingResult = document.querySelector('li')
    // deletingResult.remove(deleting);
}

let editList = (event) => {
    
    event.preventDefault();
    const textTampil = prompt("Masukan to-do baru");
    const textEdit = event.target.id.replace("edit-", "");

    const todos = callStorage()
    todos.splice(textEdit, 1, `${textTampil}`)
    saveData(todos)
    displayTodo(todos)
    
    // li.innerHTML = textEdit;
    // let deleteList = document.createElement('span')
    // let textDelete = document.createTextNode('X')
    // deleteList.appendChild(textDelete)
    // createList.appendChild(deleteList);
    // // deleteList.classList.add('idSpan')
    // deleteList.setAttribute('onclick', 'deleteListt(event)');
    // deleteList.setAttribute('id', 'listDelete');
    // listTodos.appendChild(createList)
}

let searchList = list => {
    event.preventDefault()
    let todoList = JSON.parse(localStorage.getItem('dbList'))
    let input = document.getElementById('inlineFormInputName1').value
    // let result = []

    let result = todoList.filter(item => {
        if (item.includes(input)) {
            return item
        }
    })

    console.log(result);

}

function logout() {
    // localStorage.clear();
    window.location.href = 'register.html'
}
displayTodo()
let button = document.getElementById('submitForm')
button.addEventListener('click', addList)
// listTodos.addEventListener("click", deleteListt)

// let span = document.



