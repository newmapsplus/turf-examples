# Center points example

This example takes points and determines the center point of all points.  Then it places a 3 and 7 miles buffer around the center point, adds all points and the buffers to the map.

The example uses the Turf [`turf.points()`](http://turfjs.org/docs#point) method takes an array of coordinates and returns a new Point feature.

The example uses the Turf [`turf.center()`](http://turfjs.org/docs#center) method takes a feature collection and returns the center point of all features.

The example uses the Turf [`turf.buffer()`](http://turfjs.org/docs#buffer) method to calculate the buffer.