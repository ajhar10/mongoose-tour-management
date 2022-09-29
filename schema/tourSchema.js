const mongoose = require("mongoose");

const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please give a tour name"],
      trim: true,
      unique: [true, "Tour name must be unique"],
      minLength: [3, "Name must be at least 3 characters"],
      maxLength: [100, "Name is too large"],
    },
    description: {
      type: String,
      required: [true, "Please give a tour description"],
    },
    price: {
      type: Number,
      required: [true, "Please give a resonable price for this tour"],
      min: [0, "Price value can not be Negative"],
    },
    adult: {
      type: Number,
      required: [true, "Please give at least one adult"],
      min: [0, "Adult can not be Negative"],
    },
    date: {
      type: Date,
      required: [true, "Please give a date for this tour"],
    },
    status: {
      type: String,
      enum: {
        values: ["active", "comming soon"],
        message: "Status can't be {VALUE}",
      },
    },
    time: {
      type: String,
      required: [true, "Please provide a String for tour."],
    },
    viewesCount: {
      type: Number,
      required: [true, "Please provide a viewesCount"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = tourSchema;
