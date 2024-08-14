const http = require("http");
const getReq = require("./methods/get-request.js");
const getPost = require("./methods/post-request");
const putReq = require("./methods/put-request");
const deleteReq = require("./methods/delete-request");
let movies = require("./data/movies.json");
// require("dotenv").config()

const PORT = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  req.movies = movies;
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      getPost(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({ title: "Not Found", message: "Route not found!" })
      );
      return;
  }
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "application/json");
  // res.write(JSON.stringify({ message: "Hello !" }));
  // res.end();
});

server.listen(PORT, () => {
  console.log(`Server Started on port  ${PORT}`);
});
