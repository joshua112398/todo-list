import './style.css';
import {project} from "./project.js"
import {todo} from "./todo.js"
import {addProjectDOM, clearProjectDisplay, loadTitle, clearTodoList} from "./dom.js"

let inbox = project("INBOX");
let outbox = project("OUTBOX");

const logicController = (() => {
    const projectList = [];

    let currentProject = "INBOX"; // default container for new todo items

    const projectButton = document.querySelector("#project-button");
    const addProjectButton = document.querySelector("#add-project-button");
    const addProjectModal = document.querySelector("#project-modal");
    const addTodoButton = document.querySelector("#add-todo-button");
    const addTodoModal = document.querySelector("#todo-modal");

    projectButton.addEventListener("click", addProject);


    addProjectButton.addEventListener("click", (e) => {
        e.preventDefault();
        const projectName = document.querySelector("#project-input").value;
        // add new project to logic
        const newProject = new project(projectName);
        projectList.push(newProject);
        // display new project in DOM/website
        const projectDOM = addProjectDOM(projectName, projectList.length-1); 
        addProjectModal.style.display = "none";
        // add event Listener for removal of project
        const removeButton = projectDOM.querySelector("#delete-project-button");
        removeButton.addEventListener("click", (e) => {
            e.stopPropagation();
            removeProject(projectDOM, newProject);
        });
        // add event Listener for selection of project
        projectDOM.addEventListener("click", () => {
            loadProject(newProject);
        });
    });

    function loadProject(project) {
        // show title and set project as the only active project
        loadTitle(project.title);
        projectList.forEach((proj) => {
            proj.setCurrentProject(false);
        })
        project.setCurrentProject(true);
        // implement the "add task" button
        const addButton = document.querySelector("#add-task-button");
        addButton.addEventListener("click", () => {
            addTodoModal.style.display = "flex";
            const addTodoForm = addTodoModal.querySelector(".modal-box form");
            addTodoForm.removeChild(addTodoForm.lastElementChild);
            const confirmTodoButton = document.createElement("button");
            confirmTodoButton.setAttribute("id", "add-todo-button");
            confirmTodoButton.textContent = "Confirm";
            confirmTodoButton.addEventListener("click", (e) => {
                e.preventDefault();
                console.log("Hey");
                const todoName = document.querySelector("#todo-name").value;
                const todoDescription = document.querySelector("#todo-desc").value;

                const newTodo = new todo(todoName, todoDescription);
                project.addTodo(newTodo);
                addTodoModal.style.display = "none";
            });
            addTodoForm.appendChild(confirmTodoButton);
            
        });
        project.reloadTodos();
    }
    
    function addProject() {
        // add code to display add project window here
        addProjectModal.style.display = "flex";
    };

    function removeProject(projectDOM, project) {
        // to remove a project, remove it from the array, then reload DOM's project display
        projectList.splice(projectDOM.dataset.index, 1);
        reloadProjectDisplay();
        // if removed project was the active project, load the default "Inbox" project
        if (project.isActiveProject() === true) {
            loadProject(inbox);
        }
    };

    function reloadProjectDisplay() {
        clearProjectDisplay();
        let index = 0;
        projectList.forEach( (project) => {
            const projectDOM = addProjectDOM(project.title, index);
            const removeButton = projectDOM.querySelector("#delete-project-button");
            removeButton.addEventListener("click", (e) => {
                e.stopPropagation();
                removeProject(projectDOM, project);
            });
            projectDOM.addEventListener("click", () => {
                loadProject(project);
            });
            index += 1;
        });
    }

    return {loadProject};
})();

logicController.loadProject(inbox);
logicController.loadProject(outbox);
logicController.loadProject(inbox);
console.log(outbox);