const core = require("@actions/core");
const fs = require('fs')

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

const parsed = require('dotenv').parse(fs.readFileSync(file, 'utf8'))
Object.keys(parsed).forEach(function (key) {
    if (key == propName) {
        console.log(envName + "=" + parsed[key]);

        core.exportVariable(envName, parsed[key]);
        core.setOutput(envName, parsed[key]);
    }
});
