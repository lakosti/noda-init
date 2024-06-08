import path from "path";
import fs from "fs/promises";

const workdir = path.join(process.cwd());

const filePath = path.join(workdir, "file.txt");

export const readFileAsync = async () => {
  const content = await fs.readFile(filePath, "utf8");
  console.log(content);
};
