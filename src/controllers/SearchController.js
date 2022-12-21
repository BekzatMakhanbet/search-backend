const { ErrorHandler } = require("../helpers/error");
const SearchService = require("../services/SearchService");

class SearchController {
  constructor() {
    this.searchService = new SearchService();
  }

  check = (req, res) => {
    let { text } = req.body;

    if (!text) throw new ErrorHandler(400, "text is required");

    text = text
      .replace(/[^A-Za-z0-9]/g, " ")
      .replace(/  +/g, " ")
      .trim();

    if (!text.length)
      throw new ErrorHandler(400, "text length must be more than 0");

    const result = this.searchService.searchText(text);
    res.json(result);
  };
}

module.exports = new SearchController();
