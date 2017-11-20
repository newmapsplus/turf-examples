const fs = require('fs')
const turf = require('@turf/turf')



// read the points GeoJSON file
fs.readFile('horeb.json', 'utf8', (err, data) => {
    if (err) throw err
    // parse the string to GeoJSON
    const points = JSON.parse(data)
    // convert to an Isoline GeoJSON
    const isolines = turf.isolines(points, {zProperty: 'Z'})
    // output file name
    const outFileName = 'horeb-isolines.json'
    
    // stringify the GeoJSON and write to file
    fs.writeFile(outFileName, JSON.stringify(tin), 'utf8', (err) => {
        if (err) throw err
        console.log(outFileName + ' written to file')
    });

})
