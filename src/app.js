const express = require("express");
const cors = require("cors");
const expressAsyncErrors = require("express-async-errors");
const { handleError, ErrorHandler } = require("./helpers/error");
const searchRouter = require("./routes/SearchRouter");
const dataSource = require("./dataSource");

dataSource.dataSourceInit();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/search", searchRouter);

app.use("*", (req, res, next) => {
  next(new ErrorHandler(404, "Not found!"));
});

app.use(handleError);

module.exports = app;
