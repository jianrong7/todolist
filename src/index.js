import { headerLoad, newProjectLoad } from "./view"
import { projectFactory, addProject, removeProject, projects } from "./project"
import { taskFactory } from "./task"
import { renderProject } from "./renderProject"
import { newProjectModal, newTaskModal } from "./modal"

const btns = document.querySelectorAll(".btn")
btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const { target } = e

        if (target.id === "newProjectBtn") {
            addProject()
            console.log(projects)
        }
    })
})