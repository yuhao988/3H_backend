"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("characters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      image_link: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      base_lv:{
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      hp:{
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      hp_growth:{
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      strength:{
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      str_growth:{
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      magic:{
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      mag_growth:{
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      dexterity:{
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      dex_growth:{
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      luck:{
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      lck_growth:{
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      defence:{
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      def_growth:{
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      resistance:{
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      res_growth:{
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      charm:{
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      cha_growth:{
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("characters");
  },
};
