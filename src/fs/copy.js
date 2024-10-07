import { cp, access } from 'fs/promises';
import { makePath } from '../utils/utils.js';

const copy = async () => {
  const pathToCopy = makePath(import.meta.url, 'files')
  const pathToDist = makePath(import.meta.url, 'files_copy')
  
  try {
    await access(pathToCopy)
    console.log('files exist')

    await cp(pathToCopy, pathToDist, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
    console.log('files copied');

  }
  catch {
    throw new Error('FS operation failed')
  }

}



await copy();
