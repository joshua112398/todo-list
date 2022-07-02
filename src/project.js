// PROJECT OBJECT //////////////////////////////////

import {addTodoDOM} from "./dom.js"

const project = function(title) {

    const todos = []; // array composed of todo items

    const addTodo = function(todo) {
        // add todo item to logic
        todos.push(todo);

        // add todo item to DOM
        addTodoDOM();
    }

    const removeTodo = function(index) {
        todos.splice(index, 1);
    }

    const displayTodos = function() {
        todos.forEach((todo) => {
            addTodoDOM(todo.title, todo.description);
        })
    }

    return {addTodo, title}
}

export {project};