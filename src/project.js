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
    // Identify project
    let prj;
    projects.forEach(project => {
        if (name === project['projectName']) {
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

/* <div class="row">
<div class="col-9">Proj 1</div>
<div class="col-3">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newTask">+ New Task</button>
</div>
</div> */

const handleActiveProject = (e) => {
    console.log(e)
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

}
// Generate unique ID for project
function _getID() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

export { addProject, handleRemoveProject, handleActiveProject };