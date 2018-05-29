## Effigy Mound Isolines Example (effigy-isoline-server)

I decided to the process elevation data from a prehistoric effigy mound, [Mt. Horeb](http://www.heritage.ky.gov/kas/kyarchynew/Mt.+Horeb.htm), in Kentucky.

### Isolines at Mt. Horeb

The data for Mt. Horeb was drawn from the [KYAPED Kentucky 5 Foot DEM](http://kygisserver.ky.gov/geoportal/catalog/search/resource/details.page?uuid=%7BEEC6CDF4-0F9C-4816-BE1C-E57D291D74E0%7D). I used [ESRI's](https://www.esri.com/en-us/home) ArcGIS Desktop to sample the section of the raster DEM where Mt. Horeb is located and exported it as a csv.

Converting the csv to a geoJSON was done using [csvtojson](https://www.npmjs.com/package/csvtojson). Isolines were drawn using Turf's [isolines](http://turfjs.org/docs#isolines). I drew the lines every 3 feet. Unfortunately, some processing artifacts seem to have remained from the initial extraction.
