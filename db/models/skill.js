const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    static associate(models) {
      this.hasMany(models.combat_arts);
      this.hasMany(models.weapons);
    }
  }
  Skill.init(
    {
      name: DataTypes.STRING,
      skill_icon: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "skills",
      underscored: true,
      freezeTableName: true,
    }
  );
  return Skill;
};
