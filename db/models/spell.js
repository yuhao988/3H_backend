import { Model, DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  class Spell extends Model {}
  Spell.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      might: DataTypes.INTEGER,
      hit: DataTypes.INTEGER,
      critical: DataTypes.INTEGER,
      uses: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      range_min: DataTypes.INTEGER,
      range_max: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "spells",
      underscored: true,
      freezeTableName: true,
    }
  );
  return Spell;
};