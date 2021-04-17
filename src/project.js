import { renderProjects } from "./renderProject";
import { renderTasks, handleNewTask } from "./task"
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
    e.classList.add('active')
    // Display title of project
    const mainColumn = document.querySelector('#mainColumn')

    const row = document.createElement("div")
    row.classList.add("row")

    const titleCol = document.createElement("div")
    titleCol.classList.add("col-9")
    titleCol.innerHTML = e.innerText

    const btnCol = document.createElement("div")
    btnCol.classList.add("col-3")

    // Add new task button
    const newTaskBtn = document.createElement("button")
    newTaskBtn.classList.add("btn", "btn-primary")
    newTaskBtn.setAttribute("type", "button")
    newTaskBtn.setAttribute("data-bs-toggle", "modal")
    newTaskBtn.setAttribute("data-bs-target", "#newTask")
    newTaskBtn.innerHTML = "+ New Task"

    btnCol.appendChild(newTaskBtn)

    row.appendChild(titleCol)
    row.appendChild(btnCol)

    mainColumn.appendChild(row)

    renderTasks(e)
}
// Generate unique ID for project
function _getID() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

export { addProject, handleRemoveProject, handleActiveProject };