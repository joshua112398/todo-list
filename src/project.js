// PROJECT OBJECT //////////////////////////////////

import {addTodoDOM, clearTodoList, editDescriptionDOM} from "./dom.js"

const project = function(title) {

    const todos = []; // array composed of todo items
    let activeProject = false;

    const addTodo = function(todo) {
        // add todo item to logic
        todos.push(todo);

        // add todo item to DOM
        const todoDOM = addTodoDOM(todo, todos.length - 1, this);
        const todoDescription = todoDOM.querySelector("p");

        // if description is clicked, run the editDescription function
        todoDescription.addEventListener("click", (e) => {
            e.stopPropagation();
            editDescription(todoDOM, todos.length - 1)
        });

        console.log(this);
    }

    // editDescription lets users edit a description; then the description of the todo gets
    // updated to the new one the user entered once the user clicks out of the text box
    const editDescription = function(todoDOM, index) {
        const todoDescription = todoDOM.querySelector("p");
        const inputDesc = editDescriptionDOM(todoDescription);
        inputDesc.addEventListener("blur", () => {
            changeTodoDescription(index, inputDesc.value);
            const newDescription = document.createElement("p");
            newDescription.textContent = inputDesc.value;
            newDescription.addEventListener("click", (e) => {
                e.stopPropagation();
                editDescription(todoDOM, index);
            });
            todoDOM.appendChild(newDescription);
            todoDOM.removeChild(inputDesc);
        })
    }

    const removeTodo = function(index) {
        // remove todo item from logic
        todos.splice(index, 1);

        // refresh updated DOM todo liset
        this.reloadTodos();
    }

    // reload/refresh the display of todo items
    const reloadTodos = function() {
        clearTodoList();
        let index = 0;
        todos.forEach((todo) => {
            const todoDOM = addTodoDOM(todo, index, this);
            const todoDescription = todoDOM.querySelector("p");
            todoDescription.addEventListener("click", (e) => {
                e.stopPropagation();
                editDescription(todoDOM, todos.length - 1)
            });
            index += 1;
        })
    }

    // change the description property of the specified todo object
    const changeTodoDescription = function(index, newDescription) {
        todos[index].changeDescription(newDescription);
        console.log(todos[index].getDescription());
    }

    // set this project as the currently active project
    const setCurrentProject = function(state) {
        if (state === true) {
            activeProject = true;
        } else {
            activeProject = false;
        }
    }

    // check if this project is the currently active project
    const isActiveProject = function() {
        return activeProject;
    }

    return {addTodo, removeTodo, reloadTodos, changeTodoDescription, setCurrentProject, isActiveProject, todos, title}
}

export {project};