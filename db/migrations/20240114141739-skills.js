'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("skills", {
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
      "E+": {
        allowNull: true,
        type: Sequelize.STRING,
      },
      "D": {
        allowNull: true,
        type: Sequelize.STRING,
      },
      "D+": {
        allowNull: true,
        type: Sequelize.STRING,
      },
      "C": {
        allowNull: true,
        type: Sequelize.STRING,
      },
      "C+": {
        allowNull: true,
        type: Sequelize.STRING,
      },
      "B": {
        allowNull: true,
        type: Sequelize.STRING,
      },
      "B+": {
        allowNull: true,
        type: Sequelize.STRING,
      },
      "A": {
        allowNull: true,
        type: Sequelize.STRING,
      },
      "A+": {
        allowNull: true,
        type: Sequelize.STRING,
      },
      "S": {
        allowNull: true,
        type: Sequelize.STRING,
      },
      "S+": {
        allowNull: true,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("skills");
  },
};
