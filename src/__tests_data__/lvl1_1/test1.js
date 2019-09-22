const path = require('path');
const Descriptor = require(path.join(process.cwd(), './lib/Descriptor.js')).default;

module.exports = new Descriptor('test1', [], function(dependencies) {
  return {
    name: 'test1',
  };
});
