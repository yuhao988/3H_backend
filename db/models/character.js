const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    
  }
  Character.init(
    {
      name: DataTypes.STRING,
      image_link: DataTypes.STRING,
      base_lv: DataTypes.INTEGER,
      hp: DataTypes.INTEGER,
      hp_growth: DataTypes.INTEGER,
      strength: DataTypes.INTEGER,
      str_growth: DataTypes.INTEGER,
      magic: DataTypes.INTEGER,
      mag_growth: DataTypes.INTEGER,
      dexterity: DataTypes.INTEGER,
      dex_growth: DataTypes.INTEGER,
      speed: DataTypes.INTEGER,
      spd_growth: DataTypes.INTEGER,
      luck: DataTypes.INTEGER,
      lck_growth: DataTypes.INTEGER,
      defence: DataTypes.INTEGER,
      def_growth: DataTypes.INTEGER,
      resistance: DataTypes.INTEGER,
      res_growth: DataTypes.INTEGER,
      charm: DataTypes.INTEGER,
      cha_growth: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "characters",
      underscored: true,
      freezeTableName: true,
    }
  );
  return Character;
};
