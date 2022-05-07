const express = require("express");
const cors = require("cors");
const signUp = require("./services/signUp");
const login = require("./services/login");
const middleware = require("../middleware");

const User = express.Router();

User.use(express.urlencoded({ extend: false }));
User.use(express.json());
User.use(cors());

User.post("/", async (req, res) => {
  const response = await signUp(req.body);
  res.status(response.status).json(response.body);
});

User.post("/login", async (req, res) => {
  const response = await login(req.body);
  res.status(response.status).json(response.body);
});

User.get("/is-auth", middleware.authUser, (req, res) => {
	console.log(req.userData);
  res.status(200).json({ message: "Autenticado" });
});

module.exports = User;
