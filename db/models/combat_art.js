const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class CombatArt extends Model {
    static associate(models) {
      
      this.belongsTo(models.skills, { foreignKey: "skillsID" });
    }
  }
  CombatArt.init(
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
      durability_cost: DataTypes.INTEGER,
      range_min: DataTypes.INTEGER,
      range_max: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "combat_arts",
      underscored: true,
      freezeTableName: true,
    }
  );
  return CombatArt;
};
