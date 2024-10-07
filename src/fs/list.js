import { readdir } from 'fs/promises';
import { makePath } from '../utils/utils.js';

const list = async () => {
  const pathToFolder = makePath(import.meta.url,'files')
  
  try {
    const files = await readdir(pathToFolder);
    console.log(files)
   }

  catch {
    throw new Error('FS operation failed')
    }
};

await list();