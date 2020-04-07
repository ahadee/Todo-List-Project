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
    // callStorage()
    let currentList = callStorage()
    // console.log(currentList);


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
    currentList.push(input)
    console.log(currentList);
    saveData(currentList)
    // let spanAttribute = document.querySelector(`span`)
    // spanAttribute.setAttribute('span',`untukX`)
    // deleting


}

let deleteListt = (event) => {
    event.preventDefault();
    let deleting = document.getElementById('listDelete')
    let deletingResult = document.querySelector('li')
    deletingResult.remove(deleting);
    // console.log(deletingResult);

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

// let searchList = list => {
//     event.preventDefault()
//     let todoList = JSON.parse(localStorage.getItem('dbList'))
//     let input = document.getElementById('inlineFormInputName1').value
//     // let result = []

//     let result = todoList.filter(item => {
//         if (item.includes(input)) {
//             return item
//         }
//     })

//     // console.log(result);

//     let getParent = document.getElementsByTagName('section')[0]
//     let createElementLi = document.createElement('li')
//     let createElementUl = document.createElement('ul')
//     let resultSearch = document.createTextNode(result)

//     createElementLi.appendChild(resultSearch)
//     createElementUl.appendChild(createElementLi)
//     getParent.appendChild(createElementUl)


// }

function logout() {
    // localStorage.clear();
    window.location.href = 'register.html'
}

let button = document.getElementById('submitForm')
button.addEventListener('click', addList)

// let span = document.



