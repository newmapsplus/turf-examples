const fs = require('fs')
const turf = require('@turf/turf')

// read the points GeoJSON file
fs.readFile('points.json', 'utf8', (err, data) => {
    if (err) throw err
    // parse the string to GeoJSON
    const points = JSON.parse(data)
    // convert to a TIN GeoJSON
    const tin = turf.tin(points)
    // output file name
    const outFileName = 'tin.json'
    
    // stringify the GeoJSON and write to file
    fs.writeFile(outFileName, JSON.stringify(tin), 'utf8', (err) => {
        if (err) throw err
        console.log(outFileName + ' written to file')
    });

})
