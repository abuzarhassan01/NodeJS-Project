const http = require("http");

const PORT = 3000;

console.log("Starting server...");

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "OK" }));
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Node.js CI/CD Demo App is running");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
