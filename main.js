// const elList = document.querySelector(".list")

// pokemons.forEach((infor)=>{
//     elList.innerHTML += `
    
//     <li class="item">
//         <img src = ${infor.img}>
//         <h2>${infor.name}</h2>
//         <p>${infor.weaknesses}</p>
//         <p>${infor.type}</p>
//     </li>


//     `

    
// })  


const elForm = document.querySelector(".form")
const elInput = document.querySelector(".todo-input")
const elLst = document.querySelector(".lst")

let todo = []
let complated = []
let currentFilter = "all"
function createTodo (){
    elForm.addEventListener("submit", (e) =>{
        e.preventDefault()
        todo.push(elInput.value);
        renderTodo(todo)
    })
}
createTodo()


function renderTodo(todo){
    elLst.innerHTML = ""
    console.log(todo);
    
    todo.forEach((data, index)=>{

        if(currentFilter==="done" && !complated[index]) return
        if(currentFilter==="undone" && complated[index]) return
console.log(data);

        elLst.innerHTML +=`
        <li class="item">
        <input type="checkbox" data-index ="${index}" ${complated[index]?"checked":" "}>
        ${data}
        <button class="delete" data-index ="${index}">delete</button>
        <button class="edit" data-index ="${index}">edit</button>
        </li>
        
        `
    })
}

elLst.addEventListener("click", (e) =>{
    const index = e.target.dataset.index
    
    if(e.target.classList.contains("delete")){
        todo.splice(index,1)
        renderTodo(todo)
    }

    if(e.target.classList.contains("edit")){
        const newText = prompt("Please, add new todo!")
        todo[index] = newText
        renderTodo(todo)
    }

    
})

elLst.addEventListener("change", (e) =>{
    if(e.target.type==="checkbox"){
        const index = e.target.dataset.index
        complated[index]= e.target.checked
        renderTodo(todo)
    }
})

const allBtn = document.querySelector(".all")
const successBtn = document.querySelector(".success")
const dangerBtn = document.querySelector(".danger")

allBtn.addEventListener("click", ()=>{
    currentFilter = "all"
    renderTodo(todo)
})
successBtn.addEventListener("click", ()=>{
    currentFilter = "done"
    renderTodo(todo)
})
dangerBtn.addEventListener("click", ()=>{
    currentFilter = "undone"
    renderTodo(todo)

})