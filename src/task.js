import { projects, refreshStorage } from "./storage"
import { renderTasks } from "./renderTask"
import { projectFactory } from "./project"

const taskFactory = (name, description, dueDate, priority) => {
    const id = _getID()
    return { name, description, dueDate, priority, id }
};

const validateTaskForm = () => {
    const form = document.querySelector('#modalFormTask')
    const formData = new FormData(form)
    const json = JSON.stringify(Object.fromEntries(formData));
    const jsonObject = JSON.parse(json)
    form.reset()
    if (jsonObject.taskTitle === "") {
        const taskTitle = document.querySelector("#taskTitle")
        taskTitle.setAttribute("placeholder", "Cannot be empty!")
        return null
    }
    return jsonObject
}
const validatePriority = () => {
    let priorityObj;
    const priorityBtns = document.querySelectorAll(".priority")
    priorityBtns.forEach(priority => {
        if (priority.checked) {
            priorityObj = priority.id
        }
    })
    return priorityObj
}
const determineActiveProject = () => {
    const projectItems = document.querySelectorAll(".projectItems")
    let currentProjectName;
    projectItems.forEach(projectItem => {
        if (projectItem.classList.contains("active")) {
            currentProjectName = projectItem.innerText
        }
    })
    return currentProjectName
}
const handleNewTask = (e) => {
    let jsonObject = validateTaskForm()
    let priorityObj = validatePriority()
    let task = taskFactory(jsonObject.taskTitle, jsonObject.taskDescription, jsonObject.taskDueDate, priorityObj)
    let currentProjectName = determineActiveProject()

    projects.forEach(project => {
        if (currentProjectName === project['name']) {
            // console.log(project)
            project.tasks.push(task)
        }
    })
    refreshStorage(projects)
    renderTasks()
}

function _getID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

export { handleNewTask, determineActiveProject }