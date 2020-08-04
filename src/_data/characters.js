const axios = require("axios");

module.exports = async function () {
  try {
    const response = await axios.get(
      "https://www.potterapi.com/v1/characters?key=$2a$10$mkKLbPJea94VvwYR5YVFU.Kj/rf3IvuGy6.ajVPOlyBsumszwk3/S"
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
