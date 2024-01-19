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
      "E+": DataTypes.STRING,
      D: DataTypes.STRING,
      "D+": DataTypes.STRING,
      C: DataTypes.STRING,
      "C+": DataTypes.STRING,
      B: DataTypes.STRING,
      "B+": DataTypes.STRING,
      A: DataTypes.STRING,
      "A+": DataTypes.STRING,
      S: DataTypes.STRING,
      "S+": DataTypes.STRING,
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
