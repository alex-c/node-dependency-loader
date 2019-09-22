class Descriptor {
  id: string;
  dependencies: Array<string>;
  load: Function;
  constructor(id: string, dependencies: string[], loadFn: Function) {
    this.id = id;
    this.dependencies = dependencies;
    this.load = loadFn;
  }
}

export default Descriptor;
