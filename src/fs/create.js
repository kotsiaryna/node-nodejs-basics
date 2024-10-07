import { access, writeFile } from 'fs/promises';
import { makePath } from '../utils/utils.js';


const create = async () => {
  const data = "I am fresh and young"
  const fileName = 'fresh.txt'
  const path = makePath(import.meta.url, 'files', fileName)
  const erMess = 'FS operation failed'

    await access(path).then(
    () => {
      console.log('exist');
      throw new Error(erMess)
    },
    () => {
      console.error('file not exists');
      writeFile(path, data)

  });
 
};

await create();