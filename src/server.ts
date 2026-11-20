import { createServer } from "node:http";

const PORT = 9000;

const server = createServer((req, res) => {
  // console.log("This is from Request:", req);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
