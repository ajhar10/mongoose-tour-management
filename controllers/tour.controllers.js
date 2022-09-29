const {
  getTourAllService,
  createTourService,
  getTourByIdService,
  getTrendingTourService,
  updateTourByIdService,
  getCheapestTourService,
} = require("../services/tour.services");

//GET ALL TOURS PACKAGES
const getTours = async (req, res, next) => {
  try {
    let filters = { ...req.query };
    const excludeFields = ["page", "limit", "sort"];
    excludeFields.forEach((field) => delete filters[field]);

    let filtersString = JSON.stringify(filters);
    filtersString = filtersString.replace(
      /\b(gt|gte|lt|lte)b/g,
      (match) => `$${match}`
    );
    filters = JSON.parse(filtersString);

    //Data Query
    let queries = {};
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
    }

    if (req.query.page || req.query.limit) {
      const { page = 1, limit = 5 } = req.query;

      const skip = (page - 1) * Number(limit);
      queries.skip = skip;
      queries.limit = Number(limit);
    }

    const tours = await getTourAllService(filters, queries);

    res.status(200).json({
      status: "Success",
      data: tours,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Tours Package doesn't find yet!!!",
      error: error.message,
    });
  }
};

//GET A TOUR PACKAGE DETAILS
const getTourById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const tour = await getTourByIdService(id);

    res.status(200).json({
      status: "success",
      message: "tour inserted successfully",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Data is't inserted",
      error: error.message,
    });
  }
};

// CREATE TOUR PACKAGES
const createTour = async (req, res, next) => {
  try {
    const tour = await createTourService(req.body);

    res.status(200).json({
      status: "success",
      message: "tour inserted successfully",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Data is't inserted",
      error: error.message,
    });
  }
};

//UPDATE A TOUR PACKAGE
const updateATourPackage = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const tour = await updateTourByIdService(id, data);

    res.status(200).json({
      status: "success",
      message: "tour inserted successfully",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Data isn't updated",
      error: error.message,
    });
  }
};

//GET TRENDING TOUR PACKAGE
const getTrendingTour = async (req, res, next) => {
  try {
    const tour = await getTrendingTourService();

    res.status(200).json({
      status: "success",
      message: "tour inserted successfully",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Data isn't updated",
      error: error.message,
    });
  }
};

//GET CHEPEST TOUR PACKAGE
const getCheapestTour = async (req, res, next) => {
  try {
    const tour = await getCheapestTourService();

    res.status(200).json({
      status: "success",
      message: "tour inserted successfully",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Data isn't updated",
      error: error.message,
    });
  }
};

module.exports = {
  getTours,
  createTour,
  updateATourPackage,
  getTrendingTour,
  getCheapestTour,
};

// git add .
// git commit -m "tour controllers done"
// git push
