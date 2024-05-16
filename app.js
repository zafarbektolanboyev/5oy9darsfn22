const searchInput = document.getElementById("searchInput");
const submitBtn = document.getElementById("submitBtn");
const productsList1 = document.getElementById("productsList1");
const todoForm = document.getElementById("todoform");
// modal
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const editForm = document.querySelector("#editForm")

function openModal(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function closeModal(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

overlay.addEventListener("click", () => {
   closeModal(editInput.value);
});
// modal close
let todoArr = [];

todoForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    let date = new Date();


    let todo = {
        id: Math.floor(Math.random() * 1000000),
        text: searchInput.value,
        time: date.toLocaleString("uz-UZ", {
            hour:"2-digit",
            minute:"2-digit",
            second:"2-digit"
        })
    };
    todoArr.push(todo);

    searchInput.value = "";

    createTodos(todoArr);
});

function createTodos(data = todoArr){
    productsList1.innerHTML = "";


    data.forEach(({ id, text, time}) => {
        const li = document.createElement("li");
        

        li.classList.add("list-item");



        li.innerHTML = `<p>${text}</p>
        <p style="color:grey;">${time}</p>
            <div>
                <i class="fa-regular fa-pen-to-square" style="color: rgb(223, 90, 19);" onclick="updateTodo(${id})"></i>
                <i class="fa-regular fa-trash-can" style="color: red;" onclick="deleteTodo(${id})">
            </div>`;


        productsList1.appendChild(li);
    });
};


function deleteTodo(itemid){
    todoArr = todoArr.filter(({ id }) => id !== itemid);

    createTodos(todoArr);
}

function updateTodo(itemid){
    openModal();

    editForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        console.log(editInput.value);

        todoArr = todoArr.map((item) => {
            if(item.id === itemid){
                return{
                    ...item,
                    text: editInput.value,
                };
            };
            return item;
        });
        createTodos();
        closeModal();
    });
};


// let date = new Date();
// console.log(date.toLocaleString("uz-UZ", {
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric"
// }));