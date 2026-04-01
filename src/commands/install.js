const git = require("simple-git");
const path = require("path");
const fs = require("fs-extra");
const { skillsDir } = require("../utils/paths");

module.exports = async (repo) => {
  try {
    const name = repo.split("/").pop().replace(".git", "");
    const target = path.join(skillsDir, name);

    await fs.ensureDir(skillsDir);

    console.log("Cloning skill...");
    await git().clone(repo, target);

    console.log(`✅ Installed skill: ${name}`);
  } catch (err) {
    console.error("❌ Install failed:", err.message);
  }
};