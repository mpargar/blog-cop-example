const jwt = require("jsonwebtoken");
const dal = require("../UserDal");
const { verifyPassword } = require("../utils/utils");
const login = async ({ email, password }) => {
  const response = {
    status: 200,
    body: {},
  };
  let result = [];
  try {
    result = await dal.query(`
			SELECT * FROM users WHERE email = '${email}'
		`);
  } catch (error) {
    response.status = 500;
    response.body = { error: error };
    return response;
  }
  if (!result.length || !verifyPassword(password, result[0].password)) {
    response.status = 400;
    response.body = { error: "Usuario o contraseña incorrectos." };
    return response;
  }
  const token = jwt.sign(
    {
      id: result[0].id,
      email: result[0].email,
    },
    process.env.JWT_SECRET
  );
  response.status = 200;
  response.body = {
    token,
    id: result[0].id,
    email: result[0].email,
    name: result[0].name,
  };
  return response;
};

module.exports = login;
