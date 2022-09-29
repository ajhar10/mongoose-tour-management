const express = require("express");
const router = express.Router();

const tourControllers = require("../controllers/tour.controllers");

router
  .route("/tours")
  .get(tourControllers.getTours)
  .post(tourControllers.createTour);
router
  .route("/tours/:id")
  .get(tourControllers.getTourById)
  .post(tourControllers.createTour);
router.route("/tour/:id").get(tourControllers.updateATourPackage);
router.route("/tour/cheapest").get(tourControllers.getCheapestTour);
router.route("/tour/trending").get(tourControllers.getTrendingTour);

module.exports = router;
