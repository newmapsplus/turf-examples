# Buffer points example

This example takes random points and creates 500km buffer around each, adding the points and the buffers to the map.

The example uses the Turf [`turf.buffer()`](http://turfjs.org/docs#buffer) method to calculate the buffer.,# Buffer and find points in the buffer 

This example loads random points. Clicking the map will create a 200 km buffer around the clicked point and find which points fall within the buffer.

This uses the Turf [`turf.buffer()`](http://turfjs.org/docs#buffer) method to calculate the buffer.
This uses the Turf [`turf.getCoord()`](http://turfjs.org/docs#getCoord) method to extract the coordinates for the point in poly comparison.
This uses the Turf [`turf.booleanPointInPolygon()`](http://turfjs.org/docs#booleanPointInPolygon) method to find the points within the buffer.
,# Turf Examples

This example takes a geoJson file of points uses turf.center() to find the absolute center of the point features and plots a point at the coordinates of the absolute center. 

![Leaflet map of several points with one center point](images/center-points-client.png "Example of several points with center point plotted")
,# CesiumJS & TurfJS TIN Map

This example takes point data and renders it as a TIN in Cesium.

The example uses the Turf [`turf.tin()`](http://turfjs.org/docs#tin) method to calculate the triangulated irregular network (TIN).

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/).
,# CesiumJS & TurfJS Extruded Square Grid

This example takes point data, coverts it to square grids with a cumulative `count` variable, and then renders them through Cesium in 3D.

The example uses the Turf [`turf.squareGrid()`](http://turfjs.org/docs#squareGrid) method to calculate the grid.

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/).
,# bbox and bboxPolygon Example

This example takes the utah counties geojson file and creates a new bounding box polygon of that data.

This example uses the ['turf.bbox()'](http://turfjs.org/docs#bbox) and the ['turf.bboxPolygon()'](http://turfjs.org/docs#bboxPolygon) methods to create a simple bounding box polygon of the geojson that is inputted. +
+
,# TIN example

This example takes random points and creates an interpolated Triangulated Irregular Network.

The example uses the Turf [`turf.tin()`](http://turfjs.org/docs#tin) method to calculate the buffer.

Input points and output TIN polygons:

![Example output of TIN processing with Turf](points-tin-output.png),# Voronoi Polygon [with areas] example from random points

This example creates random points within Colorado and then creates voronoi polygons based on them.  The polygons are attributed with an area with the area function, which is converted and added as properties to the polygon.  The included index.html file allows for some visual affordance for the output.

The example uses the Turf [`turf.randomPoints()`](http://turfjs.org/docs#randomPoints) method to create random points.
The example uses the Turf [`turf.voronoi()`](http://turfjs.org/docs#voronoi) method to create the voronoi polygons.
The example uses the Turf [`turf.area()`](http://turfjs.org/docs#area) method to calculate the area.
The example uses the Turf [`turf.convertArea()`](http://turfjs.org/docs#convertArea) method to calculate the buffer.


Output Voronoi polygons and the random points.

![Output Voronoi](output.png)
,# Voronoi example

This example takes points and creates a FeatureCollection of Voronoi polygons.

The example use the following Turf methods:

[`turf.convex()`](http://turfjs.org/docs#convex) method which transforms the points into a convex hull polygon.

[`turf.bbox()`](http://turfjs.org/docs#bbox) method uses the convex hull polygon data and calculates a bounding box.

[`turf.voronoi()`](http://turfjs.org/docs#voronoi) method transforms the points along with the bounding box limits to create voronoi polygons.

The output of VORONOI polygons:

<!-- ![Example output of Voronoi processing with Turf](turf-voronoi-output.png) -->
<img src="turf-voronoi-output.png" width="400">,# Difference example

This example Finds the difference between two polygons by clipping the second polygon from the first.

The example uses the Turf [`turf.difference()`](http://turfjs.org/docs#difference) method to clip the polygons.

Inputs are two polygons and output is a single polygon

,# Dissolve example

This example dissolves a FeatureCollection of polygon features.

The example uses the Turf [`turf.dissolve()`](http://turfjs.org/docs#dissolve) method to turn multiple polygon features within a FeatureCollection into one polygon.

Input multiple polygon FeatureCollection and output of Feature Collection of dissolved polygon

,# Distance Between Random Points Within a GeoJSON File Example

This example builds on [random-great-cirlces-client](https://github.com/newmapsplus/turf-examples/tree/master/random-great-circles-client), but instead of generating random points, points are pulled from a database of airport locations using [sample](http://turfjs.org/docs/#sample). The greatCircle, distance, and midpoint modules also used.

Airport Data comes from [Natural Earth Data](https://www.naturalearthdata.com/downloads/50m-cultural-vectors/airports-2/).

*I just noticed that airports were listed as an idea for a future map in the Random Points & A Great Circle readme file!*



,## Effigy Mounds Distance Example

I was going to try to put together a client-side example as well, but I'm having trouble getting turf to create the feature collection and add it to the map. Le sigh.,## Effigy Mound Isolines Example (effigy-isoline-server)

I decided to the process elevation data from a prehistoric effigy mound, [Mt. Horeb](http://www.heritage.ky.gov/kas/kyarchynew/Mt.+Horeb.htm), in Kentucky.

### Isolines at Mt. Horeb

The data for Mt. Horeb was drawn from the [KYAPED Kentucky 5 Foot DEM](http://kygisserver.ky.gov/geoportal/catalog/search/resource/details.page?uuid=%7BEEC6CDF4-0F9C-4816-BE1C-E57D291D74E0%7D). I used [ESRI's](https://www.esri.com/en-us/home) ArcGIS Desktop to sample the section of the raster DEM where Mt. Horeb is located and exported it as a csv.

Converting the csv to a geoJSON was done using [csvtojson](https://www.npmjs.com/package/csvtojson). Isolines were drawn using Turf's [isolines](http://turfjs.org/docs#isolines). I drew the lines every 3 feet. Unfortunately, some processing artifacts seem to have remained from the initial extraction.
,## Effigy Mounds TIN Example (effigy-tin-server)

For my second script example, I used elevation data from the [Great Serpent Mound](https://www.ohiohistory.org/visit/museum-and-site-locator/serpent-mound) in Ohio.

### Great Serpent Mound Tin

The Great Serpent Mound data was drawn from a LiDAR model downloaded from the [libLas Sample Library](https://www.liblas.org/samples/). The model is rather large (87 MB) and it was added to the .gitignore file. The LiDAR data could have also been downloaded directly from [Ohio](http://ogrip.oit.ohio.gov/Home.aspx) and clipped to the area of interest. The data would also need to be parsed by its classes.

In order to process the data, I used [Homebrew](https://brew.sh/) to install the [libLas](https://www.liblas.org/index.html) tool set. I initially converted the data to a geoJSON:

`$ las2ogr -i project-data/SerpentMoundModelLASData.las -o data/serpent.json -f "GeoJSON"`

and made an incredibily large JSON object (798 MB). I then converted the data to a text file:

`$ las2txt -i project-data/SerpentMoundModelLASData.las -o data/serpent.txt`

This file was still very large (91 MB) and contained over 3 million data points. I brought the file into ArcGIS and used the [Sampling Design Tool](https://www.arcgis.com/home/item.html?id=ecbe1fc44f35465f9dea42ef9b63e785) to extract a 1% random sample of points to a csv file. This is the file I used for my scripts.

I again used csvtojson to create the geoJSON of Serpent Mound. I then used Turf's [Sample](http://turfjs.org/docs#sample) to select a random sample of 100 points from the JSON and [Tin](http://turfjs.org/docs#tin) to build a tin from those points.
,# Nearest Point Client

This example takes a point selected by the user using the [`Mapbox Search API`](https://www.mapbox.com/help/how-geocoding-works/),
finds the nearest hospital to that point, and calculates the distance between them.

The example uses the [`turf.nearestPoint()`](http://turfjs.org/docs/#nearestPoint) method to
find the nearest point in a feature collection to the target point. In this example,
the feature collection is hospitals.

Then the [`turf.distance()`](http://turfjs.org/docs/#distance) method finds the
distance between the target point and the nearest hospital.
,# Center points example

This example takes points and determines the center point of all points.  Then it places a 3 and 7 miles buffer around the center point, adds all points and the buffers to the map.

The example use the following Turf methods:

[`turf.points()`](http://turfjs.org/docs#point) method accepts layer coordinates and returns a new point feature to load into an array of coordinates.

[`turf.featureCollection()`](http://turfjs.org/docs#featureCollection) method turns the array of coordinates into a featureCollection for turf processing.

[`turf.center()`](http://turfjs.org/docs#center) method accepts the featureCollection created by turf.points and returns the center point of all points.

[`turf.buffer()`](http://turfjs.org/docs#buffer) method to calculate the buffer around the turf.center point.

<!-- ![Example output of index.html using Turf](point-center-buffer-client-output.png) -->
<img src="point-center-buffer-client-output.png" width="400">,# Points in Polygon Analysis

This example generates 1000 random points in or near the contiguous United States and a hard-coded bounding box over the state of Louisiana. It then filters through all the points, adding only those that fall within the bounding box to the map. The popup updates with the count of points within the polygon feature upon map refresh.

The example uses the following Turf methods:
*[`turf.polygon()`](http://turfjs.org/docs#polygon)
*[`turf.centroid()`](http://turfjs.org/docs#centroid)
*[`turf.randomPoint()`](http://turfjs.org/docs#randomPoint)
*[`turf.featureCollection()`](http://turfjs.org/docs#featureCollection)
*[`turf.pointsWithinPolygon()`](http://turfjs.org/docs#pointsWithinPolygon),# Random Points & A Great Circle!

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
    ,# Turf Examples

This example loads a geojson file of a polygon and scales the polygon up in size by factors. This was achieved using turf.transformScale().

![Leaflet map with three polygon shapes](scaled-polygon-client.png "Polygon scaled up twice and added to the map"),# turf.simplify() Example

This demonstration of simplify transformation [`turf.simplify()`](http://turfjs.org/docs#simplify) method takes a 42.9 MB JSON of New Zealand and outputs a 253 KB JSON. 

The New Zealand shapefile comes from [GADM](https://gadm.org/download_country_v3.html). All original files are contained in the project-files directory and geoprocessed files are in the data directory.
,# Triangle Grid Server

This example takes a series of points and creates a triangle grid with a sum of the points in each grid. For this example, the points are hospitals in the United States.

The example uses [`turf.trianglegrid()`](http://turfjs.org/docs/#triangleGrid) to create a triangle grid.

The example also uses [`turf.featureEach()`](http://turfjs.org/docs/#featureEach) to iterate through the points,
[`turf.booleanPointInPolygon()`](http://turfjs.org/docs/#booleanPointInPolygon) to sum points in each triangle, and
[`turf.truncate()`](http://turfjs.org/docs/#truncate) to reduce coordinate precision for a smaller file.

The output file is then loaded into the index file where it is visualized with  [`chroma.js`](https://gka.github.io/chroma.js/)
,#Voronoi Example

This example takes points and creates voronoi polygons with them, using a bounding a box.

This uses the ['turf.voronoi()'](http://turfjs.org/docs#voronoi) method, along with the the ['turf.bbox()'](http://turfjs.org/docs#bbox) method.
