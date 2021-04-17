import { projects } from "./storage"
import { projectFactory } from "./project"

const taskFactory = (name, description, dueDate, priority) => {
    const id = _getID()
    return { name, description, dueDate, priority, id }
};
const renderTasks = (e) => {
    let proj;
    console.log(e.getAttribute('data-attr'))
    let id = e.getAttribute('data-attr');
    projects.forEach(project => {
        if (project['id'] === id) {
            console.log(project.tasks, "14/task")
        }
    })
};
const addTask = () => {

    // taskFactory(name, description, dueDate, priority)
};
/* <div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDefault" id="highPriority">
<label class="form-check-label" for="highPriority">High</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDefault" id="mediumPriority" checked>
<label class="form-check-label" for="mediumPriority">Medium</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDefault" id="lowPriority">
<label class="form-check-label" for="lowPriority">Low</label>
</div> */
const handleNewTask = (e) => {
    const form = document.querySelector('#modalFormTask')
    const formData = new FormData(form)
    const json = JSON.stringify(Object.fromEntries(formData));
    const jsonObject = JSON.parse(json)
    if (jsonObject.taskTitle === "") {
        const taskTitle = document.querySelector("#taskTitle")
        taskTitle.setAttribute("placeholder", "Cannot be empty!")
        return
    }

    let priorityObj;
    const priorityBtns = document.querySelectorAll(".priority")
    priorityBtns.forEach(priority => {
        if (priority.checked) {
            priorityObj = priority.id
        }
    })

    taskFactory(jsonObject.taskTitle, jsonObject.taskDescription, jsonObject.taskDueDate, priorityObj)
    console.log(jsonObject)

    const projectItems = document.querySelectorAll(".projectItems")
    projectItems.forEach(projectItem => {
        if (projectItem.classList.contains("active")) {
            console.log(projectItem.innerText)
        }
    })
}

function _getID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

export { taskFactory, renderTasks, handleNewTask }