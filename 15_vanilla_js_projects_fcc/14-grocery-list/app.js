// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editId='';
// ****** EVENT LISTENERS **********
form.addEventListener('submit',addItem);
clearBtn.addEventListener('click',clearItems);
// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if(value && !editFlag){
        const element = document.createElement("article");
        element.classList.add("grocery-item");
        const attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `
            <p class="title">${value}</p>
            <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
            </div>
        `;
        list.appendChild(element);
        
        const deleteBtn = element.querySelector(".delete-btn");
        const editBtn = element.querySelector(".edit-btn");
        
        deleteBtn.addEventListener('click',deleteItem);
        editBtn.addEventListener('click',editItem);
        
        displayAlert("item added to the list","success");
        container.classList.add("show-container");

        addToLocalStorage(id,value);
        setBackToDefault();
    }
    else if(value && editFlag){
        editElement.innerHTML = grocery.value;
        displayAlert("value changed","success");
        editLocalStorage(editId,value);
        setBackToDefault();
    }
    else{
        displayAlert("please enter value","danger")
    }
}

function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    },2000);
}

function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    editId = element.dataset.id;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    submitBtn.textContent = "edit";
}

function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length == 0){
        container.classList.remove("show-container");
    }
    displayAlert("item removed","danger");
    setBackToDefault();
    removeFromLocalStorage(id);
}

function clearItems(){
    const items = document.querySelectorAll(".grocery-item");
    if(items.length > 0){
        items.forEach((item)=>{
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert("List is now empty","danger");
    setBackToDefault();
    localStorage.removeItem('grocery-list');
}

function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editId='';
    submitBtn.textContent = 'Submit';
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id,value){
 const grocery = {id, value};
 let items = getListFromLocalStorage();
 
 items.push(grocery);
 localStorage.setItem('grocery-list',JSON.stringify(items));
}

function removeFromLocalStorage(id){
    let items = getListFromLocalStorage();
    items = items.filter((item)=> item.id != id);
    localStorage.setItem('grocery-list',JSON.stringify(items));
}

function editLocalStorage(id,value){
    let items = getListFromLocalStorage();
    items.forEach((item)=>{
        if(item.id === id)
        item.value = value;
    });
    localStorage.setItem('grocery-list',JSON.stringify(items));
}

function getListFromLocalStorage(){
    return localStorage.getItem('grocery-list') ? JSON.parse(localStorage.getItem('grocery-list')) : [];
}
// ****** SETUP ITEMS **********
