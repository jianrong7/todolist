import { renderProjects, renderProjectHeader } from "./renderProject";
import { handleNewTask } from "./task"
import { renderTasks } from "./renderTask"
import { projects } from "./storage"

// Factory function to create project
const projectFactory = (name) => {
    const id = _getID();
    const tasks = [0];
    return { name, id, tasks };
};
// Handle the adding of a new project
const addProject = () => {
    // Obtain form data upon submit
    const form = document.querySelector('#modalForm')
    const formData = new FormData(form)
    const json = JSON.stringify(Object.fromEntries(formData));
    const jsonObject = JSON.parse(json)
    let temp = projectFactory(jsonObject.projectName)
    // Check for duplicate name
    projects.forEach(project => {
        if (project.name === jsonObject['projectName']) {
            alert('duplicate name')
            return
        }
    })
    projects.push(temp)
    console.log(temp.tasks)
    console.log(projects, "27")
    localStorage.setItem('projects', JSON.stringify(projects))

    form.reset()
};
// Remove a project from projects
const removeProject = (name) => {
    // Identify project
    let prj;
    projects.forEach(project => {
        if (name === project['name']) {
            prj = project
        }
    })
    // Remove project from array
    if (projects.length > 1) {
        projects.splice(projects.indexOf(prj), 1)
    } else if (projects.length == 1) { 
        projects = []
    }
    // Set projects in localStorage
    localStorage.clear()
    localStorage.setItem('projects', JSON.stringify(projects))
}
// Handle removal of projects
const handleRemoveProject = (name) => {
    removeProject(name)
    renderProjects()
}
// Handle active project
const handleActiveProject = (e) => {
    console.log(e, "57/proj")
    // Make project on sidebar blue
    const projectItems = document.querySelectorAll(".projectItems")
    projectItems.forEach(projectItem => {
        if (projectItem.classList.contains("active")) {
            projectItem.classList.remove("active")
        }
    })
    e.classList.add('active')

    // Display title of project
    renderProjectHeader(e)

    renderTasks(e)
}
// Generate unique ID for project
function _getID() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

export { addProject, handleRemoveProject, handleActiveProject };