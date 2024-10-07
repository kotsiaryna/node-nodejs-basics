import { rm } from 'fs/promises';
import { makePath } from '../utils/utils.js';

const remove = async () => {
  const pathToFile = makePath(import.meta.url, 'files', 'fileToRemove.txt')

  try {
    await rm(pathToFile)
  }
  catch {
    throw new Error('FS operation failed')
  }
};

await remove();