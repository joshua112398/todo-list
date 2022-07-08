// MODULE FOR DOM MANIPULATION


const addProjectDOM = function (name, index) {
    const projectList = document.querySelector("#project-list ul");
    const project = document.createElement("li");
    const projectButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    project.classList.add("project");
    projectButton.textContent = name;
    project.appendChild(projectButton);
    deleteButton.textContent = "x";
    deleteButton.setAttribute("id", "delete-project-button");
    project.appendChild(deleteButton);
    projectList.appendChild(project);

    project.dataset.index = index;

    return project;
}

const clearProjectDisplay = function() {
    const projectList = document.querySelector("#project-list ul");
    while (projectList.firstChild) {
        projectList.removeChild(projectList.firstChild);
    }
}

const loadTitle = function(title) {
    const mainTitle = document.querySelector(".main-title");
    while (mainTitle.firstChild) {
        mainTitle.removeChild(mainTitle.firstChild);
    }
    const header = document.createElement("h2");
    const button = document.createElement("button");

    button.setAttribute("id", "add-task-button");
    button.textContent = "Add";
    header.textContent = title;

    mainTitle.appendChild(header);
    mainTitle.appendChild(button);
}

const clearTodoList = function(project) {
    const todoList = document.querySelector(".todo-list");
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
}

const addTodoDOM = function (todo, index, project) {
    const div = document.createElement("div");
    div.addEventListener("click", toggleDescription);
    div.classList.add("todo");
    const checkbox = document.createElement("div");
    checkbox.classList.add("checkbox");
    checkbox.addEventListener("click", () => {
        console.log(project);
        project.removeTodo(index);
    });
    const h3 = document.createElement("h3");
    h3.textContent = todo.title;
    const p = document.createElement("p");
    p.textContent = todo.description;
    p.addEventListener("click", (e) => {
        e.stopPropagation();
        editDescription(p);
    })
    p.style.display = "none";

    div.appendChild(checkbox);
    div.appendChild(h3);
    div.appendChild(p);

    const todoList = document.querySelector(".todo-list");
    todoList.appendChild(div);
}

const toggleDescription = function () {
    const description = this.querySelector("p");
    // If no description exists, abort function
    if (description === null) {
        return;
    }
    // Else, toggle description visibility
    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}

const editDescription = function (descriptionDOM) {
    const oldDescription = descriptionDOM.textContent;
    const todo = descriptionDOM.parentNode;
    todo.removeChild(todo.lastChild); // delete description
    const descInput = document.createElement("input");
    todo.appendChild(descInput);
    // Once user clicks outside the textbox, update the description to the inputted value
    descInput.addEventListener("blur", () => {
        const newDescription = document.createElement("p");
        newDescription.textContent = descInput.value;
        newDescription.addEventListener("click", (e) => {
            e.stopPropagation();
            editDescription(newDescription);
        });
        todo.appendChild(newDescription);
        todo.removeChild(descInput);
    })
    
}



export {addProjectDOM, clearProjectDisplay, loadTitle, clearTodoList, addTodoDOM};

