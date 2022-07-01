// MODULE FOR DOM MANIPULATION AND EVENT LISTENERS


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


export {addProjectDOM, clearProjectDisplay};

