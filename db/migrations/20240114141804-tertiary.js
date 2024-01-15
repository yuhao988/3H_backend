'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("budding_talents", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      character: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: { model: "characters", key: "id" },
      },
      skill: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: { model: "skills", key: "id" },
      },
      combat_art: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: { model: "combat_arts", key: "id" },
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
    await queryInterface.createTable("boons_banes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      character: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: { model: "characters", key: "id" },
      },
      skill: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: { model: "skills", key: "id" },
      },
      boon: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
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
    await queryInterface.createTable("spell_list", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      character: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: { model: "characters", key: "id" },
      },
      spell: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: { model: "spells", key: "id" },
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
    await queryInterface.dropTable("budding_talents");
    await queryInterface.dropTable("boons_banes");
    await queryInterface.dropTable("spell_list");
  },
};
