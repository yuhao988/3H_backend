'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("spells", {
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
        type: Sequelize.STRING,
        
      },
     
      might: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      hit: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      critical: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      uses: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      weight: {
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
    await queryInterface.dropTable("spells");
  },
};
