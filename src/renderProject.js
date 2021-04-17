import { handleRemoveProject, handleActiveProject } from "./project";
import { projects } from "./storage"
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

export { renderProjects }
