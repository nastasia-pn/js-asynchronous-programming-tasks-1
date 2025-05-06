import fsp from 'fs/promises';

// BEGIN
export const exchange = async (path1, path2) => {
  const content1 = await fsp.readFile(path1, 'utf-8');
  const content2 = await fsp.readFile(path2, 'utf-8');
  
  await fsp.writeFile(path1, content2);
  await fsp.writeFile(path2, content1);
};

// END