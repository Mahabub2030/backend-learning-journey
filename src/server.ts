import { createServer } from "node:http";

const PORT = 3000;

const server = createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from the Node.js server!");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
