import { headerLoad, newProjectLoad } from "./view"

import { renderProjects } from "./renderProject"

import { projectFactory, addProject, removeProject } from "./project"
import { taskFactory } from "./task"
import { newProjectModal, newTaskModal } from "./modal"
    headerLoad()
    newProjectLoad()
    renderProjects()
const btns = document.querySelectorAll("button")
// const addNavEvents = () => {
//     btns.forEach(btn => {
//         btn.addEventListener("click", (e) => {
//             const { target } = e
//             console.log(target)
//             if (target.id === "newProjectBtn") {
//                 addProject()
//                 renderProjects()
//             }
//             if (target.id === "closeProject") {
//                 const projectName = target.parentElement.innerText
//                 removeProject(projectName)
//                 renderProjects()
//                 addNavEvents()
//                 console.log(target.parentElement.innerText)
//             }
//         })
//     })
// }

// const initialLoad = (() => {
//     headerLoad()
//     newProjectLoad()
//     renderProjects()

    
//     addNavEvents()
// })()
btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const { target } = e
        console.log(target)
        if (target.id === "newProjectBtn") {
            addProject()
            renderProjects()
        }
        // if (target.id === "closeProject") {
        //     const projectName = target.parentElement.innerText
        //     console.log(projectName)
        //     removeProject(projectName)
        //     // renderProjects()
        //     // // addNavEvents()
        //     // console.log(target.parentElement.innerText)
        // }
    })
})