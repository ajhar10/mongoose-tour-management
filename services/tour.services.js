const Tour = require("../models/Tour");

//GET /tours services
const getTourAllService = async (filters, quires) => {
  const { skip, limit = 5, fieldBy, sortBy } = quires;
  const tours = await Tour.find(filters)
    .skip(skip)
    .limit(limit)
    .select(fieldBy)
    .sort(sortBy);

  const total = await Tour.countDocuments();
  const pages = Math.ceil(total / limit);
  return { tours, total, pages };
};

//POST /tours services
const createTourService = async (data) => {
  const tour = await Tour.create(data);
  return tour;
};

//GET /tours/:id service
const getTourByIdService = async (id) => {
  const tour = await Tour.find({ _id: id });
  return tour;
};

//PATCH /tour/:id service
const updateTourByIdService = async (tourId, data) => {
  const tour = await Tour.findOne({ _id: tourId });
  const result = await tour.set(data).save();
  return result;
};

//GET /tour/trending
const getTrendingTourService = async () => {
  const tours = await Tour.find({}).sort("-viewsCount").limit(3);
  return tours;
};
//GET /tour/cheapest
const getCheapestTourService = async () => {
  const tours = await Tour.find({}).sort("price").limit(3);
  return tours;
};

module.exports = {
  getTourAllService,
  createTourService,
  getTourByIdService,
  getTrendingTourService,
  updateTourByIdService,
  getCheapestTourService,
};
