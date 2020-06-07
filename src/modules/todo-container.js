let projectIndex = localStorage.projectIndex || 0;

const TodoContainer = (name) => {
    let projectID = `project-${localStorage.projectIndex = ++projectIndex}`;
    const todos = [];
    const getProjectID = () {
        return projectID
    }
    const getName = () => {
        return name
    }
    const getTodos = () => {
        return todos
    }
    const addTodo = (todo) => {
        todos.push(todo)
    }
    return {
        getProjectID,
        getName,
        getTodos,
        addTodo
    }
}

export default TodoContainer;