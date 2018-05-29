# Triangle Grid Server

This example takes a series of points and creates a triangle grid with a sum of the points in each grid. For this example, the points are hospitals in the United States.

The example uses [`turf.trianglegrid()`](http://turfjs.org/docs/#triangleGrid) to create a triangle grid.

The example also uses [`turf.featureEach()`](http://turfjs.org/docs/#featureEach) to iterate through the points,
[`turf.booleanPointInPolygon()`](http://turfjs.org/docs/#booleanPointInPolygon) to sum points in each triangle, and
[`turf.truncate()`](http://turfjs.org/docs/#truncate) to reduce coordinate precision for a smaller file.

The output file is then loaded into the index file where it is visualized with  [`chroma.js`](https://gka.github.io/chroma.js/)
