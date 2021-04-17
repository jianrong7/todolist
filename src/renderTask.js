import { handleRemoveProject, handleActiveProject } from "./project";
import { projects } from "./storage"

// <!-- <div class="row">
// <ul class="list-group">
//     <li class="list-group-item">
//       <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
//       First checkbox
//     </li>
//     <li class="list-group-item">
//       <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
//       Second checkbox
//     </li>
//     <li class="list-group-item">
//       <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
//       Third checkbox
//     </li>
//     <li class="list-group-item">
//       <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
//       Fourth checkbox
//     </li>
//     <li class="list-group-item">
//       <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
//       Fifth checkbox
//     </li>
// </ul>
// </div> -->
// Render tasks from storage
const renderTasks = (e) => {
    let proj;
    console.log(e.getAttribute('data-attr'), "6 HAHA")
    let id = e.getAttribute('data-attr');

    const mainRow = document.createElement("div")
    mainRow.classList.add("row")

    const list = document.createElement("ul")
    list.classList.add("list-group")

    projects.forEach(project => {
        if (project['id'] === id) {
            console.log(project.tasks, "14/task")
            project.tasks.forEach(task => {
                console.log(task)
                const item = document.createElement("li")
                item.classList.add("list-group-item")

                const checkbox = document.createElement("input")
                checkbox.classList.add("form-check-input", "me-1")
                checkbox.setAttribute("type", "checkbox")
                checkbox.setAttribute("value", "")
                checkbox.setAttribute("aria-label", "...")

                item.appendChild(checkbox)
                item.appendChild(task.name)

                list.appendChild(item)
            })
        }
    })

    mainRow.appendChild(list)
};

export { renderTasks }