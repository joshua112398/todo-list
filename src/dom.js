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

const addTodoDOM = function (title, description) {
    const div = document.createElement("div");
    div.classList.add("todo");
    const checkbox = document.createElement("div");
    checkbox.classList.add("checkbox");
    const h3 = document.createElement("h3");
    h3.textContent = title;
    const p = document.createElement("p");
    p.textContent = description;

    div.appendChild(checkbox);
    div.appendChild(h3);
    div.appendChild(p);

    const todoList = document.querySelector(".todo-list");
    todoList.appendChild(div);

}



export {addProjectDOM, clearProjectDisplay, loadTitle, clearTodoList, addTodoDOM};

