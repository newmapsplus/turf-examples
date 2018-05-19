const fs = require('fs')
const turf = require('@turf/turf')
const chalk = require('chalk')

// read the points GeoJSON file
fs.readFile('points.json', 'utf8', (err, data) => {

   
    if (err) throw err;
    // parse the string to GeoJSON
    const points = JSON.parse(data)
    // convert to a TIN GeoJSON
    const convex = turf.convex(points)
    // output file name
    const outFileName = 'convex.json'
    
    // stringify the GeoJSON and write to file
    fs.writeFile(outFileName, JSON.stringify(convex), 'utf8', (err) => {
        if (err) throw err
        console.log(outFileName + ' written to file')
    });

})
