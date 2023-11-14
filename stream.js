const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  fs.readFile("test-file.txt", (err, data) => {
    res.end(data);
  });

  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
});

server.listen(9000, "127.0.0.1", () => {
  console.log("listening port");
});
