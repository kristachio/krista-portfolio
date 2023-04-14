import { PROJECTS } from '../../app/shared/PROJECTS';

export const selectAllProjects = () => {
    return PROJECTS;
};

export const selectProjectById = (id) => {
    return PROJECTS.find((project) => project.id === parseInt(id));
};

