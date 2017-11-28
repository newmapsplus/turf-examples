const fs = require('fs')
const turf = require('@turf/turf')

// read the points GeoJSON file
fs.readFile('dissolve.json', 'utf8', (err, data) => {
    if (err) throw err
    // parse the string to GeoJSON
    const dissolve = JSON.parse(data)
    // establish a second polygon to execute difference
    
const bshs= turf.polygon([[[-84.62496,38.11667],[-84.62068,38.1295],[-84.40188,38.20777],[-84.39753,38.20552],[-84.37853,38.21129],[-84.37303,38.20815],[-84.37437,38.20297],[-84.36778,38.20024],[-84.36897,38.1963],[-84.35904,38.19499],[-84.36027,38.18449],[-84.35526,38.17842],[-84.36789,38.16222],[-84.37391,38.16025],[-84.36732,38.12991],[-84.37769,38.12137],[-84.3807,38.11263],[-84.33384,38.08645],[-84.32668,38.08486],[-84.31741,38.09313],[-84.30709,38.08428],[-84.29351,38.08065],[-84.28433,38.07023],[-84.28455,38.04069],[-84.28789,38.03692],[-84.38679,38.06242],[-84.42468,38.05643],[-84.43566,38.05993],[-84.46868,38.04619],[-84.48709,38.05771],[-84.48437,38.05975],[-84.48766,38.06335],[-84.49944,38.06408],[-84.49513,38.07459],[-84.52288,38.07535],[-84.531,38.07075],[-84.5604,38.09181],[-84.56435,38.09036],[-84.5741,38.10343],[-84.59137,38.10551],[-84.59308,38.11328],[-84.60137,38.11574],[-84.60642,38.10983],[-84.61226,38.1091],[-84.62496,38.11667]]]);
    
    
    const difference = turf.difference(dissolve, bshs)
    // output file name
    const outFileName = 'difference.json'
    
    // stringify the GeoJSON and write to file
    fs.writeFile(outFileName, JSON.stringify(difference), 'utf8', (err) => {
        if (err) throw err
        console.log(outFileName + ' written to file')
    });
})