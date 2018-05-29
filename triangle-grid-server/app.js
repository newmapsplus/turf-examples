const fs = require('fs');
const turf = require('@turf/turf');
const chalk = require('chalk');

fs.readFile('hospitals.json', 'utf8', (err, data) => {
  if (err) throw err;

  // remember to parse the incoming GeoJSON text
  const hospitals = JSON.parse(data);

  createTriangleGrid(hospitals);
});

function createTriangleGrid(hospitals) {
  // define bbox to continental usa
  const bbox = [-125, 23, -65, 50];

  // define our cell Diameter
  const cellSide = .7;
  // define units
  const options = {
    units: 'degrees'
  };
  // create the triangle polygons
  let triangleGrid = turf.triangleGrid(bbox, cellSide, options);

  sumPoints(hospitals, triangleGrid);
}

function sumPoints(hospitals, triangleGrid) {

  // option for turf.booleanPointInPolygon()
  // and other variables don't
  // need redefined with each loop
  const options = {
    ignoreBoundary: true
  }

  let count;

  // // loop through each triangle in trianglegrid
  turf.featureEach(triangleGrid, (triangle, i) => {
    // reset counter to zero for each triangle
    count = 0;

    // loop through each point point in hospitals
    turf.featureEach(hospitals, (point) => {

      // if the point is inside the hex
      if (turf.booleanPointInPolygon(point, triangle, options)) {
        count++; // increment by one
      }
    })

    // output progress
    console.log(chalk.green("adding count of " + count + " to triangle #: " + i));

    // update triangle properties with count
    triangle.properties = Object.assign({}, triangle.properties, {
      "count": count
    });

  })

  console.log(chalk.blue('ready to write the triangleGrid to file'));

  // truncate the coordinate precision to reduce file size
  triangleGrid = turf.truncate(triangleGrid, {
    precision: 5
  })

  writeTriangleGrid(triangleGrid)
}

function writeTriangleGrid(triangleGrid) {
  // define output file name
  const outFileName = 'trianglegrid2.json'

  // stringify the triangleGrid and write to file
  fs.writeFile(outFileName, JSON.stringify(triangleGrid), 'utf-8', (err) => {
    if (err) throw err;
    console.log(chalk.green(outFileName + ' written to file!'));
  });
}
