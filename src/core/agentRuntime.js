function runAgent(skill) {
  console.log("Running agent with skill:", skill.name);

  console.log("System prompt:");
  console.log(skill.config.systemPrompt);

  console.log("\nAvailable tools:");
  console.log(skill.config.tools || []);
}

module.exports = {
  runAgent,
};