import { handleNewTask } from "./task";

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
            <form id="modalFormTask">
                <div class="mb-3">
                    <label for="taskTitle" class="form-label">Title:</label>
                    <input type="text" class="form-control" id="taskTitle" name="taskTitle" required />
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description:</label>
                    <textarea class="form-control" id="description" rows="3" name="taskDescription" required></textarea>
                </div>
                <div class="mb-3">
                    <label for="dueDate" class="form-label">Due Date:</label>
                    <input type="date" class="form-control" id="dueDate" name="taskDueDate" required />
                </div>
                <div class="mb-3">
                    <label class="form-label">Priority:</label>
                    <div class="form-check">
                        <input class="form-check-input priority" type="radio" name="flexRadioDefault" id="highPriority">
                        <label class="form-check-label" for="highPriority">High</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input priority" type="radio" name="flexRadioDefault" id="mediumPriority" checked>
                        <label class="form-check-label" for="mediumPriority">Medium</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input priority" type="radio" name="flexRadioDefault" id="lowPriority">
                        <label class="form-check-label" for="lowPriority">Low</label>
                    </div>
                </div>
            </form>
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
// Edit Task Modal
const editTaskModal = (() => {
    const modalContainer = document.querySelector('.modalContainer');
    
    const editTaskModal = document.createElement("div");
    editTaskModal.innerHTML = `
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="editTaskLabel">Edit Task</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form id="modalFormEditTask">
                <div class="mb-3">
                    <label for="taskTitleEdit" class="form-label">Title:</label>
                    <input type="text" class="form-control" id="taskTitleEdit" name="taskTitleEdit" required />
                </div>
                <div class="mb-3">
                    <label for="taskDescriptionEdit" class="form-label">Description:</label>
                    <textarea class="form-control" id="taskDescriptionEdit" rows="3" name="taskDescriptionEdit" required></textarea>
                </div>
                <div class="mb-3">
                    <label for="taskDueDateEdit" class="form-label">Due Date:</label>
                    <input type="date" class="form-control" id="taskDueDateEdit" name="taskDueDateEdit" required />
                </div>
                <div class="mb-3">
                    <label class="form-label">Priority:</label>
                    <div class="form-check">
                        <input class="form-check-input priorityEdit" type="radio" name="flexRadioDefault" id="highPriorityEdit">
                        <label class="form-check-label" for="highPriority">High</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input priorityEdit" type="radio" name="flexRadioDefault" id="mediumPriorityEdit" checked>
                        <label class="form-check-label" for="mediumPriority">Medium</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input priorityEdit" type="radio" name="flexRadioDefault" id="lowPriorityEdit">
                        <label class="form-check-label" for="lowPriority">Low</label>
                    </div>
                </div>
            </form>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-primary" id="editTaskBtn">Save changes</button>
        </div>
    </div>
    </div>`;

    editTaskModal.classList.add('modal', 'fade');
    editTaskModal.setAttribute('id', 'editTask')
    editTaskModal.setAttribute('tabindex', '-1')
    editTaskModal.setAttribute('aria-labelledby', 'newTaskLabel')
    editTaskModal.setAttribute('aria-hidden', 'true')

    modalContainer.appendChild(editTaskModal);
})();
export { newProjectModal, newTaskModal, editTaskModal }