const Sequelize = require("sequelize");

class caController {
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
    const { caID } = req.params;
    try {
      const output = await this.model.findByPk(caID);
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
        type_id,
        str_mag,
        might,
        hit,
        critical,
        durability_cost,
        range_min,
        range_max,
      } = req.body;

      const newCA = await this.model.create({
        name,
        type_id,
        str_mag,
        might,
        hit,
        critical,
        durability_cost,
        range_min,
        range_max,
        created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
      });
      return res.json(newCA);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
  async putOne(req, res) {
    const { caID } = req.params;
    try {
      const {
        name,
        type_id,
        str_mag,
        might,
        hit,
        critical,
        durability_cost,
        range_min,
        range_max,
      } = req.body;
      const existing = await this.model.findByPk(caID);
      if (name) {
        existing.name = name;
      }
      if (type_id) {
        existing.type_id = type_id;
      }
      if (str_mag) {
        existing.str_mag = str_mag;
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
      if (durability_cost) {
        existing.durability_cost = durability_cost;
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
    const { caID } = req.params;
    try {
      const existing = await this.model.findByPk(caID);
      if (!existing) {
        return res
          .status(404)
          .json({ error: true, msg: "Combat Art does not exist." });
      }
      await existing.destroy();

      return res.json({
        success: true,
        msg: "Combat Art deleted successfully.",
      });
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
}
module.exports = caController;
