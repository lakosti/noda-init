import path from "path";
import fs from "fs/promises";

const workdir = path.join(process.cwd());

const filePath = path.join(workdir, "file.txt");

export const readFileCallback = () => {
  fs.readFile(filePath, (err, data) => {
    console.log(data.toString);
  });
};
