class caRouter {
    constructor(express, controller) {
      this.express = express;
      this.controller = controller;
      //this.checkJwt = checkJwt;
    }
    routes() {
      const router = this.express.Router();
      router.get("/", this.controller.getAll.bind(this.controller));
      router.get("/:caID",this.controller.getOne.bind(this.controller));
      router.post("/",this.controller.postOne.bind(this.controller));
      router.put("/:caID",this.controller.putOne.bind(this.controller));
      router.delete("/:caID",this.controller.deleteOne.bind(this.controller));
      return router;
    }
  }
  
  module.exports = caRouter;