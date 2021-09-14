const fs = require('fs');
const path = require('path');

const mkdirSync = (dirPath) => {
  try {
    fs.mkdirSync(dirPath);
  } catch (e) {
    if (e.code !== 'EEXIST') throw e;
  }
};

const deleteFolderRecursive = dirPath => (
  new Promise((resolve, reject) => {
    try {
      if (fs.existsSync(dirPath)) {
        fs.readdirSync(dirPath).forEach((file, index) => {
          const curPath = `${dirPath}/${file}`;
          if (fs.lstatSync(curPath).isDirectory()) {
            deleteFolderRecursive(curPath);
          } else {
            fs.unlinkSync(curPath);
          }
        });
        fs.rmdirSync(dirPath);
      }
      resolve();
    } catch (e) {
      throw e;
    }
  })
);

const copyFiles = (srcDir, dstDir) => {
  let results = [];
  const list = fs.readdirSync(srcDir);
  let src,
    dst;
  list.forEach((file) => {
    src = `${srcDir}/${file}`;
    dst = `${dstDir}/${file}`;
    const stat = fs.statSync(src);
    if (stat && stat.isDirectory()) {
      try {
        console.log(`creating dir: ${dst}`);
        fs.mkdirSync(dst);
      } catch (e) {
        console.log(`directory already exists: ${dst}`);
      }
      results = results.concat(copyFiles(src, dst));
    } else {
      try {
        console.log(`copying file: ${dst}`);
        fs.createReadStream(src).pipe(fs.createWriteStream(dst));
        // or use
        // fs.writeFileSync(dst, fs.readFileSync(src));
      } catch (e) {
        console.log(`could't copy file: ${dst}`);
      }
      results.push(src);
    }
  });
  return results;
};

module.exports = function copyFilesToFolder(src, dist) {
  const source = path.resolve(src);
  const to = path.resolve(dist);
  deleteFolderRecursive(to)
    .then(() => {
      console.log('Creating folder...');
      mkdirSync(path.resolve(to));
    })
    .then(() => {
      console.log('Coping files...');
      console.log(`From ${source}`);
      copyFiles(path.resolve(source), path.resolve(to));
    })
    .catch((err) => {
        console.log(err);
    });
};
