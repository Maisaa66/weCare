const userModel = require("../Models/users.model");
const bcrypt = require("bcrypt");
class User {
  static getAllUsers = async (req, res) => {
    try {
      const users = await userModel.find({});
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  static addNewUser = async (req, res) => {
    try {
      const user = await userModel.create(req.body);
      
      res.status(200).json({ response: user, message: "User created" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  static login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await userModel.findOne({ email });
      const userToken = await user.createToken();
      // console.log(userToken)
      if (!user) {
        throw "Invalid email or password";
      }

      const auth = await bcrypt.compare(password, user.password);
      if (!auth) {
        throw "invalid email or password";
      }
      res.cookie('jwt', userToken, {httpOnly:true, maxAge: 2 * 24 * 60 * 60 * 1000});
      res.status(200).send("hello user");
    } catch (err) {
      res.status(401).send(err);
    }
  };
}

module.exports = User;
