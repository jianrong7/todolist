const taskFactory = (name, description, dueDate, priority) => {
    const _id = _getID()
    return { name, description, dueDate, priority, _id }
};

function _getID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

export { taskFactory }