import listFiles from './utils/listFiles';
import Descriptor from './Descriptor';

class Library {
  nodes: { [id: string]: Node } = {};

  constructor() {}

  load(directory: string) {
    let descriptors: Descriptor[] = this.loadFiles(directory);
  }

  private loadFiles(directory: string) {
    let files: string[] = listFiles(directory);
    let descriptors: Descriptor[] = [];
    files.forEach(file => {
      if (file.endsWith('.js')) {
        let pkg: any = require(file);
        if (pkg instanceof Descriptor) {
          descriptors.push(pkg);
        } else {
          console.warn(`Ignoring '${file}', as it does not expose an expected descriptor.`);
        }
      }
    });
    return descriptors;
  }
}

export default Library;
