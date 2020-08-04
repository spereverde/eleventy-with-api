require("dotenv").config();
const axios = require("axios");

module.exports = async function () {
  try {
    const response = await axios.get(
      `https://www.potterapi.com/v1/characters?key=${process.env.POTTER_API_KEY}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
