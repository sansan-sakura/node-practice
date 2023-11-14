const fs = require("fs");
const crypto = require("crypto");
// process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() => console.log("timner 1 finished"), 0);

setImmediate(() => console.log("immediate"));
fs.readFile("test-file.txt", () => {
  console.log("I/O finsihed");
  setTimeout(() => console.log("timner 2 finished"), 2000);

  setImmediate(() => console.log("immediate 3"));

  process.nextTick(() => console.log("next"));
  crypto.pbkdf2("password", "salt", 100000, 1023, "sakj", () => {
    console.log("encrypted");
  });
});
