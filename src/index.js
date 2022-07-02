import './style.css';
import {project} from "./project.js"
import {addProjectDOM, clearProjectDisplay, switchProject, addTodoDOM} from "./dom.js"

const logicController = (() => {
    const projectList = [];
    let currentProject = "INBOX"; // default container for new todo items

    const projectButton = document.querySelector("#project-button");
    const addProjectButton = document.querySelector("#add-project-button");
    const addProjectModal = document.querySelector("#project-modal");

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
        removeButton.addEventListener("click", () => {
            removeProject(projectDOM);
        });
    });

    function loadProject(project) {
        currentProject = project.title;
        switchProject(project.title);
        const addButton = document.querySelector("#add-task-button");
        addButton.addEventListener("click", () => {
            project.addTodo("a");
        });
    }
    
    function addProject() {
        // add code to display add project window here
        console.log("Add Project clicked");
        addProjectModal.style.display = "flex";
    };

    function removeProject(project) {
        // to remove a project, remove it from the array, then reload DOM's project display
        projectList.splice(project.dataset.index, 1);
        reloadProjectDisplay();
    };

    function reloadProjectDisplay() {
        clearProjectDisplay();
        let index = 0;
        projectList.forEach( (project) => {
            const projectDOM = addProjectDOM(project.title, index);
            const removeButton = projectDOM.querySelector("#delete-project-button");
            removeButton.addEventListener("click", () => {
                removeProject(projectDOM);
            });
            index += 1;
        });
    }

    return {loadProject};
})();

let inbox = project("INBOX");
logicController.loadProject(inbox);

