import { Model, DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  class Skill extends Model {}
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
