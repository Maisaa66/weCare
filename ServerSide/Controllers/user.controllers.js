const userModel = require("../Models/users.model");

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
}

module.exports = User;
