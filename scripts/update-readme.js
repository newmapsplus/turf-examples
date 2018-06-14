const fs = require('fs');
const async = require('async');

fs.readdir('.', (err, dirs) => {
  
  if (err) throw err;

  const skipDirs = ['.git', 'node_modules', 'scripts'],
        filePaths = [];

  for (let dir in dirs) {
    // don't pull info from directories specified above
    if (fs.lstatSync(dirs[dir]).isDirectory() && skipDirs.indexOf(dirs[dir]) === -1) {
      filePaths.push(dirs[dir] + '/README.md');
    }
  }
  pullExampleReadMes(filePaths);

});

function pullExampleReadMes(paths) {

  async.concat(paths, fs.readFile, (err, files) => {
    writeReadMe(files.toString())
  });

}

function writeReadMe(contents) {

  fs.writeFile('README-test.md', contents, (err) => {
    if(err) throw err;
    console.log('written to file')
  });

}

