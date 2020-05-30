const TodoContainer = (name) => {
    const todos = [];

    const getName = () => {
        return name;
    }
    const getTodos = () => {
        return todos;
    }
    const addTodo = (todo) => {
        todos.push(todo)
    }
    const removeTodo = (todoID) => {
        const index = todos.findIndex(todo => {
            return todo.getTodoID() === todoID;
        })
        todos.splice(index, 1);
    }
    return {
        getTodos,
        addTodo,
        getName,
        removeTodo
    }
}
export default TodoContainer;