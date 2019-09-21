import listFiles from './utils/listFiles';
import Descriptor from './Descriptor';

class Library {
  rootNodes: Node[] = [];
  nodes: Node[] = [];

  constructor() {}

  validate() {}

  load(directory: string) {
    let files: string[] = listFiles(directory);
    files.forEach(file => {
      let pkg: any = require(file);
      if (pkg instanceof Descriptor) {
        console.log(pkg.id);
      } else {
        console.warn(`Ignoring '${file}'.`);
      }
    });
  }
}

export default Library;
