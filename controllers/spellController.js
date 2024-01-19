const Sequelize = require("sequelize");

class spellController {
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
    const { spellID } = req.params;
    try {
      const output = await this.model.findByPk(spellID);
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
        type,
        might,
        hit,
        critical,
        uses,
        weight,
        range_min,
        range_max,
      } = req.body;

      const newSpell = await this.model.create({
        name,
        type,
        might,
        hit,
        critical,
        uses,
        weight,
        range_min,
        range_max,
        created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
      });
      return res.json(newSpell);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
  async putOne(req, res) {
    const { spellID } = req.params;
    try {
      const {
        name,
        type,
        might,
        hit,
        critical,
        uses,
        weight,
        range_min,
        range_max,
      } = req.body;
      const existing = await this.model.findByPk(spellID);
      if (name) {
        existing.name = name;
      }
      if (type) {
        existing.type = type;
      }
      if (might) {
        existing.might = might;
      }
      if (hit) {
        existing.hit = hit;
      }
      if (critical) {
        existing.critical = critical;
      }
      if (uses) {
        existing.uses = uses;
      }
      if (weight) {
        existing.weight = weight;
      }
      if (range_min) {
        existing.range_min = range_min;
      }
      if (range_max) {
        existing.range_max = range_max;
      }
      existing.updated_at = Sequelize.literal("CURRENT_TIMESTAMP");
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
  async deleteOne(req, res) {
    const { spellID } = req.params;
    try {
      const existing = await this.model.findByPk(spellID);
      if (!existing) {
        return res
          .status(404)
          .json({ error: true, msg: "Spell does not exist." });
      }
      await existing.destroy();

      return res.json({ success: true, msg: "Spell deleted successfully." });
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
}
module.exports = spellController;
