const EventEmitter = require("events");
const http = require("http");

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
  console.log("there was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("there was a new sale 2");
});

myEmitter.on("newSale", (stock) => {
  console.log(`there are ${stock}`);
});
myEmitter.emit("newSale", 8);

const server = http.createServer();

server.on("requiest", (req, res) => {
  res.end("Request");
});

server.on("close", () => {
  console.log("closed");
});

server.listen(9000, "127.0.0.1", () => {
  console.log("listening");
});
