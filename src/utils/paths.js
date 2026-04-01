const os = require("os");
const path = require("path");

const baseDir = path.join(os.homedir(), ".mycli");
const skillsDir = path.join(baseDir, "skills");

module.exports = {
  baseDir,
  skillsDir,
};