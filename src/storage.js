// Initialise projects
let projects = [];

// Load projects from localStorage
if (localStorage.getItem('projects') === null) {
    projects = [];
} else {
    const projectsFromStorage = JSON.parse(localStorage.getItem('projects'));
    projects = projectsFromStorage;
}

export { projects }