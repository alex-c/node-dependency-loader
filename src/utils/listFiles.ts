import fs = require('fs');
import path = require('path');

// Synchronously, recursively lists files in a given directory
const listFiles = function(dir: string, result: string[] = []) {
  let files: string[] = fs.readdirSync(dir);
  files.forEach(function(file: string) {
    let filePath: string = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      result = listFiles(filePath, result);
    } else {
      result.push(filePath);
    }
  });
  return result;
};

export default listFiles;
