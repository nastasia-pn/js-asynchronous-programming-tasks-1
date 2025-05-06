import fsp from 'fs/promises';

// BEGIN
export const reverse = async (filepath) => {
  const content = await fsp.readFile(filepath, 'utf-8');
  const lines = content.trim().split('\n');
  const reversedContent = lines.reverse().join('\n');
  await fsp.writeFile(filepath, reversedContent);
};

// END