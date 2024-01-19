const cors = require("cors");
const express = require("express");
//const { auth } = require("express-oauth2-jwt-bearer");


require("dotenv").config();

const PORT = process.env.PORT || 2999;
const app = express();

// importing Routers
const CharacterRouter = require("./routers/characterRouter");
const SkillRouter = require("./routers/skillRouter");
const SpellRouter = require("./routers/spellRouter");
const WeaponRouter = require("./routers/weaponRouter");
const CARouter = require("./routers/caRouter");
const CharSkilRouter = require("./routers/charSkillRouter");

// importing Controllers
const CharacterController = require("./controllers/characterController");
const SkillController = require("./controllers/skillController");
const SpellController = require("./controllers/spellController");
const WeaponController = require("./controllers/weaponController");
const CAController = require("./controllers/caController");
const CharSkilController = require("./controllers/charSkillController");

// importing DB
const db = require("./db/models/index");
const { characters, skills, spells, weapon, combat_arts, character_skills } =
  db;

// initializing Controllers -> note the lowercase for the first word
const characterController = new CharacterController(characters);
const skillController = new SkillController(skills);
const spellController = new SpellController(spells);
const weaponController = new WeaponController(weapon);
const caController = new CAController(combat_arts);
const charSkillController = new CharSkilController(character_skills);

// initializing Routers
const characterRouter = new CharacterRouter(
  express,
  characterController
).routes();
const skillRouter = new SkillRouter(express, skillController).routes();
const spellRouter = new SpellRouter(express, spellController).routes();
const weaponRouter = new WeaponRouter(express, weaponController).routes();
const cARouter = new CARouter(express, caController).routes();
const charSkilRouter = new CharSkilRouter(
  express,
  charSkillController
).routes();

// Enable CORS access to this server
app.use(cors());

// Enable reading JSON request bodies
app.use(express.json());

// USING the routers
app.use("/characters", characterRouter);
app.use("/skill_types", skillRouter);
app.use("/spells", spellRouter);
app.use("/weapons", weaponRouter);
app.use("/comabt_arts", cARouter);
app.use("/skill_list", charSkilRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
