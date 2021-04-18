// Initialise projects
let projects = [];

// Load projects from localStorage
if (localStorage.getItem('projects') === null) {
    projects = [];
} else {
    const projectsFromStorage = JSON.parse(localStorage.getItem('projects'));
    projects = projectsFromStorage;
}

const refreshStorage = ((projects) => {
    localStorage.clear()
    localStorage.setItem('projects', JSON.stringify(projects))
})

export { projects, refreshStorage }