const dal = require("../UserDal");
const { hashPassword } = require("../utils/utils");
const signUp = async (data) => {
  const response = {
    status: 200,
    body: {},
  };
  // TODO: Agregar restricciones...
  try {
    const result = await dal.query(
      `INSERT INTO users (name, email, password) VALUES ('${data.name}', '${
        data.email
      }', '${hashPassword(data.password)}')`
    );
    response.body = {
      id: result.insertId,
      name: data.name,
      email: data.email,
    };
  } catch (error) {
    response.status = 500;
    response.body = { error: error };
  }

  return response;
};

module.exports = signUp;
