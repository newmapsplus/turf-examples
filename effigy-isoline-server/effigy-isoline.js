const fs = require('fs')
const turf = require('@turf/turf')

// read the points GeoJSON file
fs.readFile('horeb.json', 'utf8', (err, data) => {
    if (err) throw err
    // parse the string to GeoJSON
    const points = JSON.parse(data)
    // create breaks for isolines
    const breaks = [840, 845, 850, 855, 860, 865, 870, 875, 880, 885, 890, 895, 900, 905]
    // convert to an Isoline GeoJSON
    const isolines = turf.isolines(points, breaks, {zProperty: 'elevation'})
    // output file name
    const outFileName = 'horeb-isolines.json'
    
    // stringify the GeoJSON and write to file
    fs.writeFile(outFileName, JSON.stringify(isolines), 'utf8', (err) => {
        if (err) throw err
        console.log(outFileName + ' written to file')
    });

})
