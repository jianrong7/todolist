import flatpickr from "flatpickr";
import dateFunctions from "./date-functions";

const userInterfaceContainer = (() => {
    const todoListDisplay = document.querySelector(".tasks");
    const createTodoField = document.querySelector(".addTask");

    const getTodoNodeByID = (ID, parentNode) => {
        return parentNode.querySelectorAll(`.task[data-todoid=${ID}]`);
    }

    const createTodoItemHtml = (todo) => {
        const html = `
        <li class="task" data-todoid="${todo.getTodoID()}">
            <img src="assets/tick.png" class="checkbox clickable ${todo.isChecked() ? "checked" : ""} ${todo.getPriority()}">
            <span class="task">Decide to get stuff done</span>
            <img src="assets/trash.png" class="trash delete-todo-button clickable">
        </li>
        `
        return html;
    }

    const createTodoInputField = (container) => {
        const html = ''
    }

    const renderContainer = (container) => {
        const html = container.getTodos().map(todo => {
            return createTodoItemHtml(todo);
        }).join("");

        createTodoInputField(container);
        todoListDisplay.innerHTML = html;
    }
    const clearProjectDisplay = (container) => {
        todoListDisplay.innerHTML = "";
    }

    const removeTodoItem = (todoID) => {
        const todo = getTodoNodesByID(todoID, todoListDisplay)[0];
        todoListDisplay.removeChild(todo);
    }

    const checkTodo = (todoID) => {
        const todoNodes = getTodoNodesByID(todoID, document);
        todoNodes.forEach(todoNode => {
            todoNode.querySelector(".checkbox").classList.toggle("checked");
            todoNode.querySelector(".todo-item-name").classList.toggle("checked");
        });
    }

    return {
        renderContainer,
        removeTodoItem,
        checkTodo,
        clearProjectDisplay
    };
})();

export default userInterfaceContainer;
