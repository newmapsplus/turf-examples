# Random Points & A Great Circle!

This example generates random points in or near the contiguous United States and adds a great circle to the map between the two points. It also calculates the distance between the random points and the midpoint of the great circle feature, and then uses that information for the popup.

The example uses the following Turf methods:
*[`turf.randomPoint()`](http://turfjs.org/docs#randomPoint)
*[`turf.greatCircle()`](http://turfjs.org/docs#greatCircle)
*[`turf.distance()`](http://turfjs.org/docs#distance)
*[`turf.midpoint()`](http://turfjs.org/docs#midpoint)

refreshing the map generates new points and greatCircle!

idea for a future map/application: allow users to add their own points to create a web map of world travel ala a digital version of a wall map at home with pushpins

other idea: randomly select two points from a database of points (airports, for example) and generate great circle between them. Or ...

allow user to choose a start point (home airport) and then click a "Where To Next?" button to randomly select another airport from a database of airport locations. Like throwing a dart at the map, only in digital!
    