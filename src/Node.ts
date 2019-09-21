class Node {
  id: string;
  children: Array<Node> = [];
  constructor(id: string) {
    this.id = id;
  }
}

export default Node;
