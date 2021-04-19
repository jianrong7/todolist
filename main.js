(()=>{"use strict";let e=[];if(null===localStorage.getItem("projects"))e=[];else{const t=JSON.parse(localStorage.getItem("projects"));e=t}const t=e=>{localStorage.clear(),localStorage.setItem("projects",JSON.stringify(e))},a=()=>{const n=i(),l=document.querySelector("#mainColumn");l.childNodes[1]&&l.removeChild(l.childNodes[1]);const o=document.createElement("div");o.classList.add("row");const r=document.createElement("ul");r.classList.add("list-group"),e.forEach((l=>{l.name===n&&l.tasks.forEach((n=>{if(0===n)return;const l=document.createElement("a"),d=document.createElement("li");d.classList.add("list-group-item"),d.setAttribute("data-attr",n.name);const c=document.createElement("input");c.classList.add("form-check-input","me-1"),c.setAttribute("type","checkbox"),c.setAttribute("value",""),c.setAttribute("aria-label","..."),c.addEventListener("click",(n=>{(n=>{const{target:l}=n,s=i(),o=l.parentElement.innerText;let r,d;e.forEach((e=>{e.name===s&&(d=e,e.tasks.forEach((e=>{e.name===o&&(r=e)})))}));let c=e.indexOf(d);e[c].tasks.splice(e[c].tasks.indexOf(r),1),a(),t(e)})(n)}));const m=document.createElement("span");m.innerHTML=n.name;const u=document.createElement("a");u.classList.add("icons");const b=document.createElement("button");b.classList.add("btn","btn-primary"),b.setAttribute("type","button"),b.setAttribute("data-bs-toggle","modal"),b.setAttribute("data-bs-target","#editTask"),b.style.backgroundColor="white",b.style.border="0px",b.addEventListener("click",(e=>{const{target:t}=e;console.log(t),s(e)}));const p=document.createElement("img");p.src="/../dist/assets/edit.png",p.classList.add("icon","editIcon"),b.appendChild(p),u.appendChild(b),d.appendChild(c),d.appendChild(m),d.appendChild(u),l.appendChild(d),l.setAttribute("data-bs-toggle","modal"),l.setAttribute("data-bs-target","#editTask"),l.addEventListener("click",(e=>{const{target:t}=e;console.log(t),s(e)})),r.appendChild(l),o.appendChild(r)}))})),l.appendChild(o)};let n;const i=()=>{let e;return document.querySelectorAll(".projectItems").forEach((t=>{t.classList.contains("active")&&(e=t.innerText)})),e},l=n=>{let l=(()=>{let e;return document.querySelectorAll(".priority").forEach((t=>{t.checked&&(e=t.id)})),e})(),s=(()=>{const e=document.querySelector("#modalFormTask"),t=new FormData(e),a=JSON.stringify(Object.fromEntries(t)),n=JSON.parse(a);return e.reset(),""===n.taskTitle?(document.querySelector("#taskTitle").setAttribute("placeholder","Cannot be empty!"),null):n})();console.log(l);let o=(d=s.taskTitle,c=s.taskDescription,m=s.taskDueDate,{name:d,description:c,dueDate:m,priority:l,id:"_"+Math.random().toString(36).substr(2,9)}),r=i();var d,c,m;e.forEach((e=>{r===e.name&&e.tasks.push(o)})),t(e),a()},s=t=>{const{target:a}=t;a.classList.contains("icon")?n=a.parentElement.parentElement.parentElement.getAttribute("data-attr"):a.classList.contains("list-group-item")&&(n=a.getAttribute("data-attr"));let l=i();const s=document.querySelector("#taskTitleEdit"),o=document.querySelector("#taskDescriptionEdit"),r=document.querySelector("#taskDueDateEdit");e.forEach((e=>{e.name===l&&e.tasks.forEach((e=>{if(e.name===n){console.log(e.name),console.log(e.description),console.log(e.dueDate),s.value=e.name,o.value=e.description,r.value=e.dueDate;let t=e.priority;t+="Edit",document.querySelectorAll(".priorityEdit").forEach((e=>{t===e.id?e.checked=!0:e.checked=!1}))}}))}))},o=()=>{const n=document.querySelector("#sidebarProjects");n.innerHTML="",e.forEach((i=>{const l=document.createElement("a");l.classList.add("list-group-item","list-group-item-action","projectItems"),l.setAttribute("data-attr",i.id),l.innerHTML=i.name,l.addEventListener("click",(e=>{const{target:t}=e;(e=>{"closeProject"!==e.id&&(document.querySelectorAll(".projectItems").forEach((e=>{e.classList.contains("active")&&e.classList.remove("active")})),e.classList.add("active"),r(e),a(e))})(t)}));const s=document.createElement("button");s.setAttribute("type","button"),s.setAttribute("class","btn-close"),s.setAttribute("aria-label","Close"),s.setAttribute("id","closeProject"),s.addEventListener("click",(()=>{(a=>{let n;e.forEach((e=>{a===e.name&&(n=e)})),e.length>1?e.splice(e.indexOf(n),1):1==e.length&&(e=[]),t(e)})(i.name),o()})),l.appendChild(s),n.appendChild(l)}))},r=e=>{const t=document.querySelector("#mainColumn");t.innerHTML="";const a=document.createElement("div");a.classList.add("row");const n=document.createElement("div");n.classList.add("col-9"),n.innerHTML=e.innerText;const i=document.createElement("div");i.classList.add("col-3");const l=document.createElement("button");l.classList.add("btn","btn-primary"),l.setAttribute("type","button"),l.setAttribute("data-bs-toggle","modal"),l.setAttribute("data-bs-target","#newTask"),l.innerHTML="+ New Task",i.appendChild(l),a.appendChild(n),a.appendChild(i),t.appendChild(a)},d=((()=>{const e=document.querySelector(".modalContainer"),t=document.createElement("div");t.innerHTML='\n    <div class="modal-dialog">\n        <div class="modal-content">\n            <div class="modal-header">\n            <h5 class="modal-title" id="newProjectLabel">New Project</h5>\n            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n            </div>\n            <div class="modal-body">\n                <div class="mb-3">\n                    <form id="modalForm">\n                        <label for="newProjectName" class="form-label">Name:</label>\n                        <input type="text" name="projectName" class="form-control" id="newProjectName"></input>\n                    </form>        \n                </div>\n            </div>\n            <div class="modal-footer">\n            <button type="button" class="btn btn-primary" id="newProjectBtn">Save changes</button>\n        </div>\n    </div>',t.classList.add("modal","fade"),t.setAttribute("id","newProject"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-labelledby","newProject"),t.setAttribute("aria-hidden","true"),e.appendChild(t)})(),(()=>{const e=document.querySelector(".modalContainer"),t=document.createElement("div");t.innerHTML='\n    <div class="modal-dialog">\n    <div class="modal-content">\n        <div class="modal-header">\n        <h5 class="modal-title" id="newTaskLabel">New Task</h5>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body">\n            <form id="modalFormTask">\n                <div class="mb-3">\n                    <label for="taskTitle" class="form-label">Title:</label>\n                    <input type="text" class="form-control" id="taskTitle" name="taskTitle" required />\n                </div>\n                <div class="mb-3">\n                    <label for="description" class="form-label">Description:</label>\n                    <textarea class="form-control" id="description" rows="3" name="taskDescription" required></textarea>\n                </div>\n                <div class="mb-3">\n                    <label for="dueDate" class="form-label">Due Date:</label>\n                    <input type="date" class="form-control" id="dueDate" name="taskDueDate" required />\n                </div>\n                <div class="mb-3">\n                    <label class="form-label">Priority:</label>\n                    <div class="form-check">\n                        <input class="form-check-input priority" type="radio" name="flexRadioDefault" id="highPriority">\n                        <label class="form-check-label" for="highPriority">High</label>\n                    </div>\n                    <div class="form-check">\n                        <input class="form-check-input priority" type="radio" name="flexRadioDefault" id="mediumPriority" checked>\n                        <label class="form-check-label" for="mediumPriority">Medium</label>\n                    </div>\n                    <div class="form-check">\n                        <input class="form-check-input priority" type="radio" name="flexRadioDefault" id="lowPriority">\n                        <label class="form-check-label" for="lowPriority">Low</label>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class="modal-footer">\n        <button type="button" class="btn btn-primary" id="newTaskBtn">Save changes</button>\n        </div>\n    </div>\n    </div>',t.classList.add("modal","fade"),t.setAttribute("id","newTask"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-labelledby","newTaskLabel"),t.setAttribute("aria-hidden","true"),e.appendChild(t)})(),(()=>{const e=document.querySelector(".modalContainer"),t=document.createElement("div");t.innerHTML='\n    <div class="modal-dialog">\n    <div class="modal-content">\n        <div class="modal-header">\n        <h5 class="modal-title" id="editTaskLabel">Edit Task</h5>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body">\n            <form id="modalFormEditTask">\n                <div class="mb-3">\n                    <label for="taskTitleEdit" class="form-label">Title:</label>\n                    <input type="text" class="form-control" id="taskTitleEdit" name="taskTitleEdit" required />\n                </div>\n                <div class="mb-3">\n                    <label for="taskDescriptionEdit" class="form-label">Description:</label>\n                    <textarea class="form-control" id="taskDescriptionEdit" rows="3" name="taskDescriptionEdit" required></textarea>\n                </div>\n                <div class="mb-3">\n                    <label for="taskDueDateEdit" class="form-label">Due Date:</label>\n                    <input type="date" class="form-control" id="taskDueDateEdit" name="taskDueDateEdit" required />\n                </div>\n                <div class="mb-3">\n                    <label class="form-label">Priority:</label>\n                    <div class="form-check">\n                        <input class="form-check-input priorityEdit" type="radio" name="flexRadioDefault" id="highPriorityEdit">\n                        <label class="form-check-label" for="highPriority">High</label>\n                    </div>\n                    <div class="form-check">\n                        <input class="form-check-input priorityEdit" type="radio" name="flexRadioDefault" id="mediumPriorityEdit" checked>\n                        <label class="form-check-label" for="mediumPriority">Medium</label>\n                    </div>\n                    <div class="form-check">\n                        <input class="form-check-input priorityEdit" type="radio" name="flexRadioDefault" id="lowPriorityEdit">\n                        <label class="form-check-label" for="lowPriority">Low</label>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class="modal-footer">\n        <button type="button" class="btn btn-primary" id="editTaskBtn">Save changes</button>\n        </div>\n    </div>\n    </div>',t.classList.add("modal","fade"),t.setAttribute("id","editTask"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-labelledby","newTaskLabel"),t.setAttribute("aria-hidden","true"),e.appendChild(t)})(),document.querySelectorAll("button"));(()=>{const e=document.querySelector("#body"),t=document.createElement("div");t.innerHTML='\n    <div class="container-fluid">\n    <span>To Do List</span>\n    </div>',t.classList.add("header"),t.classList.add("bg-primary"),e.prepend(t)})(),(()=>{const e=document.querySelector("#sidebar"),t=document.createElement("button");t.setAttribute("type","button"),t.setAttribute("class","btn btn-primary"),t.setAttribute("data-bs-toggle","modal"),t.setAttribute("data-bs-target","#newProject"),t.innerText="+ New Project",e.appendChild(t)})(),o(),d.forEach((s=>{s.addEventListener("click",(s=>{const{target:r}=s;"newProjectBtn"===r.id&&((()=>{const a=document.querySelector("#modalForm"),n=new FormData(a),i=JSON.stringify(Object.fromEntries(n)),l=JSON.parse(i);let s={name:l.projectName,id:"_"+Math.random().toString(36).substr(2,9),tasks:[0]};e.forEach((e=>{e.name!==l.projectName||alert("duplicate name")})),e.push(s),t(e),a.reset()})(),o()),"newTaskBtn"===r.id&&l(),"editTaskBtn"===r.id&&(l=>{console.log(l);let s=i(),o=(()=>{let e;return document.querySelectorAll(".priorityEdit").forEach((t=>{t.checked&&(e=t.id)})),e})(),r=(()=>{const e=document.querySelector("#modalFormEditTask"),t=new FormData(e),a=JSON.stringify(Object.fromEntries(t)),n=JSON.parse(a);return e.reset(),""===n.taskTitle?(document.querySelector("#taskTitleEdit").setAttribute("placeholder","Cannot be empty!"),null):n})();console.log(r),console.log(o),e.forEach((e=>{e.name===s&&e.tasks.forEach((e=>{e.name===n&&(console.log(e),e.name=r.taskTitleEdit,e.description=r.taskDescriptionEdit,e.dueDate=r.taskDueDateEdit,e.priority=o)}))})),t(e),a()})(r)}))}))})();