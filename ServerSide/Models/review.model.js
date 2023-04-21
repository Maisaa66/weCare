const mongoose = require("mongoose");

//create hire request schema
const ReviewSchema = new mongoose.Schema(
  {
    reviewId: {
      type: Number,
      required: [true, "You need to provide a review Id"],
      unique: true,
    },
    postDate: {
      type: Date,
      required: [true, "Request must have a post date"],
    },
    reviewerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Review must have a reviewer"],
    },
    providerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Review must have a provider"],
    },
    rate: {
      type: Number,
      required: [true, "Review must have a rate"],
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: [true, "Review must have a comment"],
    },
  },
  { timestamps: true }
);

const reviewModel = mongoose.model("reviews", ReviewSchema);
module.exports = reviewModel;
