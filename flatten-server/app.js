const fs = require('fs')
const turf = require('@turf/turf')

// //read the points GeoJSON file
// fs.readFile('states.json', 'utf8', (err, data) => {
//     if (err) throw err

// //parse the string to GeoJSON
// let states = JSON.parse(data)

// var flatten = turf.flatten(data)

var multiGeometry = turf.multiPolygon([
    [[[102.0, 2.0], [103.0, 2.0], [103.0, 3.0], [102.0, 3.0], [102.0, 2.0]]],
    [[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]],
    [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]]]
]);

var flatten = turf.flatten(multiGeometry);

const outFileName = 'data/flatten.json'

// // stringify the GeoJSON and write to file
fs.writeFile(outFileName, JSON.stringify(flatten), 'utf8', (err) => {
    if (err) throw err

    console.log(outFileName + ' written to file')
})

//})
