// MODULE FOR DOM MANIPULATION AND EVENT LISTENERS


const addProjectDOM = function (name) {
    const projectList = document.querySelector("#project-list ul");
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = name;
    li.appendChild(button);
    projectList.appendChild(li);
}

export {addProjectDOM};

