'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("combat_arts", {
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
      type: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: { model: "skills", key: "id" },
      },
      str_mag: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      might: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      hit: {
        allowNull: true,
        type: Sequelize.BIGINT,
      },
      critical: {
        allowNull: true,
        type: Sequelize.BIGINT,
      },
      durability_cost: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      range_min: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      range_max: {
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
    await queryInterface.dropTable("combat_arts");
  },
};
