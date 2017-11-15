# Buffer and find points in the buffer 

This example loads random points. Clicking the map will create a 200 km buffer around the clicked point and find which points fall within the buffer.

This uses the Turf [`turf.buffer()`](http://turfjs.org/docs#buffer) method to calculate the buffer.
This uses the Turf [`turf.booleanPointInPolygon()`](http://turfjs.org/docs#booleanPointInPolygon) method to find the points within the buffer.
