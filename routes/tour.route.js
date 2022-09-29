const express = require("express");
const router = express.Router();

const tourControllers = require("../controllers/tour.controllers");

router
  .route("/tours")
  .get(tourControllers.getTours)
  .post(tourControllers.createTour);

module.exports = router;
