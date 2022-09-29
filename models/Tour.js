const mongoose = require("mongoose");
const tourSchema = require("../schema/tourSchema");

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
