const http = require("http");
const { stdout } = require("process");

http.get("/", (response) => {
  response.on("data", (data) => {
    for (const i of data) {
      stdout.write(i);
    }
  });
});
