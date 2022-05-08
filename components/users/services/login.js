const jwt = require("jsonwebtoken");
const dal = require("../UserDal");
const { verifyPassword } = require("../utils/utils");
const login = async ({ email, password }) => {
  const response = {
    status: 200,
    body: {},
  };
  let result = await dal.findOne({
    where: {
      email: email,
    }
  })
  if (!result || !verifyPassword(password, result.password)) {
    response.status = 400;
    response.body = { error: "Usuario o contraseña incorrectos." };
    return response;
  }
  const token = jwt.sign(
    {
      id: result.id,
      email: result.email,
    },
    process.env.JWT_SECRET
  );
  response.status = 200;
  response.body = {
    token,
    id: result.id,
    email: result.email,
    name: result.name,
  };
  return response;
};

module.exports = login;
