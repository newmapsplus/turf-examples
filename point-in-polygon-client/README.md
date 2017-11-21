# Random Points & A Great Circle!

This example generates random points in or near the contiguous United States and adds a great circle to the map between the two points. It also calculates the distance between the random points and the midpoint of the great circle feature, and then uses that information for the popup.

The example uses the following Turf methods:
*[`turf.randomPoint()`](http://turfjs.org/docs#randomPoint)
*[`turf.greatCircle()`](http://turfjs.org/docs#greatCircle)
*[`turf.distance()`](http://turfjs.org/docs#distance)
*[`turf.midpoint()`](http://turfjs.org/docs#midpoint)