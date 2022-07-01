import './style.css';
import {project} from "./project.js"
import {addProjectDOM} from "./dom.js"

const logicController = (() => {
    const projectList = [];

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
        addProjectDOM(projectName); 
        addProjectModal.style.display = "none";
    });
    
    function addProject() {
        // add code to display add project window here
        console.log("Add Project clicked");
        addProjectModal.style.display = "flex";
    };

})();