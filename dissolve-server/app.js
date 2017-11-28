const fs = require('fs')
const turf = require('@turf/turf')

// read the points GeoJSON file
fs.readFile('buffers.json', 'utf8', (err, data) => {
    if (err) throw err
    
    // parse the string to GeoJSON
    let buffers = JSON.parse(data)

    // keep iterating until there is only one feature
    while(buffers.features.length > 1) {
        buffers = turf.dissolve(buffers)
    }
    
    // output file name
    const outFileName = 'dissolve.json'
    
    // // stringify the GeoJSON and write to file
    fs.writeFile(outFileName, JSON.stringify(buffers), 'utf8', (err) => {
        if (err) throw err
        console.log(outFileName + ' written to file')
    });

})
