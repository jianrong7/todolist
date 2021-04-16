// Load top header (fixed)
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
});
// Load new project btn
const newProjectLoad = (() => {
    const sidebarContainer = document.querySelector("#sidebar");

    const newProjectBtn = document.createElement("button");
    newProjectBtn.setAttribute("type", "button");
    newProjectBtn.setAttribute("class", "btn btn-primary");
    newProjectBtn.setAttribute("data-bs-toggle", "modal");
    newProjectBtn.setAttribute("data-bs-target", "#newProject");
    newProjectBtn.innerText = "+ New Project";

    sidebarContainer.appendChild(newProjectBtn);
})
export { headerLoad, newProjectLoad };