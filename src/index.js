import { headerLoad, newProjectLoad } from "./view"
import { renderProjects } from "./renderProject"
import { addProject } from "./project"
import { handleEditTask, handleNewTask, saveEditTask } from "./task"
import { newProjectModal, newTaskModal, editTaskModal } from "./modal"

    
const btns = document.querySelectorAll("button")
const navEvents = () => {
    btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const { target } = e
            // console.log(target)
            if (target.id === "newProjectBtn") {
                addProject()
                renderProjects()
            }
            if (target.id === "newTaskBtn") {
                handleNewTask(target)
            }
            if (target.id === 'editTaskBtn') {
                saveEditTask(target)
            }
        })
    })
}

const initialLoad = (() => {
    headerLoad()
    newProjectLoad()
    renderProjects()
    navEvents()
})()