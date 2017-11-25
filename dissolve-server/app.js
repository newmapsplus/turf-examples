const fs = require('fs')
const turf = require('@turf/turf')

// read the points GeoJSON file
fs.readFile('buffers.json', 'utf8', (err, data) => {
    if (err) throw err
    // parse the string to GeoJSON
    const buffers = JSON.parse(data)
    // dissolves features
    const dissolve = turf.dissolve(buffers)
    // output file name
    const outFileName = 'dissolve.json'
    
    // stringify the GeoJSON and write to file
    fs.writeFile(outFileName, JSON.stringify(dissolve), 'utf8', (err) => {
        if (err) throw err
        console.log(outFileName + ' written to file')
    });

})
