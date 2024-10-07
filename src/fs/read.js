import { readFile } from 'fs/promises';
import { makePath } from '../utils/utils.js';

const read = async () => {
 
  const pathToFile = makePath(import.meta.url,'files', 'fileToRead.txt')
  console.log(pathToFile)
  try {
    const content = await readFile(pathToFile, { encoding: 'utf8' });
    console.log(content);
  } catch (err) {
    throw new Error('FS operation failed')
  }
};

await read();