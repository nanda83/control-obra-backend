const axios = require("axios");
const APS_CLIENT_ID = process.env.APS_CLIENT_ID;
const APS_CLIENT_SECRET = process.env.APS_CLIENT_SECRET;

const GetAPSToken = async () => {
  if (!APS_CLIENT_ID || !APS_CLIENT_SECRET) {
    return response.status(HttpCodes.UNAUTHORIZED).json({
      data: null,
      error: true,
      message: "Unauthorized",
    });
  }

  // conversion credenciales a base64
  const credentials = `${APS_CLIENT_ID}:${APS_CLIENT_SECRET}`;
  const encodeCredentials = Buffer.from(credentials).toString("base64");

  console.log(encodeCredentials);

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
    Authorization: `Basic ${encodeCredentials}`,
  };

  const requestData = {
    grant_type: "client_credentials",
    scope: "data:read", //permisos que se dan a aplicacion
  };

  const { data } = await axios.post(
    "https://developer.api.autodesk.com/authentication/v2/token",
    new URLSearchParams(requestData).toString(),
    { headers }
  );
  return data.access_token;
};
module.exports = { GetAPSToken };
