const dal = require("../UserDal");
const { hashPassword } = require("../utils/utils");
const signUp = async (data) => {
  const response = {
    status: 200,
    body: {},
  };
  // TODO: Agregar restricciones...
  // try {
  //   const result = await dal.query(
  //     `INSERT INTO users (name, email, password) VALUES ('${data.name}', '${
  //       data.email
  //     }', '${hashPassword(data.password)}')`
  //   );
  //   response.body = {
  //     id: result.insertId,
  //     name: data.name,
  //     email: data.email,
  //   };
  // } catch (error) {
	// 	console.log(error);
  //   response.status = 500;
  //   response.body = { error: error };
  // }

  const newUser = await dal.create({
    name: data.name,
    email: data.email,
    password: hashPassword(data.password)
  });

  response.body = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  }
  console.log(newUser);

  return response;
};

module.exports = signUp;
