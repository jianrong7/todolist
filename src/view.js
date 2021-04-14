const headerLoad = (() => {
    const contentContainer = document.querySelector('#body');
    
    const header = document.createElement("div");
    header.innerHTML = `
    <div class="container-fluid">
    <span>To Do List</span>
    </div>`;
    header.classList.add('header');
    header.classList.add('bg-primary')

    contentContainer.prepend(header);
})();

// <div class="list-group list-group-flush" id="sidebar">
// <a href="#" class="list-group-item list-group-item-action active">
//   The current link item
// </a>
// <a href="#" class="list-group-item list-group-item-action">A second link item</a>
// <a href="#" class="list-group-item list-group-item-action">A third link item</a>
// <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
// <a href="#" class="list-group-item list-group-item-action">A disabled link item</a>
// <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newProject">+ New Project</button>

// </div>
// const projectLoad = (() => {
//     const sidebarContainer = document.querySelector("#sidebar");

//     const projectItem = document.createElement("a")
//     projectItem
// });
const newProjectLoad = (() => {
    const sidebarContainer = document.querySelector("#sidebar");

    const newProjectBtn = document.createElement("button");
    newProjectBtn.setAttribute("type", "button");
    newProjectBtn.setAttribute("class", "btn btn-primary");
    newProjectBtn.setAttribute("data-bs-toggle", "modal");
    newProjectBtn.setAttribute("data-bs-target", "#newProject");
    newProjectBtn.innerText = "+ New Project";

    sidebarContainer.appendChild(newProjectBtn);
})()
export { headerLoad, newProjectLoad };