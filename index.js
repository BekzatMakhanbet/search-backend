const http = require("http");
const app = require("./src/app");
const dataSource = require("./src/dataSource");

const SERVER_PORT = 4000;

const httpServer = http.createServer(app);

httpServer.listen(SERVER_PORT, () => {
  console.log("HTTP Server running on port 4000");
});
