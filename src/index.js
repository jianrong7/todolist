import { headerLoad, newProjectLoad } from "./view"

import { renderProjects } from "./renderProject"

import { addProject } from "./project"
import { taskFactory } from "./task"
import { newProjectModal, newTaskModal } from "./modal"
    headerLoad()
    newProjectLoad()
    renderProjects()
const btns = document.querySelectorAll("button")
btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const { target } = e
        console.log(target)
        if (target.id === "newProjectBtn") {
            addProject()
            renderProjects()
        }

    })
})