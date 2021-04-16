import { handleRemoveProject } from "./project";
import { projects } from "./storage"
// Render projects from storage
const renderProjects = (() => {
    const sidebar = document.querySelector("#sidebarProjects")

    sidebar.innerHTML = ""

    projects.forEach(project => {
        const projectItem = document.createElement("a")
        projectItem.classList.add("list-group-item", "list-group-item-action")
        projectItem.setAttribute("data-attr", project['id'])
        projectItem.innerHTML = project['projectName']
        

        const closeBtn = document.createElement("button")
        closeBtn.setAttribute("type", "button")
        closeBtn.setAttribute("class", "btn-close")
        closeBtn.setAttribute("aria-label", "Close")
        closeBtn.setAttribute("id", "closeProject")
        closeBtn.addEventListener('click', () => {
            handleRemoveProject(project['projectName'])
        })

        projectItem.appendChild(closeBtn)
        // <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        
        sidebar.appendChild(projectItem)
    })
});

export { renderProjects }
