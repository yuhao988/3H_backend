CREATE TABLE "combat_arts"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" BIGINT NOT NULL,
    "str_mag" BOOLEAN NOT NULL,
    "might" BIGINT NOT NULL,
    "hit" BIGINT NULL,
    "critical" BIGINT NULL,
    "durability_cost" BIGINT NOT NULL,
    "range_min" BIGINT NOT NULL,
    "rang_max" BIGINT NOT NULL
);
ALTER TABLE
    "combat_arts" ADD PRIMARY KEY("id");
CREATE TABLE "weapon"(
    "id" BIGINT NOT NULL,
    "name" BIGINT NOT NULL,
    "type" BIGINT NOT NULL,
    "might" BIGINT NOT NULL,
    "hit" BIGINT NOT NULL,
    "critical" BIGINT NOT NULL,
    "range_min" BIGINT NOT NULL,
    "range_max" BIGINT NOT NULL,
    "uses" BIGINT NOT NULL,
    "weight" BIGINT NOT NULL
);
ALTER TABLE
    "weapon" ADD PRIMARY KEY("id");
CREATE TABLE "characters"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "base_lv" BIGINT NOT NULL,
    "HP" BIGINT NOT NULL,
    "HP_growth" BIGINT NOT NULL,
    "Strength" BIGINT NOT NULL,
    "Str_growth" BIGINT NOT NULL,
    "Magic" BIGINT NOT NULL,
    "Mag_growth" BIGINT NOT NULL,
    "Dexterity" BIGINT NOT NULL,
    "Dex_growth" BIGINT NOT NULL,
    "Luck" BIGINT NOT NULL,
    "Lck_growth" BIGINT NOT NULL,
    "Defence" BIGINT NOT NULL,
    "Def_growth" BIGINT NOT NULL,
    "Resistance" BIGINT NOT NULL,
    "Res_growth" BIGINT NOT NULL,
    "Charm" BIGINT NOT NULL,
    "Chm_growth" BIGINT NOT NULL
);
ALTER TABLE
    "characters" ADD PRIMARY KEY("id");
CREATE TABLE "budding"(
    "id" BIGINT NOT NULL,
    "character" BIGINT NOT NULL,
    "skill" BIGINT NOT NULL,
    "combat_art" BIGINT NOT NULL
);
ALTER TABLE
    "budding" ADD PRIMARY KEY("id");
CREATE TABLE "boon&bane"(
    "id" BIGINT NOT NULL,
    "character" BIGINT NOT NULL,
    "skill" BIGINT NOT NULL,
    "boon" BOOLEAN NOT NULL
);
ALTER TABLE
    "boon&bane" ADD PRIMARY KEY("id");
CREATE TABLE "spell_list"(
    "id" BIGINT NOT NULL,
    "character" BIGINT NOT NULL,
    "spells" BIGINT NULL
);
ALTER TABLE
    "spell_list" ADD PRIMARY KEY("id");
CREATE TABLE "spells"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "uses" BIGINT NOT NULL,
    "might" BIGINT NOT NULL,
    "hit" BIGINT NOT NULL,
    "critical" BIGINT NOT NULL,
    "range_min" BIGINT NOT NULL,
    "range_max" BIGINT NOT NULL,
    "weight" BIGINT NOT NULL
);
ALTER TABLE
    "spells" ADD PRIMARY KEY("id");
CREATE TABLE "skills"(
    "id" BIGINT NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "E+" VARCHAR(255) NULL,
    "D" VARCHAR(255) NULL,
    "D+" VARCHAR(255) NULL,
    "C" VARCHAR(255) NULL,
    "C+" VARCHAR(255) NULL,
    "B" VARCHAR(255) NULL,
    "B+" VARCHAR(255) NULL,
    "A" VARCHAR(255) NULL,
    "A+" VARCHAR(255) NULL,
    "S" VARCHAR(255) NULL,
    "S+" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "skills" ADD PRIMARY KEY("id");
ALTER TABLE
    "budding" ADD CONSTRAINT "budding_skill_foreign" FOREIGN KEY("skill") REFERENCES "skills"("id");
ALTER TABLE
    "spell_list" ADD CONSTRAINT "spell_list_spells_foreign" FOREIGN KEY("spells") REFERENCES "spells"("id");
ALTER TABLE
    "weapon" ADD CONSTRAINT "weapon_type_foreign" FOREIGN KEY("type") REFERENCES "skills"("id");
ALTER TABLE
    "budding" ADD CONSTRAINT "budding_character_foreign" FOREIGN KEY("character") REFERENCES "characters"("id");
ALTER TABLE
    "boon&bane" ADD CONSTRAINT "boon&bane_skill_foreign" FOREIGN KEY("skill") REFERENCES "skills"("id");
ALTER TABLE
    "combat_arts" ADD CONSTRAINT "combat_arts_type_foreign" FOREIGN KEY("type") REFERENCES "skills"("id");
ALTER TABLE
    "boon&bane" ADD CONSTRAINT "boon&bane_character_foreign" FOREIGN KEY("character") REFERENCES "characters"("id");
ALTER TABLE
    "budding" ADD CONSTRAINT "budding_combat_art_foreign" FOREIGN KEY("combat_art") REFERENCES "combat_arts"("id");
ALTER TABLE
    "spell_list" ADD CONSTRAINT "spell_list_character_foreign" FOREIGN KEY("character") REFERENCES "characters"("id");