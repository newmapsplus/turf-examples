const fs = require('fs')
const turf = require('@turf/turf')

// read the points GeoJSON file
fs.readFile('points.json', 'utf8', (err, data) => {
    if (err) throw err
    
    // parse the string to GeoJSON
    const points = JSON.parse(data)

    // create a convex hull polygon of all points
    const convexPolygon = turf.convex(points)

    // create a bounding box of the convex polygon
    const bbox = turf.bbox(convexPolygon)

    // create voronoi from the points in the bounding box
    const voronoiPolygons = turf.voronoi(points, {bbox})

    // output file name
    const outFileName = 'voronoi.json'
    
    // stringify the GeoJSON and write to file
    fs.writeFile(outFileName, JSON.stringify(voronoiPolygons), 'utf8', (err) => {
        if (err) throw err
        console.log(outFileName + ' written to file')
    });

})
