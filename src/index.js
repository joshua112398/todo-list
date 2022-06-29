import './style.css';
import {project} from "./project.js"
import {addProjectDOM} from "./dom.js"

const logicController = (() => {
    const projectList = [];

    const projectButton = document.querySelector("#project-button");
    projectButton.addEventListener("click", () => {
        addProject();
    })
    
    function addProject() {
        console.log("Add Project clicked");
        const addProjectModal = document.querySelector("#project-modal");
        addProjectModal.style.display = "flex";
        // add code to display add project window here
        const addProjectButton = document.querySelector("#add-project-button");
        addProjectButton.addEventListener("click", (e) => {
            e.preventDefault();
            const projectName = document.querySelector("#project-input").textContent;
            // add new project to logic
            const newProject = new project(projectName);
            projectList.push(newProject);
            // display new project in DOM/website
            addProjectDOM(projectName); 
            addProjectModal.style.display = "none";
        });
    };

})();