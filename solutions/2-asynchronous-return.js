import fs from 'fs';

// BEGIN
const write = (path, data, callb) => {
  fs.writeFile(path, data, 'utf-8', (error) => {
    if (error) {
      throw error;
    }
    callb();
  });
};

export default write;

// END