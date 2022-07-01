// PROJECT OBJECT //////////////////////////////////

const project = function(title) {

    const todos = []; // array composed of todo items

    const addTodo = function(todo) {
        todos.push(todo);
    }

    const removeTodo = function(index) {
        todos.splice(index, 1);
    }

    return {addTodo, title}
}

export {project};