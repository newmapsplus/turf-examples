# Nearest Point Client

This example takes a point selected by the user using the [`Mapbox Search API`](https://www.mapbox.com/help/how-geocoding-works/),
finds the nearest hospital to that point, and calculates the distance between them.

The example uses the [`turf.nearestPoint()`](http://turfjs.org/docs/#nearestPoint) method to
find the nearest point in a feature collection to the target point. In this example,
the feature collection is hospitals.

Then the [`turf.distance()`](http://turfjs.org/docs/#distance) method finds the
distance between the target point and the nearest hospital.
