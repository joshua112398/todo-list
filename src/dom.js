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

const switchProject = function(title) {
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


export {addProjectDOM, clearProjectDisplay, switchProject};

