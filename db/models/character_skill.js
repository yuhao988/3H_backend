const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class CharSkill extends Model {
    static associate(models) {
      this.belongsTo(models.characters, { foreignKey: "charID" });
    }
  }
  CharSkill.init(
    {
      name: DataTypes.STRING,
      char_ID: {
        type: DataTypes.INTEGER,
        references: { model: "characters", key: "id" },
      },
      spell_list: DataTypes.ARRAY(DataTypes.INTEGER),
      ca_list: DataTypes.ARRAY(DataTypes.INTEGER),
      boons: DataTypes.ARRAY(DataTypes.INTEGER),
      banes: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    {
      sequelize,
      modelName: "character_skills",
      underscored: true,
      freezeTableName: true,
    }
  );
  return CharSkill;
};
