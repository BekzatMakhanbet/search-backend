const dataSource = require("../dataSource");

class SearchService {
  constructor() {}

  searchText = (text) => {
    const words = text.split(" ");
    const nonEnglishWords = [];
    words.forEach((word) => {
      const result = dataSource.binarySearch(word.toLowerCase());
      if (result < 0) nonEnglishWords.push(word);
    });
    return nonEnglishWords;
  };
}

module.exports = SearchService;
