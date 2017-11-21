# Points in Polygon Analysis

This example generates 1000 random points in or near the contiguous United States and a hard-coded bounding box over the state of Louisiana. It then filters through all the points, adding only those that fall within the bounding box to the map. The popup updates with the count of points within the polygon feature upon map refresh.

The example uses the following Turf methods:
*[`turf.polygon()`](http://turfjs.org/docs#polygon)
*[`turf.centroid()`](http://turfjs.org/docs#centroid)
*[`turf.randomPoint()`](http://turfjs.org/docs#randomPoint)
*[`turf.featureCollection()`](http://turfjs.org/docs#featureCollection)
*[`turf.pointsWithinPolygon()`](http://turfjs.org/docs#pointsWithinPolygon)