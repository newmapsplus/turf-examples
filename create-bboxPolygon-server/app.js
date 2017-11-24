const fs = require('fs')
const turf = require('@turf/turf')

//read the utah counties file
fs.readFile('utahcounties2.json', 'utf8', (err, data) => {

  if (err) throw err;

  console.log('file read');

  //parse the string to geojson
  const counties = JSON.parse(data)

  console.log('parsed')

  //get bounding box of utah counties
  const bboxCounties = turf.bbox(counties)

  //create polygon from bbox
  const bboxCountiesPoly = turf.bboxPolygon(bboxCounties)
  const outFileName = '../voronoi-client/bboxCounties.json'

  //save polygon to new file
  fs.writeFile(outFileName, JSON.stringify(bboxCountiesPoly), 'utf8', (err) => {
    if (err) throw err
    console.log(outFileName + ' written to file!')
  });

})
