const express = require("express");
const cors = require("cors");
const signUp = require("./services/signUp");
const login = require("./services/login");

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

module.exports = User;
