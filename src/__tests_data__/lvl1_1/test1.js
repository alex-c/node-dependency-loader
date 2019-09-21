const Descriptor = require('/lib/Descriptor');

module.exports = new Descriptor('test1', [], function(dependencies) {
  return {
    name: 'test1',
  };
});
