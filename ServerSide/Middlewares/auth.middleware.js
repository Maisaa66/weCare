const jwt = require("jsonwebtoken");

class Auth {
  static verifyToken = (req, res, next) => {
    try {
      const token = req.cookies.jwt;
      console.log(req.cookies.jwt)
      if (token) {
        jwt.verify(token, process.env.JWT_SEC, (err, userToken) => {
          if (err) {
            res.status(403).send("token is not valid");
          }
          req.userToken = userToken;
          next();
        });
      } else {
        res.status(400).send("you need to login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  static verifyTokenAndAuthorization = (req, res, next) => {
    this.verifyToken(req, res, () => {
      console.log("from server!!  ",req.userToken.id, req.params.id);
      if (req.userToken.id === req.params.id || req.userToken.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not authorized to do that!");
      }
    });
  };

  static verifyTokenAndAdmin = (req, res, next) => {
    this.verifyToken(req, res, () => {
      if (req.userToken.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not allowed to do that!");
      }
    });
  };
}

module.exports = Auth;
