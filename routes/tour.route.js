const express = require("express");
const router = express.Router();
const viewCounter = require("../middlewares/tour.viewcount");
const tourControllers = require("../controllers/tour.controllers");

router
  .route("/tours")
  .get(tourControllers.getTours)
  .post(tourControllers.createTour);
router.route("/tours/:id").get(viewCounter, tourControllers.getTourById);
router.route("/tour/:id").patch(tourControllers.updateATourPackage);
router.route("/tour/cheapest").get(tourControllers.getCheapestTour);
router.route("/tour/trending").get(tourControllers.getTrendingTour);

module.exports = router;
