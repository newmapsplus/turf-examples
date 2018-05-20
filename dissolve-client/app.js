// use turf.truncate to alter precision

const fs = require('fs')
const turf = require('@turf/turf')

// read the geometry file
fs.readFile(__dirname + '/working-files/kyhuc14a-051302.json', 'utf8', (err, data) => {
    if (err) throw err

    const polygons = JSON.parse(data);

    var features = turf.featureCollection([
        turf.polygon(polygons), { combine: 'yes' }
    ]);
    var dissolved = turf.dissolve(features, { propertyName: 'combine' });


    fs.writeFile(__dirname + '/working-files/kyhuc6-dissolved.json', JSON.stringify(dissolved), 'utf8', (err) => {
        if (err) throw err
        console.log('kyhuc6-dissolved.json written to file')
    });
});
