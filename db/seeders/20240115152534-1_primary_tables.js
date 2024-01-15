"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("characters", [
      {
        name: "Byleth",
        image_link:
          "https://static.wikia.nocookie.net/fireemblem/images/8/8d/Byleth-M.png/revision/latest/scale-to-width-down/1000?cb=20210507010217",
        base_lv: 1,
        hp: 27,
        hp_growth: 45,
        strength: 13,
        str_growth: 45,
        magic: 6,
        mag_growth: 35,
        dexterity: 9,
        dex_growth: 45,
        speed: 8,
        spd_growth: 45,
        luck: 8,
        lck_growth: 45,
        defence: 6,
        def_growth: 35,
        resistance: 6,
        res_growth: 30,
        charm: 7,
        cha_growth: 45,
      },
    ]);
    await queryInterface.bulkInsert("skills", [
      {
        name: "Sword",
        "E+": "Sword Prowess Lv1",
        "D+": "Sword Prowess Lv2",
        "C+": "Sword Prowess Lv3",
        B: "Axebreaker",
        "B+": "Sword Prowess Lv4",
        "A+": "Sword Prowess Lv5",
        S: "Sword Critical +10",
        "S+": "Swordfaire",
      },
    ]);
    await queryInterface.bulkInsert("spells", [
      {
        name: "Heal",
        type: "White",
        might: 8,
        hit: 100,
        critical: 0,
        uses: 10,
        range_min: 1,
        range_max: 1,
      },
      {
        name: "Nosferatu",
        type: "White",
        might: 1,
        hit: 80,
        critical: 0,
        uses: 12,
        weight:8,
        range_min: 1,
        range_max: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('characters');
    await queryInterface.bulkDelete('skills');
    await queryInterface.bulkDelete('spells');
  },
};
