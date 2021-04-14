import { headerLoad, newProjectLoad } from "./view"
import { projectFactory, addProject, projects } from "./project"
import { taskFactory } from "./task"
import { newProjectModal, newTaskModal } from "./modal"

addProject('hi')
addProject('bye')

console.log(projects)