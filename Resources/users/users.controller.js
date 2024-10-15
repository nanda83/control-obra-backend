const HttpCodes = require("../../const/HttpCodes");
const UserModel = require("./user.model");
const GetAllUsers = async (request, response) => {
  try {
    const users = await UserModel.find();

    response.status(HttpCodes.OK).json({
      data: users,
      error: null,
      message: "Get all users",
    });
  } catch (error) {
    response.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
      data: null,
      error: error.message,
      message: "Get all users error",
    });
  }
};

const Login = (request, response) => {
  response.status(HttpCodes.OK).json({
    data: {
      token: "123456",
      userId: "123",
    },
    error: null,
    message: "User logged",
  }); //response.send("Login");
};

const Register = (request, response) => {
  response.status(HttpCodes.CREATED).json({
    data: null,
    error: null,
    message: "User registered",
  });
};
const Id = async (request, response) => {
  const { id } = request.params;

  const user = await UserModel.findById(id);

  try {
    response.status(HttpCodes.OK).json({
    data: user,
    error: null,
    message: `Get user ${id}`,
  });
}
catch (error) {
  response.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
    data: null,
    error: error.message,
    message: `Get user ${id} error`,
  });
}
};

const CreateUser = async (request, response) => {
  const { name, email, password } = request.body;

  try {
    const newUser = new UserModel({
      email: email,
      name: name,
      password: password,
    });

    const userCreated = await newUser.save();

    response.status(HttpCodes.CREATED).json({
      data: userCreated,
      error: null,
      message: "User created",
    });
  } catch (error) {
    response.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
      data: null,
      message: `Error creating user`,
      error: error.message,
    });
  }
};

module.exports = {
  GetAllUsers,
  Login,
  Register,
  Id,
  CreateUser,
};
