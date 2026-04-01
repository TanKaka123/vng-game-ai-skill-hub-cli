const path = require("path");
const { skillsDir } = require("../utils/paths");

function loadSkill(skillName) {
  const skillPath = path.join(skillsDir, skillName);

  const config = require(path.join(skillPath, "skill.json"));

  return {
    name: skillName,
    config,
    path: skillPath,
  };
}

module.exports = {
  loadSkill,
};