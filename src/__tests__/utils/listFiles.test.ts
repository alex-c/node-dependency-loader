import path = require('path');
import listFiles from '../../utils/listFiles';

let testDataDirectory = './src/__tests_data__';

test('Recursively list files in directory', () => {
  expect(listFiles(testDataDirectory)).toEqual([
    path.join(testDataDirectory, 'lvl1_1/lvl2/test2.js'),
    path.join(testDataDirectory, 'lvl1_1/test1.js'),
    path.join(testDataDirectory, 'lvl1_2/test3.js'),
  ]);
});
