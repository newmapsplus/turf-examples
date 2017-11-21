const fs = require('fs')
const turf = require('@turf/turf')

// read the points GeoJSON file
fs.readFile('serpent.json', 'utf8', (err, data) => {
    if (err) throw err
    // parse the string to GeoJSON
    const points = JSON.parse(data)
    // sample the GeoJSON
    const sample = turf.sample(points, 100)
    // convert to a TIN GeoJSON
    const tin = turf.tin(sample, 'Z')
        
    // stringify the GeoJSON and write to file
    fs.writeFile('serpent-tin.json', JSON.stringify(tin), 'utf8', (err) => {
        if (err) throw err
        console.log('serpent-tin.json written to file')
    });

})