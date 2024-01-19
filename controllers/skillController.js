const Sequelize = require("sequelize");

class skillController {
  constructor(model) {
    this.model = model;
  }

  // Retrieve all tasks
  async getAll(req, res) {
    try {
      const output = await this.model.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
  async getOne(req, res) {
    const { skillID } = req.params;
    try {
      const output = await this.model.findByPk(skillID);
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
  async postOne(req, res) {
    try {
      // Get the input data from the request body
      const { name, Ep, D, Dp, C, Cp, B, Bp, A, Ap, S, Sp } = req.body;

      const newSkill = await this.model.create({
        name,
        "E+": Ep,
        D,
        "D+": Dp,
        C,
        "C+": Cp,
        B,
        "B+": Bp,
        A,
        "A+": Ap,
        S,
        "S+": Sp,
        created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
      });
      return res.json(newSkill);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
  
  async deleteOne(req, res) {
    const { skillID } = req.params;
    try {
      const existing = await this.model.findByPk(skillID);
      if (!existing) {
        return res
          .status(404)
          .json({ error: true, msg: "Skill type does not exist." });
      }
      await existing.destroy();

      return res.json({
        success: true,
        msg: "Skill type deleted successfully.",
      });
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
}
module.exports = skillController;
