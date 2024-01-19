const Sequelize = require("sequelize");

class charSkillController {
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
    const { csID } = req.params;
    try {
      const output = await this.model.findByPk(csID);
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
  async postOne(req, res) {
    try {
      // Get the input data from the request body
      const {
        name,
        char_ID,
        spell_list,
        ca_list,
        boons,
        banes,
        budding_talent,
      } = req.body;

      const newCS = await this.model.create({
        name,
        char_ID,
        spell_list,
        ca_list,
        boons,
        banes,
        budding_talent,
        created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
      });
      return res.json(newCS);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
  async putOne(req, res) {
    const { csID } = req.params;
    try {
      const {
        name,
        char_ID,
        spell_list,
        ca_list,
        boons,
        banes,
        budding_talent,
      } = req.body;
      const existing = await this.model.findByPk(csID);
      if (name) {
        existing.name = name;
      }
      if (char_ID) {
        existing.char_ID = char_ID;
      }
      if (spell_list) {
        existing.spell_list = spell_list;
      }
      if (ca_list) {
        existing.ca_list = ca_list;
      }
      if (boons) {
        existing.boons = boons;
      }
      if (banes) {
        existing.banes = banes;
      }
      if (budding_talent) {
        existing.budding_talent = budding_talent;
      }
      
      existing.updated_at = Sequelize.literal("CURRENT_TIMESTAMP");
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
  async deleteOne(req, res) {
    const { csID } = req.params;
    try {
      const existing = await this.model.findByPk(csID);
      if (!existing) {
        return res
          .status(404)
          .json({ error: true, msg: "List does not exist." });
      }
      await existing.destroy();

      return res.json({
        success: true,
        msg: "Character skill list deleted successfully.",
      });
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
}
module.exports = charSkillController;
