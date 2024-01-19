"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("weapons", [
      {
        name: "Iron Sword",
        type_id: 1,
        str_mag: true,
        might: 5,
        hit: 90,
        critical: 0,
        durability: 40,
        weight: 5,
        range_min: 1,
        range_max: 1,
        
      },
    ]);
    await queryInterface.bulkInsert("combat_arts", [
      {
        name: "Wrath Strike",
        type_id: 1,
        str_mag: true,
        might: 5,
        hit: 10,
        durability_cost: 3,
        range_min: 1,
        range_max: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("weapons");
    await queryInterface.bulkDelete("combat_arts");
  },
};
