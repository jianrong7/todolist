import { projects } from "./storage"
const projectFactory = (name) => {
    const _id = _getID();
    const tasks = [];
    const addTask = (name) => {
        tasks.push(name);
    };
    return { name, addTask, _id };
};

const addProject = () => {
    const formData = new FormData(document.querySelector('#modalForm'))
    const json = JSON.stringify(Object.fromEntries(formData));
    const jsonObject = JSON.parse(json)
    projects.forEach(project => {
        if (project.name === jsonObject['projectName']) {
            alert('duplicate name')
            return
        }
    })
    jsonObject['id'] = _getID();
    projects.push(jsonObject)
    localStorage.setItem('projects', JSON.stringify(projects))
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

export { projectFactory, addProject, removeProject, projects };