// Add Project Modal
const newProjectModal = (() => {
    const modalContainer = document.querySelector('.modalContainer');
    
    const newProjectModal = document.createElement("div");
    newProjectModal.innerHTML = `
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="newProjectLabel">New Project</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <form id="modalForm">
                        <label for="newProjectName" class="form-label">Name:</label>
                        <input type="text" name="projectName" class="form-control" id="newProjectName"></input>
                    </form>        
                </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="newProjectBtn">Save changes</button>
        </div>
    </div>`;
    newProjectModal.classList.add('modal', 'fade');
    newProjectModal.setAttribute('id', 'newProject')
    newProjectModal.setAttribute('tabindex', '-1')
    newProjectModal.setAttribute('aria-labelledby', 'newProject')
    newProjectModal.setAttribute('aria-hidden', 'true')

    modalContainer.appendChild(newProjectModal);
})();
// Add Task Modal
const newTaskModal = (() => {
    const modalContainer = document.querySelector('.modalContainer');
    
    const newTaskModel = document.createElement("div");
    newTaskModel.innerHTML = `
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="newTaskLabel">New Task</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="mb-3">
                <label for="taskTitle" class="form-label">Title:</label>
                <input class="form-control" id="taskTitle"></input>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description:</label>
                <textarea class="form-control" id="description" rows="3"></textarea>
            </div>
            <div class="mb-3">
                <label for="dueDate" class="form-label">Due Date:</label>
                <input type="date" class="form-control" id="dueDate"></input>
            </div>
            <div class="mb-3">
                <label class="form-label">Priority:</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="highPriority">
                    <label class="form-check-label" for="highPriority">High</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="mediumPriority" checked>
                    <label class="form-check-label" for="mediumPriority">Medium</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="lowPriority">
                    <label class="form-check-label" for="lowPriority">Low</label>
                </div>
            </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-primary" id="newTaskBtn">Save changes</button>
        </div>
    </div>
    </div>`;
    newTaskModel.classList.add('modal', 'fade');
    newTaskModel.setAttribute('id', 'newTask')
    newTaskModel.setAttribute('tabindex', '-1')
    newTaskModel.setAttribute('aria-labelledby', 'newTaskLabel')
    newTaskModel.setAttribute('aria-hidden', 'true')

    modalContainer.appendChild(newTaskModel);
})();
export { newProjectModal, newTaskModal }