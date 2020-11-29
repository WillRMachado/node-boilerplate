require("dotenv/config");
const express = require("express");
const routes = require("./routes");
const DefaultRoutes = routes.defaultRoutes;
const graphQLRoutes = routes.graphQLRoutes;

require("./database");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  server: any

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    // GraphQLRoutes.map(this);
    this.server.use(DefaultRoutes);
    this.server.use(graphQLRoutes);
  }
}

module.exports = new App().server;
