import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import routes from "./components";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});
process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});

const router = express();

// Add the server configuration
applyMiddleware(middleware, router);

// Add endpoints
applyRoutes(routes, router);

// Add errors' handlers
applyMiddleware(errorHandlers, router);

const { PORT = 5005 } = process.env;
const server = http.createServer(router);


server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);
