const fs = require("fs");
const path = require("path");

function loadSkill(skillName) {
  const skillPath = path.join(require("../utils/paths").skillsDir, skillName);

  // 1. ưu tiên skill.json
  const jsonPath = path.join(skillPath, "skill.json");
  if (fs.existsSync(jsonPath)) {
    return {
      name: skillName,
      config: JSON.parse(fs.readFileSync(jsonPath, "utf-8"))
    };
  }

  // 2. fallback SKILL.md
  const mdPath = path.join(skillPath, "SKILL.md");
  if (fs.existsSync(mdPath)) {
    return {
      name: skillName,
      config: {
        systemPrompt: fs.readFileSync(mdPath, "utf-8")
      }
    };
  }

  throw new Error("No skill.json or SKILL.md found");
}

module.exports = { loadSkill };