const GetAllUsers = (request, response) => {
  response.send("Listado de todos los users");
};

const Login = (request, response) => {
  response.status(200).json({
    data: {
      token: "123456",
      userId: "123",
    },
    error: null,
    message: "User logged",
  }); //response.send("Login");
};

const Register = (request, response) => {
  response.send("Register");
};

const Id = (request, response) => {
  const { id } = request.params;
  response.send(`User con ID ${id}`);
};

const CreateUser = (request, response) => {
  const body = request.body;
  console.log(body);
  response.status(201).json({
    data: {
      email: body.email,
      name: body.name,
    },
    error: null,
    message: "User created",
  });
};

module.exports = {
  GetAllUsers,
  Login,
  Register,
  Id,
  CreateUser,
};
