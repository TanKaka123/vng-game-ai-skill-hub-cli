const { loadSkill } = require("../core/skillManager");
const { runAgent } = require("../core/agentRuntime");

module.exports = async (skillName) => {
  try {
    const skill = loadSkill(skillName);
    runAgent(skill);
  } catch (err) {
    console.error("❌ Failed to use skill:", err.message);
  }
};