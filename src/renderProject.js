import { handleRemoveProject, handleActiveProject } from "./project";
import { projects, refreshStorage } from "./storage"
// Render projects from storage
const renderProjects = (() => {
    const sidebar = document.querySelector("#sidebarProjects")

    sidebar.innerHTML = ""

    projects.forEach(project => {
        const projectItem = document.createElement("a")
        projectItem.classList.add("list-group-item", "list-group-item-action", "projectItems")
        projectItem.setAttribute("data-attr", project['id'])
        projectItem.innerHTML = project['name']
        projectItem.addEventListener("click", (e) => {
            const { target } = e
            handleActiveProject(target)
        })
        

        const closeBtn = document.createElement("button")
        closeBtn.setAttribute("type", "button")
        closeBtn.setAttribute("class", "btn-close")
        closeBtn.setAttribute("aria-label", "Close")
        closeBtn.setAttribute("id", "closeProject")
        closeBtn.addEventListener('click', () => {
            handleRemoveProject(project['name'])
        })

        projectItem.appendChild(closeBtn)

        sidebar.appendChild(projectItem)
    })
});
const renderProjectHeader = ((e) => {
    const mainColumn = document.querySelector('#mainColumn')
    mainColumn.innerHTML = ""

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
})

export { renderProjects, renderProjectHeader }
