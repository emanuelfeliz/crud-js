const input = document.querySelector("input");
const addButton  = document.querySelector(".btn-add")
const ul = document.querySelector("ul");


addButton.addEventListener("click", (e) =>{
    
   
    e.preventDefault();
    
    const text = input.value;

    const li = document.createElement('li')
    const p = document.createElement('p')
    p.textContent = text;

    li.appendChild(p)
    ul.appendChild(li)
    li.appendChild(addDeleteButton())

    input.value= ""
})

function addDeleteButton() {

    const deleteButton = document.createElement("button")

    deleteButton.textContent = "X"
    deleteButton.className = "btn-delete"
    
    deleteButton.addEventListener("click", (e) =>{


        const item = e.target.parentElement
        ul.removeChild(item);
    })
    return deleteButton
}