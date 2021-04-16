import { renderProjects } from "./renderProject";
import { projects } from "./storage"

// Factory function to create project
const projectFactory = (name) => {
    const _id = _getID();
    const tasks = [];
    const addTask = (name) => {
        tasks.push(name);
    };
    return { name, addTask, _id };
};
// Handle the adding of a new project
const addProject = () => {
    // Obtain form data upon submit
    const form = document.querySelector('#modalForm')
    const formData = new FormData(form)
    const json = JSON.stringify(Object.fromEntries(formData));
    const jsonObject = JSON.parse(json)

    // Check for duplicate name
    projects.forEach(project => {
        if (project.name === jsonObject['projectName']) {
            alert('duplicate name')
            return
        }
    })
    jsonObject['id'] = _getID();
    projects.push(jsonObject)
    localStorage.setItem('projects', JSON.stringify(projects))

    form.reset()
};
// Remove a project from projects
const removeProject = (name) => {
    console.log(projects)
    let prj;
    projects.forEach(project => {
        if (name === project['projectName']) {
            prj = project
        }
    })
    if (projects.length > 1) {
        projects.splice(projects.indexOf(prj), 1)
    } else if (projects.length == 1) { 
        projects = []
    }
    console.log(projects)
    localStorage.clear()
    localStorage.setItem('projects', JSON.stringify(projects))
}
// Handle removal of projects
const handleRemoveProject = (name) => {
    removeProject(name)
    renderProjects()

}
// Generate unique ID for project
function _getID() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

export { projectFactory, addProject, removeProject, handleRemoveProject };