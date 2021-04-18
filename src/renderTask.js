import { projects } from "./storage"
// Render tasks from storage
const renderTasks = (e) => {
    let proj;
    console.log(e.getAttribute('data-attr'), "6 HAHA")
    let id = e.getAttribute('data-attr');

    const mainColumn = document.querySelector("#mainColumn")

    const mainRow = document.createElement("div")
    mainRow.classList.add("row")

    const list = document.createElement("ul")
    list.classList.add("list-group")

    projects.forEach(project => {
        if (project['id'] === id) {
            console.log(project.tasks, "14/task")
            project.tasks.forEach(task => {

                console.log(task, 'what')

                const item = document.createElement("li")
                item.classList.add("list-group-item")

                const checkbox = document.createElement("input")
                checkbox.classList.add("form-check-input", "me-1")
                checkbox.setAttribute("type", "checkbox")
                checkbox.setAttribute("value", "")
                checkbox.setAttribute("aria-label", "...")

                const taskName = document.createElement("span")
                taskName.innerHTML = task.name

                item.appendChild(checkbox)
                item.appendChild(taskName)

                list.appendChild(item)

                mainRow.appendChild(list)
            })
        }
    })
    mainColumn.appendChild(mainRow)

    
};

export { renderTasks }