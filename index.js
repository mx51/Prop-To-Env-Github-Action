const core = require("@actions/core");

const file = core.getInput("file", {
  required: true,
});
const propName = core.getInput("prop_name", {
  required: true,
});
const envName = core.getInput("env_name", {
  required: true,
});

console.log("file : " + file);
console.log("propName : " + propName);
console.log("envName : " + envName);

core.exportVariable(envName, 'This-is-a-test1');
core.setOutput(envName, 'This-is-a-test2');