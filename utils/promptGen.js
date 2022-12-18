const descriptives = "in the style of <who?>, unreal 5 render, realistic, 8k";

const conversions = {
  cha: { positive: "charismatic", negative: "poorly spoken" },
  con: { positive: "healthy", negative: "sickly" },
  dex: { positive: "nimble", negative: "clumsy" },
  int: { positive: "intelligent", negative: "stupid looking" },
  str: { positive: "strong", negative: "weak" },
  wis: { positive: "wise", negative: "foolish" },

  //classes
  cleric: "cleric",
  druid: "druid",
  bard: "bard",
  warlock: "warlock",
  paladin: "paladin",
  artificer: "engineer and tinkerer",
  ranger: "archer",
  rogue: "rogue",

  //races
  dragonborn: "dragon humanoid",
  dwarf: "dwarf",
  elf: "elf",
  gnome: "gnome",
  human: "human",
  halfling: "thing that's half a human",
  halfelf: "half-elf half-human, long ears",
  halforc: "half-orc half-human, big teeth",
  tiefling: "horned forest demon",
  "wood elf": "wood elf",
  aarakocra: "humanoid bird",

  //backgrounds
  //armorWorn
};

const createPrompt = (data) => {
  //IDEA: could pull synonyms from a thesaurous api and use those to create more interesting prompts

  const adjectives = []; //stats adjs - this is a bad way of doing this bit

  Object.keys(data).forEach((key) => {
    //handle stats
    if (data[key][0] > 3) {
      console.log("pos", key, data[key]);
      adjectives.push(conversions[key].positive);
    } else if (data[key][0] < 0) {
      console.log("neg", key, data[key]);
      adjectives.push(conversions[key].negative);
    }
  });
  console.log("adjectives: ", adjectives);

  return `
    ${data.name}, a level ${data.level}, ${adjectives[0]} ${adjectives[1] ? adjectives[1] : ""} ${data.background} ${
    conversions[data.race.toLowerCase()]
  } ${conversions[data.class.toLowerCase()]} wearing ${data.armorWorn} and holding a <insert weapon>, ${descriptives}
  `;
};

module.exports = { createPrompt };
