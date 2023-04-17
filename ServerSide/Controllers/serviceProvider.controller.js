const serviceProviderModel = require("../Models/serviceProvider.model");
const bcrypt = require("bcrypt");

class ServiceProvider {
  static login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const sProvider = await serviceProviderModel.findOne({ email });
      if (!sProvider) {
        throw new Error("Invalid email or password");
      }
      const auth = await bcrypt.compare(password, sProvider.password);
      if (!auth) {
        throw new Error("Invalid email or password");
      }
      const sProviderToken = await sProvider.createToken();
      res.cookie("jwt", sProviderToken, {
        httpOnly: true,
        maxAge: 2 * 24 * 60 * 60 * 1000,
      });
      res.status(200).send("hello sProvider");
    } catch (err) {
      res.status(401).send(err.message);
    }
  };

  static addNewProvider = async (req, res) => {
    try {
      const sProvider = await serviceProviderModel.create(req.body);
      res
        .status(200)
        .json({ response: sProvider, message: "sProvider created" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  static getProviders= async(req,res)=>{
    try {
      const providers = await serviceProviderModel.find({});
      res.status(200).json(providers);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  
  
}

module.exports = ServiceProvider;
