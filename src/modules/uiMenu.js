const userInterfaceMenu = (() => {
    const projectListDisplay = document.querySelector(".lists");

    const createProjectListItemHtml = (container) => {
        return `
        <div class="list" id="${container.getProjectID()}">
            ${container.getName()}
            <img src="assets/close.png" class="close">
        </div>`;
    };
    const renderProjectList = (projectContainers) => {
        const html = projectContainers.map(container => {
            return createProjectListItemHtml(container);
        }).join("");
        projectListDisplay.innerHTML = html
    };
    const highlightProjectItem = (containerID) => {
        projectListDisplay.childNodes.forEach(projectItem => {
            if(projectItem.nodeType != 3) {
                if(projectItem.id === containerID) {
                    projectItem.classList.add("selected");
                } else {
                    projectItem.classList.remove("selected");
                }
            }
        })
    }
    return {
        renderProjectList,
        highlightProjectItem
    }
})();

export default userInterfaceMenu;