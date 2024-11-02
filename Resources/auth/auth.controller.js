const HttpCodes = require("../../const/HttpCodes");
const {GetAPSToken, getPublicToken, getInternalToken} = require("../../lib/aps.libs");

const GetToken = async (request, response) => {
  // const access_token = await  GetAPSToken(); // { access_token: GetAPSToken };
  const access_token = await  getPublicToken(); // { access_token: GetAPSToken };

  response.status(200).json({
    data: {
      access_token,
    },
    error: null,
    message: "Token successfully obtained",
  });
};

module.exports = {
  GetToken,
};
