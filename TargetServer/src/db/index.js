import fs from "fs";
import path from "path";

const users = JSON.parse(fs.readFileSync(path.join(__dirname, "db.json")));

export default users;