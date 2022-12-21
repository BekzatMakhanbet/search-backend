const express = require("express");
const SearchController = require("../controllers/SearchController");

const searchRouter = express.Router();

searchRouter.post("/", SearchController.check);

module.exports = searchRouter;
