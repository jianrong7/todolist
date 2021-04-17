(()=>{"use strict";let e=[];if(null===localStorage.getItem("projects"))e=[];else{const t=JSON.parse(localStorage.getItem("projects"));e=t}const t=t=>{console.log(t.getAttribute("data-attr"),"6 HAHA");let a=t.getAttribute("data-attr");const n=document.createElement("div");n.classList.add("row");const o=document.createElement("ul");o.classList.add("list-group"),e.forEach((e=>{e.id===a&&(console.log(e.tasks,"14/task"),e.tasks.forEach((e=>{console.log(e);const t=document.createElement("li");t.classList.add("list-group-item");const a=document.createElement("input");a.classList.add("form-check-input","me-1"),a.setAttribute("type","checkbox"),a.setAttribute("value",""),a.setAttribute("aria-label","..."),t.appendChild(a),t.appendChild(e.name),o.appendChild(t)})))})),n.appendChild(o)},a=a=>{let n=(()=>{const e=document.querySelector("#modalFormTask"),t=new FormData(e),a=JSON.stringify(Object.fromEntries(t)),n=JSON.parse(a);return e.reset(),""===n.taskTitle?(document.querySelector("#taskTitle").setAttribute("placeholder","Cannot be empty!"),null):n})(),o=(()=>{let e;return document.querySelectorAll(".priority").forEach((t=>{t.checked&&(e=t.id)})),e})(),l=(r=n.taskTitle,i=n.taskDescription,c=n.taskDueDate,{name:r,description:i,dueDate:c,priority:o,id:"_"+Math.random().toString(36).substr(2,9)}),s=(()=>{let e;return document.querySelectorAll(".projectItems").forEach((t=>{t.classList.contains("active")&&(e=t.innerText)})),e})();var r,i,c;e.forEach((e=>{s===e.name&&(console.log(e),e.tasks.push(l))})),console.log(e),localStorage.clear(),localStorage.setItem("projects",JSON.stringify(e)),t(a)},n=()=>{const a=document.querySelector("#sidebarProjects");a.innerHTML="",e.forEach((o=>{const l=document.createElement("a");l.classList.add("list-group-item","list-group-item-action","projectItems"),l.setAttribute("data-attr",o.id),l.innerHTML=o.name,l.addEventListener("click",(e=>{const{target:a}=e;(e=>{console.log(e,"57/proj"),e.classList.add("active");const a=document.querySelector("#mainColumn"),n=document.createElement("div");n.classList.add("row");const o=document.createElement("div");o.classList.add("col-9"),o.innerHTML=e.innerText;const l=document.createElement("div");l.classList.add("col-3");const s=document.createElement("button");s.classList.add("btn","btn-primary"),s.setAttribute("type","button"),s.setAttribute("data-bs-toggle","modal"),s.setAttribute("data-bs-target","#newTask"),s.innerHTML="+ New Task",l.appendChild(s),n.appendChild(o),n.appendChild(l),a.appendChild(n),t(e)})(a)}));const s=document.createElement("button");s.setAttribute("type","button"),s.setAttribute("class","btn-close"),s.setAttribute("aria-label","Close"),s.setAttribute("id","closeProject"),s.addEventListener("click",(()=>{(t=>{let a;e.forEach((e=>{t===e.name&&(a=e)})),e.length>1?e.splice(e.indexOf(a),1):1==e.length&&(e=[]),localStorage.clear(),localStorage.setItem("projects",JSON.stringify(e))})(o.name),n()})),l.appendChild(s),a.appendChild(l)}))};(()=>{const e=document.querySelector(".modalContainer"),t=document.createElement("div");t.innerHTML='\n    <div class="modal-dialog">\n        <div class="modal-content">\n            <div class="modal-header">\n            <h5 class="modal-title" id="newProjectLabel">New Project</h5>\n            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n            </div>\n            <div class="modal-body">\n                <div class="mb-3">\n                    <form id="modalForm">\n                        <label for="newProjectName" class="form-label">Name:</label>\n                        <input type="text" name="projectName" class="form-control" id="newProjectName"></input>\n                    </form>        \n                </div>\n            </div>\n            <div class="modal-footer">\n            <button type="button" class="btn btn-primary" id="newProjectBtn">Save changes</button>\n        </div>\n    </div>',t.classList.add("modal","fade"),t.setAttribute("id","newProject"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-labelledby","newProject"),t.setAttribute("aria-hidden","true"),e.appendChild(t)})(),(()=>{const e=document.querySelector(".modalContainer"),t=document.createElement("div");t.innerHTML='\n    <div class="modal-dialog">\n    <div class="modal-content">\n        <div class="modal-header">\n        <h5 class="modal-title" id="newTaskLabel">New Task</h5>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body">\n            <form id="modalFormTask">\n                <div class="mb-3">\n                    <label for="taskTitle" class="form-label">Title:</label>\n                    <input type="text" class="form-control" id="taskTitle" name="taskTitle" required />\n                </div>\n                <div class="mb-3">\n                    <label for="description" class="form-label">Description:</label>\n                    <textarea class="form-control" id="description" rows="3" name="taskDescription" required></textarea>\n                </div>\n                <div class="mb-3">\n                    <label for="dueDate" class="form-label">Due Date:</label>\n                    <input type="date" class="form-control" id="dueDate" name="taskDueDate" required />\n                </div>\n                <div class="mb-3">\n                    <label class="form-label">Priority:</label>\n                    <div class="form-check">\n                        <input class="form-check-input priority" type="radio" name="flexRadioDefault" id="highPriority">\n                        <label class="form-check-label" for="highPriority">High</label>\n                    </div>\n                    <div class="form-check">\n                        <input class="form-check-input priority" type="radio" name="flexRadioDefault" id="mediumPriority" checked>\n                        <label class="form-check-label" for="mediumPriority">Medium</label>\n                    </div>\n                    <div class="form-check">\n                        <input class="form-check-input priority" type="radio" name="flexRadioDefault" id="lowPriority">\n                        <label class="form-check-label" for="lowPriority">Low</label>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class="modal-footer">\n        <button type="button" class="btn btn-primary" id="newTaskBtn">Save changes</button>\n        </div>\n    </div>\n    </div>',t.classList.add("modal","fade"),t.setAttribute("id","newTask"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-labelledby","newTaskLabel"),t.setAttribute("aria-hidden","true"),e.appendChild(t)})(),(()=>{const e=document.querySelector("#body"),t=document.createElement("div");t.innerHTML='\n    <div class="container-fluid">\n    <span>To Do List</span>\n    </div>',t.classList.add("header"),t.classList.add("bg-primary"),e.prepend(t)})(),(()=>{const e=document.querySelector("#sidebar"),t=document.createElement("button");t.setAttribute("type","button"),t.setAttribute("class","btn btn-primary"),t.setAttribute("data-bs-toggle","modal"),t.setAttribute("data-bs-target","#newProject"),t.innerText="+ New Project",e.appendChild(t)})(),n(),document.querySelectorAll("button").forEach((t=>{t.addEventListener("click",(t=>{const{target:o}=t;console.log(o),"newProjectBtn"===o.id&&((()=>{const t=document.querySelector("#modalForm"),a=new FormData(t),n=JSON.stringify(Object.fromEntries(a)),o=JSON.parse(n);let l={name:o.projectName,id:"_"+Math.random().toString(36).substr(2,9),tasks:[0]};e.forEach((e=>{e.name!==o.projectName||alert("duplicate name")})),e.push(l),console.log(l.tasks),console.log(e,"27"),localStorage.setItem("projects",JSON.stringify(e)),t.reset()})(),n()),"newTaskBtn"===o.id&&a(o)}))}))})();