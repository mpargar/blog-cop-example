const jwt = require("jsonwebtoken");
const middleware = {
  authUser: (req, res, next) => {
    try {
      const user = jwt.verify(
        req.headers.authorization,
        process.env.JWT_SECRET
      );
			req.userData = user;
			next();
    } catch (e) {
			console.log(e);
      res.status(401).json({ error: e});
    }
  },
};

module.exports = middleware;
