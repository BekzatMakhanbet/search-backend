const https = require("https");

class DataSource {
  constructor() {
    this.englishWords = [];
  }

  dataSourceInit = async () => {
    return new Promise((resolve, reject) => {
      const that = this;

      try {
        https
          .get(
            "https://raw.githubusercontent.com/jeremy-rifkin/Wordlist/master/master.txt"
          )
          .on("response", (response) => {
            let body = "";
            response.on("data", function (chunk) {
              body += chunk;
            });
            response.on("end", function () {
              that.englishWords = body.toLowerCase().split("\n");
              console.log("Data source initilized");
              resolve();
            });
          });
      } catch (err) {
        reject(err);
      }
    });
  };

  binarySearch(value) {
    const items = this.englishWords;
    let startIndex = 0,
      stopIndex = items.length - 1,
      middle = Math.floor((stopIndex + startIndex) / 2);

    while (items[middle] != value && startIndex < stopIndex) {
      if (value < items[middle]) {
        stopIndex = middle - 1;
      } else if (value > items[middle]) {
        startIndex = middle + 1;
      }

      middle = Math.floor((stopIndex + startIndex) / 2);
    }

    return items[middle] != value ? -1 : middle;
  }
}

module.exports = new DataSource();
