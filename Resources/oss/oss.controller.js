const axios = require("axios");
const HttpCodes = require("../../const/HttpCodes");
const { getPublicToken, getInternalToken } = require("../../lib/aps.libs");

const GetBuckets = async (request, response) => {
  try {
    const access_token = await getPublicToken();

    const headers = {
      Authorization: `Bearer ${access_token}`,
    };

    const { data } = await axios.get(
      "https://developer.api.autodesk.com/oss/v2/buckets",
      { headers }
    );

    response.status(HttpCodes.OK).json({
      data: {
        buckets: data.items,
      },
      error: null,
      message: "Get Buckets",
    });
  } catch (error) {
    console.log(error.status);
    return response.status(HttpCodes.UNAUTHORIZED).json({
      data: null,
      error: true,
      message: "Error getting buckets",
      error: error.message,
    });
  }
};

const CreateBucket = async (request, response) => {
  try {
    const token = await getInternalToken();

    const { bucketKey } = request.body;

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const requestData = {
      bucketKey,
      policyKey: "transient",
    };

    const { data } = await axios.post(
      "https://developer.api.autodesk.com/oss/v2/buckets",
      requestData,
      { headers }
    );

    response.status(HttpCodes.CREATED).json({
      data: null,
      error: false,
      message: "Bucket created",
    });
  } catch (error) {
    console.log(error.status);
    response.status(error.status).json({
      data: null,
      error: true,
      message: "Error creating bucket",
    });
  }
};
module.exports = {
  GetBuckets,
  CreateBucket,
};
