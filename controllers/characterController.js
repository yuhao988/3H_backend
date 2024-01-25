const Sequelize = require("sequelize");

class characterController {
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
    const { charID } = req.params;
    try {
      const output = await this.model.findByPk(charID);
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
        image_link,
        base_lv,
        affinity,
        hp,
        hp_growth,
        strength,
        str_growth,
        magic,
        mag_growth,
        dexterity,
        dex_growth,
        speed,
        spd_growth,
        luck,
        lck_growth,
        defence,
        def_growth,
        resistance,
        res_growth,
        charm,
        cha_growth,
      } = req.body;

      const newChar = await this.model.create({
        name,
        image_link,
        base_lv,
        affinity,
        hp,
        hp_growth,
        strength,
        str_growth,
        magic,
        mag_growth,
        dexterity,
        dex_growth,
        speed,
        spd_growth,
        luck,
        lck_growth,
        defence,
        def_growth,
        resistance,
        res_growth,
        charm,
        cha_growth,
        created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
      });
      return res.json(newChar);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
  async putOne(req, res) {
    const { charID } = req.params;
    try {
      const {
        name,
        image_link,
        base_lv,
        affinity,
        hp,
        hp_growth,
        strength,
        str_growth,
        magic,
        mag_growth,
        dexterity,
        dex_growth,
        speed,
        spd_growth,
        luck,
        lck_growth,
        defence,
        def_growth,
        resistance,
        res_growth,
        charm,
        cha_growth,
      } = req.body;
      const existing = await this.model.findByPk(charID);
      if (name) {
        existing.name = name;
      };
      if (image_link) {
        existing.image_link = image_link;
      };
      if (affinity) {
        existing.affinity = affinity;
      };
      if (base_lv) {
        existing.base_lv = base_lv;
      };
      if (hp) {
        existing.hp = hp;
      };
      if (hp_growth) {
        existing.hp_growth = hp_growth;
      };
      if (strength) {
        existing.strength = strength;
      };
      if (str_growth) {
        existing.str_growth = str_growth;
      };
      if (magic) {
        existing.magic = magic;
      };
      if (mag_growth) {
        existing.mag_growth = mag_growth;
      };
      if (dexterity) {
        existing.dexterity = dexterity;
      };
      if (dex_growth) {
        existing.dex_growth = dex_growth;
      };
      if (speed) {
        existing.speed = speed;
      };
      if (spd_growth) {
        existing.spd_growth = spd_growth;
      };
      if (luck) {
        existing.luck = luck;
      };
      if (lck_growth) {
        existing.lck_growth = lck_growth;
      };
      if (defence) {
        existing.defence = defence;
      };
      if (def_growth) {
        existing.def_growth = def_growth;
      };
      if (resistance) {
        existing.resistance = resistance;
      };
      if (res_growth) {
        existing.res_growth = res_growth;
      };
      if (charm) {
        existing.charm = charm;
      };
      if (cha_growth) {
        existing.cha_growth = cha_growth;
      };
      existing.updated_at = Sequelize.literal("CURRENT_TIMESTAMP");
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
  async deleteOne(req, res) {
    const { charID } = req.params;
    try {
      const existing = await this.model.findByPk(charID);
      if (!existing) {
        return res.status(404).json({ error: true, msg: "Character does not exist." });
      }
      await existing.destroy();

      return res.json({ success: true, msg: "Character deleted successfully." });
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
}
module.exports = characterController;
