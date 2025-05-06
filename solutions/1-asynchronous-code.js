import fs from 'fs';

// BEGIN
const print = async (path) => {
  const data = await fs.promises.readFile(path, 'utf-8');
  console.log(data);
};

export default print;
// END
