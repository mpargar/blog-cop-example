const express = require("express");
const cors = require("cors");
require("dotenv").config();
const User = require("./components/users/User");

const port = 3000;

const app = express();

app.use(express.urlencoded({ extend: false }));
app.use(express.json());
app.use(cors());

app.use("/users", User);

app.listen(port, () => {
  process.stdout.write("\x1Bc");
  console.log(`Servidor corriendo en el puerto ${port}`);
});
