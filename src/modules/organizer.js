const organizer = (() => {
    const projectContainers = []

    const getProjectContainer = (projectID) => projectContainers.find(project =>
        project.getProjectID() === projectID)

    const storeProjectContainer = (project) => {
        projectContainers.push(project)
    }
    const deleteProjectContainer = (projectID) => {
        const project = getProjectContainer(projectID)
        const projectIndex = projectContainers.indexOf(project)
        projectContainers.splice(projectIndex, 1)
    }
})