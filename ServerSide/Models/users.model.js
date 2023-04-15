const mongoose = require("mongoose");
const { isEmail, isMobilePhone } = require("validator");

//& create User schema
const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: [true, "firstName is required"] },
    lastName: { type: String, required: [true, "lastName is required"] },
    phoneNum: {
      type: String,
      trim: true,
      validate(value) {
        if (!isMobilePhone(value, "ar-EG"))
          throw new Error("Invalid Mobile Number");
      },
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: { type: String, required: [true, "password is required"] },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: [true, "gender is required"],
    },
    isAdmin: { type: Boolean, default: false },
    address: {
      type: {
        country: String,
        governate: String,
        area: String,
        street: String,
        buildingNum: Number,
        apartmentNum: Number,
      },
    },
    nationalID: { type: String, required: [true, "nationalId is required"] },
    profileImg: { type: String },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", UserSchema);

module.exports = userModel;
