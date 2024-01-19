class weaponRouter {
    constructor(express, controller) {
      this.express = express;
      this.controller = controller;
      //this.checkJwt = checkJwt;
    }
    routes() {
      const router = this.express.Router();
      router.get("/", this.controller.getAll.bind(this.controller));
      router.get("/:weaponID",this.controller.getOne.bind(this.controller));
      router.post("/",this.controller.postOne.bind(this.controller));
      router.put("/:weaponID",this.controller.putOne.bind(this.controller));
      router.delete("/:weaponID",this.controller.deleteOne.bind(this.controller));
      return router;
    }
  }
  
  module.exports = weaponRouter;