import { access, rename as fsRename } from 'fs/promises';
import { makePath } from '../utils/utils.js';

const rename = async () => {

  const oldPath = makePath(import.meta.url, 'files', 'wrongFilename.txt')
  const newPath = makePath(import.meta.url, 'files', 'properFilename.md')

    access(newPath).then(
      ()=>  {throw new Error('FS operation failed')},
      () => {
        fsRename(oldPath, newPath).catch(() => { throw new Error('FS operation failed')})
      }
    )
  }
await rename();