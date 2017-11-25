# Voronoi example

This example takes points and creates a FeatureCollection of Voronoi polygons.

The example use the following Turf methods:

Turf [`turf.convex()`](http://turfjs.org/docs#convex) method which transforms the points into a convex hull polygon.

Turf [`turf.bbox()`](http://turfjs.org/docs#bbox) method uses the convex hull polygon data and calculates a bounding box.

Turf [`turf.voronoi()`](http://turfjs.org/docs#voronoi) method transforms the points along with the bounding box limits to create voronoi polygons.

The output of VORONOI polygons:

<!-- ![Example output of TIN processing with Turf](turf-voronoi-output.png) -->
<img src="turf-voronoi-output.png" width="400">