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
      {
        name: "Steel Sword",
        type_id: 1,
        str_mag: true,
        might: 8,
        hit: 85,
        critical: 0,
        durability: 50,
        weight: 10,
        range_min: 1,
        range_max: 1,
      },
      {
        name: "Silver Sword",
        type_id: 1,
        str_mag: true,
        might: 12,
        hit: 90,
        critical: 0,
        durability: 30,
        weight: 8,
        range_min: 1,
        range_max: 1,
      },
      {
        name: "Killing Edge",
        type_id: 1,
        str_mag: true,
        might: 8,
        hit: 85,
        critical: 25,
        durability: 20,
        weight: 10,
        range_min: 1,
        range_max: 1,
      },
      {
        name: "Training Sword",
        type_id: 1,
        str_mag: true,
        might: 3,
        hit: 100,
        critical: 0,
        durability: 50,
        weight: 4,
        range_min: 1,
        range_max: 1,
      },
      {
        name: "Brave Sword",
        type_id: 1,
        str_mag: true,
        might: 9,
        hit: 75,
        critical: 0,
        durability: 30,
        weight: 12,
        range_min: 1,
        range_max: 1,
        description: "2 consecutive hits when initiating combat",
      },
      {
        name: "Levin Sword",
        type_id: 1,
        str_mag: false,
        might: 9,
        hit: 70,
        critical: 0,
        durability: 25,
        weight: 9,
        range_min: 1,
        range_max: 2,
        description: "Deals magic-based damage",
      },
      {
        name: "Armorslayer",
        type_id: 1,
        str_mag: true,
        might: 8,
        hit: 80,
        critical: 0,
        durability: 20,
        weight: 11,
        range_min: 1,
        range_max: 1,

        description: "Effective against Armoured foes.",
      },
      {
        name: "Rapier",
        type_id: 1,
        str_mag: true,
        might: 7,
        hit: 95,
        critical: 10,
        durability: 40,
        weight: 5,
        range_min: 1,
        range_max: 1,

        description: "Effective against Armoured and Cavalry foes.",
      },
      {
        name: "Devil Sword",
        type_id: 1,
        str_mag: true,
        might: 13,
        hit: 65,
        critical: 0,
        durability: 30,
        weight: 10,
        range_min: 1,
        range_max: 1,

        description: "Inflicts 10 damage to the wielder after combat.",
      },
      {
        name: "Wo Dao",
        type_id: 1,
        str_mag: true,
        might: 8,
        hit: 90,
        critical: 30,
        durability: 15,
        weight: 5,
        range_min: 1,
        range_max: 1,
      },
      {
        name: "Sword of Seiros",
        type_id: 1,
        str_mag: true,
        might: 11,
        hit: 80,
        critical: 10,
        durability: 30,
        weight: 6,
        range_min: 1,
        range_max: 1,

        description:
          "Sacred weapon. Heals 50% of damage dealt and restores HP every turn.",
      },
      {
        name: "Sword of Begalta",
        type_id: 1,
        str_mag: true,
        might: 12,
        hit: 100,
        critical: 0,
        durability: 30,
        weight: 5,
        range_min: 1,
        range_max: 1,

        description:
          "Sacred weapon. Restores HP every turn; effect increased with Crest of Riegan.",
      },
      {
        name: "Sword of Moralta",
        type_id: 1,
        str_mag: true,
        might: 13,
        hit: 75,
        critical: 25,
        durability: 30,
        weight: 9,
        range_min: 1,
        range_max: 1,

        description:
          "Sacred weapon. Restores HP every turn; effect increased with Crest of Fraldarius.",
      },
      {
        name: "Cursed Ashiya Sword",
        type_id: 1,
        str_mag: true,
        might: 13,
        hit: 70,
        critical: 40,
        durability: 15,
        weight: 8,
        range_min: 1,
        range_max: 1,

        description: "Inflicts 5 damage to the wielder after combat.",
      },
      {
        name: "Sword of Zoltan",
        type_id: 1,
        str_mag: true,
        might: 13,
        hit: 90,
        critical: 0,
        durability: 25,
        weight: 9,
        range_min: 1,
        range_max: 1,
      },
      {
        name: "Thunderbrand",
        type_id: 1,
        str_mag: true,
        might: 13,
        hit: 70,
        critical: 10,
        durability: 30,
        weight: 7,
        range_min: 1,
        range_max: 1,

        description:
          "Hero’s Relic. 2 consecutive hits when initiating combat; enables Foudroyant for Crest of Charon.",
      },
      {
        name: "Blutgang",
        type_id: 1,
        str_mag: false,
        might: 13,
        hit: 80,
        critical: 0,
        durability: 20,
        weight: 7,
        range_min: 1,
        range_max: 1,

        description:
          "Hero’s Relic. Deals magic-based damage; enables Beast Fang for Crest of the Beast.",
      },
      {
        name: "Sword of the Creator",
        type_id: 1,
        str_mag: false,
        might: 7,
        hit: 90,
        critical: 0,
        durability: 20,
        weight: 9,
        range_min: 1,
        range_max: 2,

        description:
          "Hero’s Relic. Enables Ruptured Heaven for Crest of Flames. If not wielded by protagonist, Range becomes 1 and Weight +10.",
      },
      {
        name: "Mercurius",
        type_id: 1,
        str_mag: true,
        might: 15,
        hit: 100,
        critical: 10,
        durability: 40,
        weight: 7,
        range_min: 1,
        range_max: 1,
      },
      {
        name: "Iron Sword+",
        type_id: 1,
        str_mag: true,
        might: 6,
        hit: 100,
        critical: 0,
        durability: 45,
        weight: 5,
        range_min: 1,
        range_max: 1,
      },
      {
        name: "Steel Sword+",
        type_id: 1,
        str_mag: true,
        might: 10,
        hit: 85,
        critical: 0,
        durability: 55,
        weight: 10,
        range_min: 1,
        range_max: 1,
      },
      {
        name: "Silver Sword+",
        type_id: 1,
        str_mag: true,
        might: 13,
        hit: 90,
        critical: 0,
        durability: 40,
        weight: 8,
        range_min: 1,
        range_max: 1,
      },
      {
        name: "Brave Sword+",
        type_id: 1,
        str_mag: true,
        might: 10,
        hit: 85,
        critical: 0,
        durability: 40,
        weight: 12,
        range_min: 1,
        range_max: 1,
        description: "2 consecutive hits when initiating combat.",
      },
      {
        name: "Killing Edge+",
        type_id: 1,
        str_mag: true,
        might: 9,
        hit: 85,
        critical: 35,
        durability: 25,
        weight: 10,
        range_min: 1,
        range_max: 1,
      },
      {
        name: "Training Sword+",
        type_id: 1,
        str_mag: true,
        might: 3,
        hit: 100,
        critical: 0,
        durability: 65,
        weight: 2,
        range_min: 1,
        range_max: 1,
      },
      {
        name: "Levin Sword+",
        type_id: 1,
        str_mag: false,
        might: 9,
        hit: 70,
        critical: 0,
        durability: 30,
        weight: 9,
        range_min: 1,
        range_max: 3,
        description: "Deals magic-based damage.",
      },
      {
        name: "Armorslayer+",
        type_id: 1,
        str_mag: true,
        might: 8,
        hit: 100,
        critical: 5,
        durability: 25,
        weight: 11,
        range_min: 1,
        range_max: 1,
        description: "Effective against Armoured foes.",
      },
      {
        name: "Rapier+",
        type_id: 1,
        str_mag: true,
        might: 9,
        hit: 95,
        critical: 20,
        durability: 45,
        weight: 5,
        range_min: 1,
        range_max: 1,
        description: "Effective against Armoured and Cavalry foes.",
      },
      {
        name: "Devil Sword+",
        type_id: 1,
        str_mag: true,
        might: 16,
        hit: 65,
        critical: 0,
        durability: 30,
        weight: 10,
        range_min: 1,
        range_max: 1,

        description: "Inflicts 10 damage to the wielder after combat.",
      },
      {
        name: "Wo Dao+",
        type_id: 1,
        str_mag: true,
        might: 9,
        hit: 90,
        critical: 40,
        durability: 25,
        weight: 5,
        range_min: 1,
        range_max: 1,
      },
      {
        name: "Cursed Ashiya Sword+",
        type_id: 1,
        str_mag: true,
        might: 14,
        hit: 70,
        critical: 50,
        durability: 20,
        weight: 8,
        range_min: 1,
        range_max: 1,
        description: "Inflicts 5 damage to the wielder after combat.",
      },
      {
        name: "Sword of Zoltan+",
        type_id: 1,
        str_mag: true,
        might: 16,
        hit: 90,
        critical: 5,
        durability: 30,
        weight: 9,
        range_min: 1,
        range_max: 1,
      },
      {
        name: "Venin Edge+",
        type_id: 1,
        str_mag: true,
        might: 6,
        hit: 100,
        critical: 0,
        durability: 25,
        weight: 6,
        range_min: 1,
        range_max: 1,
        description: "Inflicts poison.",
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
