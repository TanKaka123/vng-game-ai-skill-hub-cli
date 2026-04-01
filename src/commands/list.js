const fs = require("fs-extra");
const { skillsDir } = require("../utils/paths");

module.exports = async () => {
  const exists = await fs.pathExists(skillsDir);

  if (!exists) {
    console.log("No skills installed.");
    return;
  }

  const skills = await fs.readdir(skillsDir);

  console.log("Installed skills:");
  skills.forEach((s) => console.log("-", s));
};