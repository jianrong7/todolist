const projectFactory = (name) => {
    const _id = _getID();
    const tasks = [];
    const addTask = (name) => {
        tasks.push(name);
    };
    return { name, addTask, _id };
};
let projects = [];

const addProject = (name) => {
    projects.forEach(project => {
        if (project.name === name) {
            alert('duplicate name')
        }
    })
    const newProject = projectFactory(name);
    projects.push(newProject)
}
const removeProject = (name) => {
    projects.forEach(project => {
        if (project.name === name) {
            projects.splice(projects.indexOf(project), 1)
        }
    })
}

function _getID() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

export { projectFactory, addProject, projects };