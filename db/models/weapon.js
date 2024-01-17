import { Model, DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  class Weapon extends Model {
    static associate(models) {
      this.belongsTo(models.skills, { foreignKey: "skillsID" });
    }
  }
  Weapon.init(
    {
      name: DataTypes.STRING,
      type_id: {
        type: DataTypes.INTEGER,
        references: { model: "skills", key: "id" },
      },
      str_mag: DataTypes.BOOLEAN,
      might: DataTypes.INTEGER,
      hit: DataTypes.INTEGER,
      critical: DataTypes.INTEGER,
      durability: DataTypes.INTEGER,
      range_min: DataTypes.INTEGER,
      range_max: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "weapons",
      underscored: true,
      freezeTableName: true,
    }
  );
  return Weapon;
};