class characterRouter {
  constructor(express, controller) {
    this.express = express;
    this.controller = controller;
    //this.checkJwt = checkJwt;
  }
  routes() {
    const router = this.express.Router();
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/:charID",this.controller.getOne.bind(this.controller));
    router.post("/",this.controller.postOne.bind(this.controller));
    router.put("/:charID",this.controller.putOne.bind(this.controller));
    router.delete("/:charID",this.controller.deleteOne.bind(this.controller));
    return router;
  }
}

module.exports = characterRouter;
