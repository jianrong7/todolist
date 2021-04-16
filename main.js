(()=>{"use strict";let e=[];if(null===localStorage.getItem("projects"))e=[];else{const t=JSON.parse(localStorage.getItem("projects"));e=t}const t=()=>{const a=document.querySelector("#sidebarProjects");a.innerHTML="",e.forEach((n=>{const l=document.createElement("a");l.classList.add("list-group-item","list-group-item-action"),l.setAttribute("data-attr",n.id),l.innerHTML=n.projectName,l.addEventListener("click",(e=>{const{target:t}=e;(e=>{console.log(e),e.classList.add("active");const t=document.querySelector("#mainColumn"),a=document.createElement("div");a.classList.add("row");const n=document.createElement("div");n.classList.add("col-9"),n.innerHTML=e.innerText;const l=document.createElement("div");l.classList.add("col-3");const s=document.createElement("button");s.classList.add("btn","btn-primary"),s.setAttribute("type","button"),s.setAttribute("data-bs-toggle","modal"),s.setAttribute("data-bs-target","#newTask"),s.innerHTML="+ New Task",l.appendChild(s),a.appendChild(n),a.appendChild(l),t.appendChild(a)})(t)}));const s=document.createElement("button");s.setAttribute("type","button"),s.setAttribute("class","btn-close"),s.setAttribute("aria-label","Close"),s.setAttribute("id","closeProject"),s.addEventListener("click",(()=>{(t=>{let a;e.forEach((e=>{t===e.projectName&&(a=e)})),e.length>1?e.splice(e.indexOf(a),1):1==e.length&&(e=[]),localStorage.clear(),localStorage.setItem("projects",JSON.stringify(e))})(n.projectName),t()})),l.appendChild(s),a.appendChild(l)}))};(()=>{const e=document.querySelector(".modalContainer"),t=document.createElement("div");t.innerHTML='\n    <div class="modal-dialog">\n        <div class="modal-content">\n            <div class="modal-header">\n            <h5 class="modal-title" id="newProjectLabel">New Project</h5>\n            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n            </div>\n            <div class="modal-body">\n                <div class="mb-3">\n                    <form id="modalForm">\n                        <label for="newProjectName" class="form-label">Name:</label>\n                        <input type="text" name="projectName" class="form-control" id="newProjectName"></input>\n                    </form>        \n                </div>\n            </div>\n            <div class="modal-footer">\n            <button type="button" class="btn btn-primary" id="newProjectBtn">Save changes</button>\n        </div>\n    </div>',t.classList.add("modal","fade"),t.setAttribute("id","newProject"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-labelledby","newProject"),t.setAttribute("aria-hidden","true"),e.appendChild(t)})(),(()=>{const e=document.querySelector(".modalContainer"),t=document.createElement("div");t.innerHTML='\n    <div class="modal-dialog">\n    <div class="modal-content">\n        <div class="modal-header">\n        <h5 class="modal-title" id="newTaskLabel">New Task</h5>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body">\n            <div class="mb-3">\n                <label for="taskTitle" class="form-label">Title:</label>\n                <input class="form-control" id="taskTitle"></input>\n            </div>\n            <div class="mb-3">\n                <label for="description" class="form-label">Description:</label>\n                <textarea class="form-control" id="description" rows="3"></textarea>\n            </div>\n            <div class="mb-3">\n                <label for="dueDate" class="form-label">Due Date:</label>\n                <input type="date" class="form-control" id="dueDate"></input>\n            </div>\n            <div class="mb-3">\n                <label for="dueDate" class="form-label">Due Date:</label>\n                <input type="date" class="form-control" id="dueDate"></input>\n            </div>\n            <div class="mb-3">\n                <label class="form-label">Priority:</label>\n                <div class="form-check">\n                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="highPriority">\n                    <label class="form-check-label" for="highPriority">High</label>\n                </div>\n                <div class="form-check">\n                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="mediumPriority" checked>\n                    <label class="form-check-label" for="mediumPriority">Medium</label>\n                </div>\n                <div class="form-check">\n                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="lowPriority">\n                    <label class="form-check-label" for="lowPriority">Low</label>\n                </div>\n            </div>\n        </div>\n        <div class="modal-footer">\n        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\n        <button type="button" class="btn btn-primary" id="newTaskBtn">Save changes</button>\n        </div>\n    </div>\n    </div>',t.classList.add("modal","fade"),t.setAttribute("id","newTask"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-labelledby","newTaskLabel"),t.setAttribute("aria-hidden","true"),e.appendChild(t)})(),(()=>{const e=document.querySelector("#body"),t=document.createElement("div");t.innerHTML='\n    <div class="container-fluid">\n    <span>To Do List</span>\n    </div>',t.classList.add("header"),t.classList.add("bg-primary"),e.prepend(t)})(),(()=>{const e=document.querySelector("#sidebar"),t=document.createElement("button");t.setAttribute("type","button"),t.setAttribute("class","btn btn-primary"),t.setAttribute("data-bs-toggle","modal"),t.setAttribute("data-bs-target","#newProject"),t.innerText="+ New Project",e.appendChild(t)})(),t(),document.querySelectorAll("button").forEach((a=>{a.addEventListener("click",(a=>{const{target:n}=a;console.log(n),"newProjectBtn"===n.id&&((()=>{const t=document.querySelector("#modalForm"),a=new FormData(t),n=JSON.stringify(Object.fromEntries(a)),l=JSON.parse(n);e.forEach((e=>{e.name!==l.projectName||alert("duplicate name")})),l.id="_"+Math.random().toString(36).substr(2,9),e.push(l),localStorage.setItem("projects",JSON.stringify(e)),t.reset()})(),t())}))}))})();