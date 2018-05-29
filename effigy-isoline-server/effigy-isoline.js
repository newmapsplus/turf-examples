const fs = require('fs')
const turf = require('@turf/turf')

// read the points GeoJSON file
fs.readFile('horeb.json', 'utf8', (err, data) => {
    if (err) throw err
    // parse the string to GeoJSON
    const points = JSON.parse(data)
    // create breaks for isolines
    const breaks = [840, 843, 846, 849, 851, 854, 857, 860, 863, 866, 869, 871, 874, 877, 880, 883, 886, 889, 891, 894, 897, 901, 904, 907]
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
