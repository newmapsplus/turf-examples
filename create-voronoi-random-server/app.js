const fs = require('fs')
const turf = require('@turf/turf')

var vorPoints = turf.randomPoint(100, {
    bbox: [-109.0760529589984, 36.99763047377108, -102.06463804701039, 40.99500444761568]
})


// calculate to a voronoi
const voronoi = turf.voronoi(vorPoints, {
    bbox: [-109.0760529589984, 36.99763047377108, -102.06463804701039, 40.99500444761568]
})

//loop through our voronoi polygons
 voronoi.features.forEach(function(polygon) {
     //turf.area call to get the area of our polygons in square meters.
     var areaMeters = turf.area(polygon)
     //set some properties on the polygons for the areas in various units.
     polygon.properties.areaMeter = areaMeters
     polygon.properties.areaMile = turf.convertArea(areaMeters,'meters', 'miles')
     polygon.properties.areaAcre = turf.convertArea(areaMeters,'meters', 'acres')
     polygon.properties.areaFoot = turf.convertArea(areaMeters,'meters', 'feet')
 })
     
// output file name
const outFileName = 'voronoi.json'

// stringify the GeoJSON and write to file
fs.writeFile('vorPoints.json', JSON.stringify(vorPoints), 'utf8', (err) => {
    if (err) throw err
    console.log('vorPoints.json' + ' written to file')
})
// stringify the GeoJSON and write to file
fs.writeFile(outFileName, JSON.stringify(voronoi), 'utf8', (err) => {
    if (err) throw err
    console.log(outFileName + ' written to file')
})
