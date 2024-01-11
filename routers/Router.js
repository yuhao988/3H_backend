class Router {
  constructor(express, controller) {
    this.express = express;
    this.controller = controller;
    //this.checkJwt = checkJwt;
  }
  routes() {
    const router = this.express.Router();
    router.get("/path", this.controller.getAll.bind(this.controller));
    return router;
  }
}

module.exports = Router;
