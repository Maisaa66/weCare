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
      const providerToken = await sProvider.createToken();
      res.cookie("jwt", providerToken, {
        httpOnly: true,
        maxAge: 2 * 24 * 60 * 60 * 1000,
      });
      res.status(200).json({ response: sProvider, message: "sProvider created" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  static getProviders = async (req, res) => {
    try {
      const providers = await serviceProviderModel.find({});
      res.status(200).json(providers);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  static getProviderById = async (req, res) => {
    try {
      const provider = await serviceProviderModel.findById(req.params.id);
      if (!provider) {
        throw new Error("There is no provider with this ID!");
      }
      res.status(200).json({
        status: "success",
        requestedAt: req.requestTime,
        data: {
          provider,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err.message,
      });
    }
  };

  static updateProviderById = async (req, res) => {
    try {
      const provider = await serviceProviderModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!provider) {
        throw new Error("There is no provider with this ID!");
      }
      res.status(200).json({
        status: "success",
        data: {
          provider,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err.message,
      });
    }
  };

  static deleteProviderById = async (req, res) => {
    try {
      const provider = await serviceProviderModel.findByIdAndDelete(req.params.id);
      if (!provider) {
        throw new Error("There is no provider with this ID!");
      }
      res.status(201).json({
        status: "success",
      });
    } catch (err) {
      res.status(401).json({
        status: "fail",
        message: err.message,
      });
    }
  };
}

module.exports = ServiceProvider;
