import { projects, refreshStorage } from "./storage"
import { renderTasks } from "./renderTask"
import { projectFactory } from "./project"

let currentTaskName;

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
    let priorityObj = validatePriority()
    let jsonObject = validateTaskForm()
    console.log(priorityObj)
    
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
const validateEditTaskForm = () => {
    const form = document.querySelector('#modalFormEditTask')
    const formData = new FormData(form)
    const json = JSON.stringify(Object.fromEntries(formData));
    const jsonObject = JSON.parse(json)
    form.reset()
    if (jsonObject.taskTitle === "") {
        const taskTitle = document.querySelector("#taskTitleEdit")
        taskTitle.setAttribute("placeholder", "Cannot be empty!")
        return null
    }
    return jsonObject
}

const validatePriorityEdit = () => {
    let priorityObj;
    const priorityBtns = document.querySelectorAll(".priorityEdit")
    priorityBtns.forEach(priority => {
        if (priority.checked) {
            priorityObj = priority.id
        }
    })
    return priorityObj
}
const handleEditTask = (e) => {
    const { target } = e
    if (target.classList.contains("icon")) {
        currentTaskName = target.parentElement.parentElement.parentElement.getAttribute('data-attr')
    } else if (target.classList.contains("list-group-item")) {
        currentTaskName = target.getAttribute('data-attr')
    }
    
    let currentProjectName = determineActiveProject()
    const taskTitleValue = document.querySelector("#taskTitleEdit")
    const taskDescriptionValue = document.querySelector("#taskDescriptionEdit")
    const taskDueDateValue = document.querySelector("#taskDueDateEdit")
    
    // customise value in modal
    projects.forEach(project => {
        if (project.name === currentProjectName) {
            project.tasks.forEach(task => {
                if (task.name === currentTaskName) {
                    console.log(task.name)
                    console.log(task.description)
                    console.log(task.dueDate)

                    taskTitleValue.value = task.name
                    taskDescriptionValue.value = task.description
                    taskDueDateValue.value = task.dueDate
                    let priorityValue = task.priority
                    priorityValue += "Edit"
                    const priorityRadioBtnsEdit = document.querySelectorAll(".priorityEdit")
                    priorityRadioBtnsEdit.forEach(btn => {
                        if (priorityValue === btn.id) {
                            btn.checked = true
                        } else {
                            btn.checked = false
                        }
                    })
                }
            })
        }
    })
}
// save changes in modal and save to storage
const saveEditTask = (e) => {
    console.log(e)
    let currentProjectName = determineActiveProject()
    let priorityObj = validatePriorityEdit()
    let jsonObject = validateEditTaskForm()
    
    console.log(jsonObject)
    console.log(priorityObj)
    projects.forEach(project => {
        if (project.name === currentProjectName) {
            project.tasks.forEach(task => {
                if (task.name === currentTaskName) {
                    console.log(task)
                    task.name = jsonObject.taskTitleEdit
                    task.description = jsonObject.taskDescriptionEdit
                    task.dueDate = jsonObject.taskDueDateEdit
                    task.priority = priorityObj
                }
            })
        }
    })
    refreshStorage(projects)
    renderTasks()
}


function _getID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

export { handleNewTask, determineActiveProject, handleEditTask, saveEditTask }