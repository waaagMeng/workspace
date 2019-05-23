const fs = require("fs");
const path = require("path");

function mkdirsSync(dirPath) {
  if (fs.existsSync(dirPath)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirPath))) {
      fs.mkdirSync(dirPath);
      return true;
    }
  }
}
module.exports = {
  readJSON(path) {
    let file = fs.readFileSync(path, "utf8").trim();
    return JSON.parse(file);
  },
  writeFile(dirPath, fileName, ext) {
    mkdirsSync(dirPath);
    return fs.createWriteStream(dirPath + fileName + "." + ext);
  },
  arrValid(arr) {
    return arr.filter(ele => ele);
  }
};
