const HttpCodes = require("../../const/HttpCodes");
const ProjectModel = require("./project.models");
const UserModel = require("../users/user.model");

const GetAllProjects = async (request, response) => {
  try {
    const projects = await ProjectModel.find();
    response.status(HttpCodes.OK).json({
      data: projects,
      error: null,
      message: "Get all projects",
    });
  } catch (error) {
    response.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
      data: null,
      error: error.message,
      message: "Get all projects error",
    });
  }
};

const CreateProject = async (request, response) => {
  const { title, description, status, userId } = request.body;
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return response.status(HttpCodes.NOT_FOUND).json({
        data: null,
        error: null,
        message: `User with id ${userId} not found`,
      });
    }
    const newProject = new ProjectModel({
      title: title,
      description: description,
      status: status,
      user: userId,
    });

    const projectCreated = await newProject.save();

    await user.projects.push(projectCreated._id);

    await user.save();

    response.status(HttpCodes.CREATED).json({
      data: projectCreated,
      error: null,
      message: "Project created",
    });
  } catch (error) {
    response.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
      data: null,
      error: error.message,
      message: "Project created error",
    });
  }
};

const UpdateProject = (request, response) => {
  response.send("Hola desde PUT projects");
};

const DeleteProject = (request, response) => {
  response.send("Hola desde DELETE projects");
};

module.exports = {
  GetAllProjects,
  CreateProject,
  UpdateProject,
  DeleteProject,
};
