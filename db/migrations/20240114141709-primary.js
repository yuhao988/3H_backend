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
      affinity: { allowNull: false, type: Sequelize.STRING },
      base_lv: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      hp: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      hp_growth: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      strength: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      str_growth: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      magic: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      mag_growth: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      dexterity: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      dex_growth: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      speed: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      spd_growth: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      luck: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      lck_growth: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      defence: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      def_growth: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      resistance: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      res_growth: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      charm: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      cha_growth: {
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
      skill_icon: {
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
        allowNull: true,
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
      uses: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      weight: {
        allowNull: true,
        type: Sequelize.BIGINT,
      },
      range_min: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      range_max: {
        allowNull: true,
        type: Sequelize.BIGINT,
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("skills");
    await queryInterface.dropTable("spells");
  },
};
