// PROJECT OBJECT //////////////////////////////////

import {addTodoDOM, clearTodoList} from "./dom.js"

const project = function(title) {

    const todos = []; // array composed of todo items

    const addTodo = function(todo) {
        // add todo item to logic
        todos.push(todo);

        // add todo item to DOM
        addTodoDOM(todo.title, todo.description);
    }

    const removeTodo = function(index) {
        // remove todo item from logic
        todos.splice(index, 1);

        // refresh updated DOM todo liset
        reloadTodos();
    }

    const reloadTodos = function() {
        clearTodoList();
        todos.forEach((todo) => {
            addTodoDOM(todo.title, todo.description);
        })
    }

    return {addTodo, removeTodo, reloadTodos, todos, title}
}

export {project};