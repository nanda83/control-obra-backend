
const GetAllProjects = (request, response) => {
    response.send('Hola desde projects');
};

const CreateProject = (request, response) => {
    response.send('Hola desde POST projects');
};

const UpdateProject = (request, response) => {
    response.send('Hola desde PUT projects');
};

const DeleteProject = (request, response) => {
    response.send('Hola desde DELETE projects');
};

module.exports = {
    GetAllProjects,
    CreateProject,
    UpdateProject,
    DeleteProject
}