const mongoose = require("mongoose");

//create hire request schema
const HireRequestSchema = new mongoose.Schema({
  reqId: {
    type: Number,
    required: [true, "You need to provide a request Id"],
    unique: true,
  },
  reqStatus: {
    type: String,
    enum: ["pending", "ongoing", "finished"],
    required: [true, "Request must have a status"],
    default: "pending",
  },
  startDate: {
    type: Date,
    required: [true, "Request must have a start date"],
  },
  endDate: {
    type: Date,
    required: [true, "Request must have an end date"],
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Request must have a customer"],
  },
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Request must have a provider"],
  },
  totalHrs: {
    type: Number,
    required: [true, "Request must have number of hrs"],
  },
  hourlyRate: {
    type: Number,
    required: [true, "Request must have an hourly rate"],
  },
});

//To calculate total price
HireRequestSchema.virtual("totalPrice").get(function () {
  return this.totalHrs * this.hourlyRate;
});

const hireRequestModel = mongoose.model("hirerequests", HireRequestSchema);
module.exports = { hireRequestModel };
