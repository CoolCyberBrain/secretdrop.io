module.exports = {
  "pre-commit": "npx lint-staged",
  "commit-msg": "npx commitlint -e",
  "pre-push": "npm test",
};