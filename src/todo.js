// TODO OBJECT //////////////////////////////////

const todo = function(todoTitle, todoDescription) {

    let title = todoTitle;
    let description = todoDescription;

    const changeDescription = function(newDescription) {
        description = newDescription;
    };

    const getDescription = function() {
        return description;
    };

    return {changeDescription, getDescription, title}
}

export {todo};