import { projects, refreshStorage } from "./storage"
import { determineActiveProject, handleEditTask } from "./task"
// Remove task from storage
const removeTask = (e) => {
    const { target } = e
    const activeProjectName = determineActiveProject()
    const taskName = target.parentElement.innerText
    let tsk, prj;
    projects.forEach(project => {
        if (project['name'] === activeProjectName) {
            prj = project
            project.tasks.forEach(task => {
                if (task.name === taskName) {
                    tsk = task
                }
            })
        }
    })
    let projIndex = projects.indexOf(prj)
    projects[projIndex].tasks.splice(projects[projIndex].tasks.indexOf(tsk), 1)
    renderTasks()
    refreshStorage(projects)
}
// Render tasks from storage
const renderTasks = () => {
    const activeProjectName = determineActiveProject()

    const mainColumn = document.querySelector("#mainColumn")
    if (mainColumn.childNodes[1]) {
        mainColumn.removeChild(mainColumn.childNodes[1])
    }
    const mainRow = document.createElement("div")
    mainRow.classList.add("row")

    const list = document.createElement("ul")
    list.classList.add("list-group")

    projects.forEach(project => {
        if (project['name'] === activeProjectName) {
            project.tasks.forEach(task => {
                if (task === 0) {
                    return
                }

                const clickableItem = document.createElement("a")
                
                

                const item = document.createElement("li")
                item.classList.add("list-group-item")
                item.setAttribute("data-attr", task.name)

                const checkbox = document.createElement("input")
                checkbox.classList.add("form-check-input", "me-1")
                checkbox.setAttribute("type", "checkbox")
                checkbox.setAttribute("value", "")
                checkbox.setAttribute("aria-label", "...")
                checkbox.addEventListener("click", (e) => {
                    removeTask(e)
                })

                const taskName = document.createElement("span")
                taskName.innerHTML = task.name

                const icons = document.createElement("a")
                icons.classList.add("icons")

                const editIconBtn = document.createElement("button")
                editIconBtn.classList.add("btn", "btn-primary")
                editIconBtn.setAttribute("type", "button")
                editIconBtn.setAttribute("data-bs-toggle", "modal")
                editIconBtn.setAttribute("data-bs-target", "#editTask")
                editIconBtn.style.backgroundColor = "white"
                editIconBtn.style.border = "0px"
                editIconBtn.addEventListener("click", (e) => {
                    const { target } = e
                    console.log(target)
                    handleEditTask(e)
                })

                const editIcon = document.createElement("img")
                editIcon.src = "/../dist/assets/edit.png"
                editIcon.classList.add("icon", "editIcon")

                editIconBtn.appendChild(editIcon)

                icons.appendChild(editIconBtn)

                item.appendChild(checkbox)
                item.appendChild(taskName)
                item.appendChild(icons)

                clickableItem.appendChild(item)
                clickableItem.setAttribute("data-bs-toggle", "modal")
                clickableItem.setAttribute("data-bs-target", "#editTask")
                clickableItem.addEventListener("click", (e) => {
                    const { target } = e
                    console.log(target)
                    handleEditTask(e)
                })

                list.appendChild(clickableItem)

                mainRow.appendChild(list)
            })
        }
    })
    mainColumn.appendChild(mainRow)
};

export { renderTasks }