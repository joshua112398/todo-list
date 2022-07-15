// TODO OBJECT //////////////////////////////////

const todo = function(todoTitle, todoDescription, todoDate, todoPriority) {

    let title = todoTitle;
    let description = todoDescription;
    let dueDate = todoDate;
    let priority = todoPriority;

    const changeDescription = function(newDescription) {
        description = newDescription;
    };

    const getDescription = function() {
        return description;
    };

    return {changeDescription, getDescription, title, description, dueDate, priority}
}

export {todo};