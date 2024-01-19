"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("character_skills", {
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
      char_id: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: { model: "characters", key: "id" },
      },
      spell_list: {
        allowNull: true,
        type: Sequelize.ARRAY(Sequelize.BIGINT),
        
      },
      ca_list: {
        allowNull: true,
        type: Sequelize.ARRAY(Sequelize.BIGINT),
        
      },
      boons: {
        allowNull: true,
        type: Sequelize.ARRAY(Sequelize.BIGINT),
        
      },
      banes: {
        allowNull: true,
        type: Sequelize.ARRAY(Sequelize.BIGINT),
        
      },
      budding_talent:{
        allowNull:true,
        type: Sequelize.BIGINT
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
      },});
   
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("character_skills");
    
  },
};
