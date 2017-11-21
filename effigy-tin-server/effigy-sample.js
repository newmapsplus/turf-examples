const fs = require('fs')
const turf = require('@turf/turf')

// read the points GeoJSON file
fs.readFile('data/serpent.json', 'utf8', (err, data) => {
    if (err) throw err
    // parse the string to GeoJSON
    const points = JSON.parse(data)
    // sample the GeoJSON
    const sample = turf.sample(points, 100)

    // stringify the GeoJSON and write to file
    fs.writeFile('data/serpent-sample.json', JSON.stringify(sample), 'utf8', (err) => {
        if (err) throw err
        console.log('serpent-sample.json written to file')
    });

})