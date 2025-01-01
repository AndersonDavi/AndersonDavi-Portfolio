const { writeFileSync, mkdirSync, existsSync } = require("fs");
require("dotenv").config();

const targetPath = getTargetPath(process.env["production"]);

function getTargetPath(production = Boolean) {
  return production === true
    ? "./src/environments/environments.prod.ts"
    : "./src/environments/environments.ts";
}

const envFileContent = `export const environment = {
  WEB3FORM_KEY: '${process.env["WEB3FORM_KEY"]}',
};`;

mkdirSync("./src/environments", { recursive: true });

writeFileSync(targetPath, envFileContent);
