const fs = require('fs')
const csv = require('csvtojson')
const chalk = require('chalk')
const GJV = require("geojson-validation")
const turf = require('@turf/turf')


// create a readStream
let readableStream = fs.createReadStream('project-data/horeb_data.csv')

// object with which to build our GeoJSON
let geojson = {
    "type": "FeatureCollection",
    "features": []
}
 // declare feature here
 // so doesn't need redefining below for each feature
let feature,
    featureCount = 0; // counter variable to keep track below

// begin a console.time object
console.time("processing time: ")

// csvtoJson method
csv({
    delimiter: ',',
    workerNum: 4
})
.fromStream(readableStream) // reads from stream
.on('json',(jsonObj, i)=>{ // converts to json
    if((i % 10000) == 0) console.log("testing row #: "+ chalk.blue(i))

        // build a GeoJSON feature for each
        feature = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    +jsonObj.X,
                    +jsonObj.Y,
                    +jsonObj.Z
                  ]
                },
                "properties": {
                    FEATURE_NAME: jsonObj.OBJECTID
                }
        }
        // push the feature into the features array
        geojson.features.push(feature)
        featureCount++

})
.on('done',(error)=>{
    // when done 
    // log out how much time it took in ms
    console.timeEnd("processing time: ")

    // check to see if the GeoJSON is valid
    if(GJV.valid(geojson)){
        console.log(chalk.green("this is valid GeoJSON!"));
        console.log(chalk.blue(featureCount + " features created."))
    } else {
        console.log(chalk.red('Sorry, not valid GeoJSON.'))
    }

    // write output file
    fs.writeFile('horeb.json', JSON.stringify(geojson), 'utf-8', (err) => {
        
        if(err) throw err
        
        console.log(chalk.green('done writing file'))
    })
})

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
