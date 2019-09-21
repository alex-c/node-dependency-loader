import path = require('path');
import Library from '../Library';

let testDataDirectory = path.join(process.cwd(), './src/__tests_data__');

test('Recursively list files in directory', () => {
  const library = new Library();
  library.load(testDataDirectory);
  // expect(listFiles(testDataDirectory)).toEqual([
  //   path.join(testDataDirectory, 'lvl1_1/lvl2/test2.js'),
  //   path.join(testDataDirectory, 'lvl1_1/test1.js'),
  //   path.join(testDataDirectory, 'lvl1_2/test3.js'),
  // ]);
});
