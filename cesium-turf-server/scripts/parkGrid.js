const fs = require('fs');
const turf = require('@turf/turf');
const chalk = require('chalk');

fs.readFile(__dirname + '/../project-files/park.json', 'utf8', (err, data) => {
    if(err) throw err;

    // remember to parse the incoming GeoJSON text
    const parks = JSON.parse(data);

    createSquareGrid(parks);
});

function createSquareGrid(parks) {

    // concentrate the map on the continental US
    // [ minX, minY, maxX, maxY ]
    const bbox = [-125, 23, -65, 50];
    // define our cell Diameter
    const cellSide = 1;
    // define units
    const options = { units: 'degrees' };
    // create the square polygons
    let squareGrid = turf.squareGrid(bbox, cellSide, options);

    sumPoints(parks, squareGrid);
}

function sumPoints(parks, squareGrid) {

    // option for turf.booleanPointInPolygon()
    // and other variables don't
    // need redefined with each loop
    const options = {
        ignoreBoundary: true
    }

    let count;

    // // loop through each square in squareGrid
    turf.featureEach(squareGrid, (square, i) => {
        // reset counter to zero for each square
        count = 0;

        // loop through each point point in parks
        turf.featureEach(parks, (point) => {

            // if the point is inside the square
            if(turf.booleanPointInPolygon(point, square, options)) {
                count++; // increment by one
            }
        })

        // output progress
        console.log(chalk.green("adding count of " + count + " to square #: " + i));

        // update square properties with count
        square.properties = Object.assign({}, square.properties, { "count": count });

    })

    console.log(chalk.blue('ready to write the squareGrid to file'));

    // truncate the coordinate precision to reduce file size
    squareGrid = turf.truncate(squareGrid, {
        precision: 5
    })

    filterSquareGrid(squareGrid)
}

function filterSquareGrid(squareGrid) {

    writeSquareGrid(squareGrid)

}

function writeSquareGrid(squareGrid) {

    // stringify the squareGrid and write to file
    fs.writeFile(__dirname + '/../data/parkGrid.json', JSON.stringify(squareGrid), 'utf-8', (err) => {
        if(err) throw err;
        console.log(chalk.green('All done!'));
    });

}
