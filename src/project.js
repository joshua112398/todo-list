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
        todoDescription.addEventListener("click", (e) => {
            e.stopPropagation();
            editDescription(todoDOM, todos.length - 1)
        });
    }

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

    const changeTodoDescription = function(index, newDescription) {
        todos[index].changeDescription(newDescription);
    }

    const setCurrentProject = function(state) {
        if (state === true) {
            activeProject = true;
        } else {
            activeProject = false;
        }
    }

    const isActiveProject = function() {
        return activeProject;
    }

    return {addTodo, removeTodo, reloadTodos, changeTodoDescription, setCurrentProject, isActiveProject, todos, title}
}

export {project};