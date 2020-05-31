const connection = require("../db/dbConecttion");
const axios = require("axios").default;

const controller = {
  getSession: (sessionId) => {
    axios
      .get(
        `http://grupormaker.com/dev/helperson-api/public/authCheck?session=${sessionId}`
      )
      .then((response) => {
        console.log(sessionId);
        if (response.data.session_id === sessionId) return response.data.status;
      })
      .catch((error) => console.log(error));
  },
};

module.exports = controller;

/* c82b41177ec9e7d5a301092f435250a5
e046431e6355dcfce7ec338c44aa5f97 */
