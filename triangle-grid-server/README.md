# Triangle Grid Server

This example takes a series of points and creates a triangle grid with a sum of the points in each grid.

The example uses [`turf.bbox()`](http://turfjs.org/docs/#bbox) to find the bounding box of the points and [`turf.trianglegrid()`](http://turfjs.org/docs/#triangleGrid) to create the grid. The example also uses
[`turf.featureEach()`](http://turfjs.org/docs/#featureEach) to iterate through the points,
[`turf.booleanPointInPolygon()`](http://turfjs.org/docs/#booleanPointInPolygon) to sum points in each triangle, and
[`turf.truncate()`](http://turfjs.org/docs/#truncate) to reduce coordinate precision for a smaller file.
