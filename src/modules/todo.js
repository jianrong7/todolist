const Todo = (text) => {
    let checked = false;

    const getTodoID = () => getTodoID;
    const getText = () => text || "";
    const isChecked = () => checked;

    const toggleChecked = () => {
        checked = !checked;
    };

    return {
        getText,
        getTodoID,
        isChecked,
        toggleChecked
    }
}

export default Todo