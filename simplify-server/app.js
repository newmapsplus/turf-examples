const fs = require('fs')
const turf = require('@turf/turf')

//read the utah counties file
fs.readFile('newzealand.json', 'utf8', (err, data) => {

  if (err) throw err;

  console.log('file read');

  //parse the string to geojson
  const newzealand = JSON.parse(data)

  console.log('parsed')

  // set simplify options
  const options = {tolerance: 0.01, highQuality: false};

  // simplify
  const simplified = turf.simplify(newzealand, options);
  const outFileName = 'simplified.json';

  //save polygon to new file
  fs.writeFile(outFileName, JSON.stringify(simplified), 'utf8', (err) => {
    if (err) throw err
    console.log(outFileName + ' written to file!')
  });

});
