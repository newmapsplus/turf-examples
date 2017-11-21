# Turf Examples

This repository houses simple examples that use [Turf.js](http://turfjs.org/) for solving small, specific GIS and mapping problems.

### Chris's (chrispappas007) Turf Examples

I decided to process elevation data from two different prehistoric effigy mounds, the [Great Serpent Mound](https://www.ohiohistory.org/visit/museum-and-site-locator/serpent-mound) in Ohio and [Mt. Horeb](http://www.heritage.ky.gov/kas/kyarchynew/Mt.+Horeb.htm) in Kentucky.

#### Isolines at Mt. Horeb

The data for Mt. Horeb was drawn from the [KYAPED Kentucky 5 Foot DEM](http://kygisserver.ky.gov/geoportal/catalog/search/resource/details.page?uuid=%7BEEC6CDF4-0F9C-4816-BE1C-E57D291D74E0%7D). I used [ESRI's](https://www.esri.com/en-us/home) ArcGIS Desktop to sample the section of the raster DEM where Mt. Horeb is located and exported it as a csv.

Converting the csv to a geoJSON was done using [csvtojson](https://www.npmjs.com/package/csvtojson). Isolines were drawn using Turf's [isolines](http://turfjs.org/docs#isolines). I drew the lines every 3 feet. Unfortunately, some processing artifacts seem to have remained from the initial extraction.

#### Great Serpent Mound Tin

The Great Serpent Mound data was drawn from a LiDAR model downloaded from the [libLas Sample Library](https://www.liblas.org/samples/). The model is rather large (87 MB) and it was added to the .gitignore file. The LiDAR data could have also been downloaded directly from [Ohio](http://ogrip.oit.ohio.gov/Home.aspx) and clipped to the area of interest. The data would also need to be parsed by its classes.

In order to process the data, I used [Homebrew](https://brew.sh/) to install the [libLas](https://www.liblas.org/index.html) tool set. I initially converted the data to a geoJSON:

`$ las2ogr -i project-data/SerpentMoundModelLASData.las -o data/serpent.json -f "GeoJSON"`

and made an incredibily large JSON object (798 MB). I then converted the data to a text file:

`$ las2txt -i project-data/SerpentMoundModelLASData.las -o data/serpent.txt`

This file was still very large (91 MB) and contained over 3 million data points. I brought the file into ArcGIS and used the [Sampling Design Tool](https://www.arcgis.com/home/item.html?id=ecbe1fc44f35465f9dea42ef9b63e785) to extract a 1% random sample of points to a csv file. This is the file I used for my scripts.

I again used csvtojson to create the geoJSON of Serpent Mound. I then used Turf's [Sample](http://turfjs.org/docs#sample) to select a random sample of 100 points from the JSON and [Tin](http://turfjs.org/docs#tin) to build a tin from those points.
