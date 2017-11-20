# Turf Examples

This repository houses simple examples that use [Turf.js](http://turfjs.org/) for solving small, specific GIS and mapping problems.

chrispappas007 turf examples

decided to create tins of effigy mounds using LiDAR data

downloaded Great Serpent Mound las model from https://www.liblas.org/ - I could have downloaded the point clouds from the state of Ohio, used a shapefile of the mound to clip the clouds to just the mound and then used that selection for processing to tins but I was lazy

added las data set to gitignore file (its 87MB)

Used homebrewer to download and install liblas library

used las2ogr -formats to see what output options i could use - have several including shapefile, csv, and GeoJSON

converted las data to geojson using:
    las2ogr -i project-data/SerpentMoundModelLASData.las -o data/serpent.json -f "GeoJSON"
note - is there a way to do that within the script? I initially tried and it did not like it.
