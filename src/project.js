// PROJECT OBJECT //////////////////////////////////

import {addTodoDOM, clearTodoList} from "./dom.js"

const project = function(title) {

    const todos = []; // array composed of todo items
    let activeProject = false;

    const addTodo = function(todo) {
        // add todo item to logic
        todos.push(todo);

        // add todo item to DOM
        addTodoDOM(todo, todos.length - 1, this);
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
            addTodoDOM(todo, index, this);
            index += 1;
        })
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

    return {addTodo, removeTodo, reloadTodos, setCurrentProject, isActiveProject, todos, title}
}

export {project};