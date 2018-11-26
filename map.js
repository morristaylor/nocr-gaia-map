mapboxgl.accessToken = 'pk.eyJ1IjoidGF5bG9ybW9ycmlzIiwiYSI6ImNqb3E3NGo4YTAyMDEzcG11d2w3Z3BqOWUifQ.xO2zMgLIrCXcIav8p9jDIQ';
var map = new mapboxgl.Map({
  container: 'map',
  center: [-122.9929, 45.5970],
  style: 'mapbox://styles/mapbox/outdoors-v10',
  zoom: 9,
  bearing: 300,
  pitch: 60
});

map.on('load', function () {
    // Add a layer showing the places.
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
              "type": "FeatureCollection",
              "features":
              [
                {
                  "type": "Feature",
                  "properties": {
                    "name": "North Fork Nehalem Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/North_Fork_Nehalem_Trailhead",
                    "driveTime": "90 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.76696,
                      45.81357
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Munson Creek Falls Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Munson_Creek_Falls_Trailhead",
                    "driveTime": "95 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.77353,
                      45.36564
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Side Step Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Side_Step_Trailhead",
                    "driveTime": "65 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.40887,
                      45.59885
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Northrup Creek Winter Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Northrup_Creek_Winter_Trailhead",
                    "driveTime": "85 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.4322,
                      46.0065
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Bell Camp Road Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Bell_Camp_Road_Trailhead",
                    "driveTime": "65 minutes from downtown Portland",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.36721,
                      45.69061
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Kings Mountain Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Kings_Mountain_Trailhead",
                    "driveTime": "1 hour",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.5063,
                      45.5969
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Maple Creek Road Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Maple_Creek_Road_Trailhead",
                    "driveTime": "100 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.39333,
                      45.46717
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Nehalem Falls Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Nehalem_Falls_Trailhead",
                    "driveTime": "110 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.77129,
                      45.72649
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Niagara Falls Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Niagara_Falls_Trailhead",
                    "driveTime": "2 hours",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.6378,
                      45.2259
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Bloom Lake Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Bloom_Lake_Trailhead",
                    "driveTime": "60 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.5136,
                      45.838
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Rogers Camp Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Rogers_Camp_Trailhead",
                    "driveTime": "50 minutes from downtown Portland",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.3757,
                      45.6226
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "South Lake Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/South_Lake_Trailhead",
                    "driveTime": "135 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.7221,
                      45.20276
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Storey Burn Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Storey_Burn_Trailhead",
                    "driveTime": "55 minutes from downtown Portland",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.38774,
                      45.62775
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Reehers Camp Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Reehers_Camp_Trailhead",
                    "driveTime": "60 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.33793,
                      45.70696
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Smith Homestead Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Smith_Homestead_Trailhead",
                    "driveTime": "1 hour",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.5521,
                      45.5874
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Sawtooth Road Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Sawtooth_Road_Trailhead",
                    "driveTime": "2 hours",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.74187,
                      45.62233
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Clayhill Horse Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Clayhill_Horse_Trailhead",
                    "driveTime": "45 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.1847,
                      45.7479
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Stagecoach Horse Camp Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Stagecoach_Horse_Camp_Trailhead",
                    "driveTime": "65 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.41389,
                      45.5971
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Cedar Butte Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Cedar_Butte_Trailhead",
                    "driveTime": "80 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.646,
                      45.5828
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Beaver Creek Trailhead (Banks-Vernonia)",
                    "url": "https://www.oregonhikers.org/field_guide/Beaver_Creek_Trailhead_(Banks-Vernonia)",
                    "driveTime": "50 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.23117,
                      45.81067
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Buxton Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Buxton_Trailhead",
                    "driveTime": "40 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.18336,
                      45.69855
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Footbridge Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Footbridge_Trailhead",
                    "driveTime": "65 minutes from downtown Portland",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.58491,
                      45.56313
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Gnat Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Gnat_Creek_Trailhead",
                    "driveTime": "90 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.50193,
                      46.17728
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Cougar Valley Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Cougar_Valley_Trailhead",
                    "driveTime": "110 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.76176,
                      45.71335
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Purcell Creek Road Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Purcell_Creek_Road_Trailhead",
                    "driveTime": "110 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.7949,
                      45.5856
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "North Fork Salmonberry Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/North_Fork_Salmonberry_Trailhead",
                    "driveTime": "2 hours",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.5062,
                      45.72835
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Cochran Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Cochran_Trailhead",
                    "driveTime": "70 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.41114,
                      45.70453
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Diamond Mill Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Diamond_Mill_Trailhead",
                    "driveTime": "65 minutes from downtown Portland",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.54796,
                      45.6044
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Little South Fork Kilchis River Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Little_South_Fork_Kilchis_River_Trailhead",
                    "driveTime": "110 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.75458,
                      45.55645
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Beaver Falls Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Beaver_Falls_Trailhead",
                    "driveTime": "80 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.12982,
                      46.10387
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Summit Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Summit_Trailhead",
                    "driveTime": "50 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.3755,
                      45.62394
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Jones Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Jones_Creek_Trailhead",
                    "driveTime": "1 hour from downtown Portland",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.55602,
                      45.58795
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Sunset Rest Area Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Sunset_Rest_Area_Trailhead",
                    "driveTime": "50 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.4589,
                      45.7963
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Hebo Lake Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Hebo_Lake_Trailhead",
                    "driveTime": "115 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.79559,
                      45.23003
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Hilltop Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Hilltop_Trailhead",
                    "driveTime": "45 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.1861,
                      45.7417
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Keenig Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Keenig_Creek_Trailhead",
                    "driveTime": "70 minutes from downtown Portland",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.61223,
                      45.54342
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Spruce Run Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Spruce_Run_Creek_Trailhead",
                    "driveTime": "75 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.6103,
                      45.8116
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Jackson Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Jackson_Creek_Trailhead",
                    "driveTime": "75 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -122.9093,
                      45.6991
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Stairstep Falls Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Stairstep_Falls_Trailhead",
                    "driveTime": "100 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.4599,
                      45.46532
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Tillamook Forest Center Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Tillamook_Forest_Center_Trailhead",
                    "driveTime": "1 hour from downtown Portland",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.56034,
                      45.58518
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Soapstone Lake Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Soapstone_Lake_Trailhead",
                    "driveTime": "75 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.76236,
                      45.84684
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Gnat Creek Hatchery Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Gnat_Creek_Hatchery_Trailhead",
                    "driveTime": "90 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.48801,
                      46.16918
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Lee Falls Road Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Lee_Falls_Road_Trailhead",
                    "driveTime": "70 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.2574,
                      45.4522
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Elk Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Elk_Creek_Trailhead",
                    "driveTime": "1 hour",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.4666,
                      45.6103
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Northrup Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Northrup_Creek_Trailhead",
                    "driveTime": "90 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.4557,
                      46.0237
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Tophill Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Tophill_Trailhead",
                    "driveTime": "45 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.20148,
                      45.75838
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Vernonia Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Vernonia_Trailhead",
                    "driveTime": "1 hour",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.19399,
                      45.85681
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Sam Downs Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Sam_Downs_Creek_Trailhead",
                    "driveTime": "110 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.752,
                      45.5494
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Four County Point Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Four_County_Point_Trailhead",
                    "driveTime": "50 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.3517,
                      45.7805
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Upper Pioneer Indian Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Upper_Pioneer_Indian_Trailhead",
                    "driveTime": "120 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.76251,
                      45.21805
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Vernonia Lake Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Vernonia_Lake_Trailhead",
                    "driveTime": "1 hour",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.1746,
                      45.85699
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Salmonberry Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Salmonberry_Trailhead",
                    "driveTime": "90 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.65223,
                      45.75001
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Belding Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Belding_Trailhead",
                    "driveTime": "2 hours",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.49452,
                      45.70591
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Deyoe Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Deyoe_Creek_Trailhead",
                    "driveTime": "55 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.36677,
                      45.61428
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Gales Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Gales_Creek_Trailhead",
                    "driveTime": "50 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.35926,
                      45.64231
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Idiot Creek Loop Road Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Idiot_Creek_Loop_Road_Trailhead",
                    "driveTime": "80 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.4572,
                      45.6146
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "University Falls Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/University_Falls_Trailhead",
                    "driveTime": "60 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.39234,
                      45.59841
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Liahona Loop Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Liahona_Loop_Trailhead",
                    "driveTime": "85 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.04884,
                      45.92732
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Gales Creek Winter Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Gales_Creek_Winter_Trailhead",
                    "driveTime": "45 minutes from downtown Portland",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.34723,
                      45.64527
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Peninsula Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Peninsula_Trailhead",
                    "driveTime": "95 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.6717,
                      45.4555
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Elks Picnic Area Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Elks_Picnic_Area_Trailhead",
                    "driveTime": "45 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.2052,
                      45.47
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Mount Hebo Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Mount_Hebo_Trailhead",
                    "driveTime": "120 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.75515,
                      45.21394
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Northrup Creek Big Tree Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Northrup_Creek_Big_Tree_Trailhead",
                    "driveTime": "90 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.4545,
                      46.0232
                    ]
                  }
                }
              ]
          }
        },
          "layout": {
          "icon-image": "{icon}-15",
          "icon-allow-overlap": true
        }
      });



      map.addLayer({
      "id": "route",
      "type": "line",
      "source": {
          "type": "geojson",
          "data": {
    "type": "FeatureCollection",
    "features": [
        { "type": "Feature",
          "properties": {
            "id": "5eec904b-2ac8-4072-ad4c-196696b019b9",
            "updated_date": "2018-11-26T05:06:28Z",
            "time_created": "2018-11-26T04:59:31Z",
            "last_updated_on_server": "2018-11-26T05:06:28.065",
            "db_insert_date": "2018-11-26T04:59:31Z",
            "deleted": false,
            "title": "Little South Fork Kilchis River (unfinished OaB)",
            "public": false,
            "color": "#800080",
            "hexcolor": "#800080",
            "is_active": true,
            "revision": 25,
            "notes": "",
            "track_type": "route",
            "routing_mode": "pedestrian",
            "uploaded_gpx_to_osm": null,
            "flag": null,
            "source": null,
            "cover_photo_id": null,
            "distance": 7243.37381550504,
            "total_ascent": 618.563711519861,
            "total_descent": 257.769800319868,
            "stopped_time": 0,
            "total_time": 0,
            "average_speed": 0,
            "moving_time": 0,
            "moving_speed": 0,
            "preferred_link": "/datasummary/track/5eec904b-2ac8-4072-ad4c-196696b019b9/",
            "user_displayname": "taylor.morris",
            "username": "taylor.morris@gmail.com",
            "user_email": "taylor.morris@gmail.com",
            "user_id": 515547,
            "favorite_count": 0,
            "comment_count": 0,
            "user_photo_count": 0,
            "latitude": 45.562808792898586,
            "longitude": -123.73414549322726
          },
          "style": {
            "stroke": "#800080"
          },
          "geometry": {
            "type": "MultiLineString",
            "coordinates": [
              [
                [
                  -123.751923,
                  45.548515,
                  88.62728880001357,
                  0
                ],
                [
                  -123.752007,
                  45.549228,
                  92.66680000001747,
                  0
                ],
                [
                  -123.752175,
                  45.549732,
                  96.96480000000429,
                  0
                ],
                [
                  -123.752755,
                  45.550556,
                  97.16439360004786,
                  0
                ],
                [
                  -123.752656,
                  45.551792,
                  103.83158783993873,
                  0
                ],
                [
                  -123.752854,
                  45.552318,
                  107.98597376000157,
                  0
                ],
                [
                  -123.753701,
                  45.553642,
                  103.40878431998681,
                  0
                ],
                [
                  -123.75396,
                  45.554397,
                  110.25190080000743,
                  0
                ],
                [
                  -123.75396,
                  45.555198,
                  114.23447679991664,
                  0
                ],
                [
                  -123.754181,
                  45.555839,
                  118.95920000000842,
                  0
                ],
                [
                  -123.75454,
                  45.556388,
                  120.98830079997806,
                  0
                ],
                [
                  -123.75454,
                  45.55643,
                  121.68908799997851,
                  0
                ],
                [
                  -123.75454,
                  45.55643,
                  121.68908799997851,
                  0
                ],
                [
                  -123.754509,
                  45.556911,
                  130.37001903999092,
                  0
                ],
                [
                  -123.753792,
                  45.557323,
                  137.79654463988078,
                  0
                ],
                [
                  -123.752945,
                  45.55746,
                  135.88862399988867,
                  0
                ],
                [
                  -123.752099,
                  45.557964,
                  141.19484223995752,
                  0
                ],
                [
                  -123.751236,
                  45.558315,
                  143.50447360018637,
                  0
                ],
                [
                  -123.749848,
                  45.558624,
                  146.10400000007826,
                  0
                ],
                [
                  -123.748482,
                  45.558765,
                  141.445804800024,
                  0
                ],
                [
                  -123.745621,
                  45.559909,
                  145.86045231994393,
                  0
                ],
                [
                  -123.745492,
                  45.560089,
                  150.90370752003685,
                  0
                ],
                [
                  -123.74556,
                  45.560569,
                  155.4032256000797,
                  0
                ],
                [
                  -123.74614,
                  45.561416,
                  169.07200000006742,
                  0
                ],
                [
                  -123.746178,
                  45.561828,
                  177.24225663995296,
                  0
                ],
                [
                  -123.746392,
                  45.562129,
                  185.9579174399461,
                  0
                ],
                [
                  -123.746392,
                  45.562129,
                  185.9579174399461,
                  0
                ],
                [
                  -123.746026,
                  45.562164,
                  192.69382144010183,
                  0
                ],
                [
                  -123.745476,
                  45.562164,
                  210.5504000002411,
                  0
                ],
                [
                  -123.744416,
                  45.561183,
                  224.42810111994174,
                  0
                ],
                [
                  -123.743905,
                  45.560527,
                  224.313049600086,
                  0
                ],
                [
                  -123.743538,
                  45.56018,
                  222.15196800012004,
                  0
                ],
                [
                  -123.742119,
                  45.559997,
                  229.3028531202293,
                  0
                ],
                [
                  -123.742119,
                  45.559997,
                  229.3028531202293,
                  0
                ],
                [
                  -123.742119,
                  45.559997,
                  229.3028531202293,
                  0
                ],
                [
                  -123.741517,
                  45.560245,
                  234.2628000001671,
                  0
                ],
                [
                  -123.741051,
                  45.560661,
                  239.39589088011252,
                  0
                ],
                [
                  -123.740754,
                  45.561145,
                  257.87728640006145,
                  0
                ],
                [
                  -123.739098,
                  45.561981,
                  243.31760000000895,
                  0
                ],
                [
                  -123.738961,
                  45.562389,
                  245.24133616014262,
                  0
                ],
                [
                  -123.739228,
                  45.562847,
                  258.6190700798455,
                  0
                ],
                [
                  -123.73909,
                  45.56377,
                  277.61412799998413,
                  0
                ],
                [
                  -123.738717,
                  45.564132,
                  289.26479999998946,
                  0
                ],
                [
                  -123.738686,
                  45.564125,
                  288.73919999988266,
                  0
                ],
                [
                  -123.738686,
                  45.564125,
                  288.73919999988266,
                  0
                ],
                [
                  -123.738472,
                  45.56406,
                  286.7020927998855,
                  0
                ],
                [
                  -123.737137,
                  45.563232,
                  265.46256191995485,
                  0
                ],
                [
                  -123.73671,
                  45.563159,
                  258.6407775999797,
                  0
                ],
                [
                  -123.736527,
                  45.563304,
                  261.4305913599993,
                  0
                ],
                [
                  -123.7361,
                  45.563385,
                  258.4414399997525,
                  0
                ],
                [
                  -123.735817,
                  45.563724,
                  263.280696319921,
                  0
                ],
                [
                  -123.735413,
                  45.564735,
                  285.65922879981156,
                  0
                ],
                [
                  -123.735398,
                  45.564739,
                  285.5794355202486,
                  0
                ],
                [
                  -123.735398,
                  45.564739,
                  285.5794355202486,
                  0
                ],
                [
                  -123.734841,
                  45.56483,
                  289.61449120001936,
                  0
                ],
                [
                  -123.734101,
                  45.564613,
                  279.0554099199981,
                  0
                ],
                [
                  -123.733162,
                  45.564678,
                  239.49234559942565,
                  0
                ],
                [
                  -123.732857,
                  45.565162,
                  248.7627286397704,
                  0
                ],
                [
                  -123.732346,
                  45.565483,
                  239.42443712012866,
                  0
                ],
                [
                  -123.731858,
                  45.565971,
                  216.77664576013333,
                  0
                ],
                [
                  -123.73211,
                  45.56697,
                  214.3840000000837,
                  0
                ],
                [
                  -123.732529,
                  45.567588,
                  218.4207564799772,
                  0
                ],
                [
                  -123.733498,
                  45.567981,
                  253.27809247972908,
                  0
                ],
                [
                  -123.734101,
                  45.569011,
                  245.22720719986586,
                  0
                ],
                [
                  -123.734192,
                  45.569717,
                  259.4198873599791,
                  0
                ],
                [
                  -123.734055,
                  45.569869,
                  270.89451759988464,
                  0
                ],
                [
                  -123.73404,
                  45.569862,
                  270.9310144002435,
                  0
                ],
                [
                  -123.73404,
                  45.569862,
                  270.9310144002435,
                  0
                ],
                [
                  -123.733689,
                  45.569717,
                  269.717599999869,
                  0
                ],
                [
                  -123.73333,
                  45.569187,
                  248.13839200002857,
                  0
                ],
                [
                  -123.731904,
                  45.568519,
                  250.04788096009008,
                  0
                ],
                [
                  -123.73124,
                  45.568367,
                  271.5565472000505,
                  0
                ],
                [
                  -123.730965,
                  45.567989,
                  271.13068160000154,
                  0
                ],
                [
                  -123.731003,
                  45.567741,
                  261.1204503998577,
                  0
                ],
                [
                  -123.730179,
                  45.566848,
                  268.3306572796767,
                  0
                ],
                [
                  -123.729989,
                  45.566116,
                  262.4633939199118,
                  0
                ],
                [
                  -123.729691,
                  45.565578,
                  241.7473180800283,
                  0
                ],
                [
                  -123.727089,
                  45.564952,
                  247.201450239855,
                  0
                ],
                [
                  -123.726784,
                  45.564922,
                  246.64180992018885,
                  0
                ],
                [
                  -123.726716,
                  45.564952,
                  248.74268927989303,
                  0
                ],
                [
                  -123.726716,
                  45.564952,
                  248.74268927989303,
                  0
                ],
                [
                  -123.72519,
                  45.565677,
                  253.63386879995898,
                  0
                ],
                [
                  -123.724167,
                  45.566268,
                  240.09191103987888,
                  0
                ],
                [
                  -123.722756,
                  45.567573,
                  262.8741964801862,
                  0
                ],
                [
                  -123.722069,
                  45.568367,
                  272.3452539200994,
                  0
                ],
                [
                  -123.721543,
                  45.568622,
                  276.0692147199889,
                  0
                ],
                [
                  -123.721436,
                  45.568599,
                  276.47161088000627,
                  0
                ],
                [
                  -123.721436,
                  45.568599,
                  276.47161088000627,
                  0
                ],
                [
                  -123.721215,
                  45.56855,
                  284.3331200000051,
                  0
                ],
                [
                  -123.720589,
                  45.568191,
                  297.85113519977176,
                  0
                ],
                [
                  -123.719712,
                  45.567562,
                  291.92384128007376,
                  0
                ],
                [
                  -123.719254,
                  45.566581,
                  276.8546486400087,
                  0
                ],
                [
                  -123.719254,
                  45.566581,
                  276.8546486400087,
                  0
                ],
                [
                  -123.71888,
                  45.565773,
                  307.2164479999537,
                  0
                ],
                [
                  -123.717934,
                  45.565483,
                  295.9967910399693,
                  0
                ],
                [
                  -123.717156,
                  45.565032,
                  304.20931839996103,
                  0
                ],
                [
                  -123.715165,
                  45.564647,
                  326.5563447999435,
                  0
                ],
                [
                  -123.714013,
                  45.564567,
                  334.2016718401654,
                  0
                ],
                [
                  -123.713341,
                  45.564632,
                  332.38985791984544,
                  0
                ],
                [
                  -123.712945,
                  45.56491,
                  337.571999999896,
                  0
                ],
                [
                  -123.712403,
                  45.565128,
                  351.12742272016783,
                  0
                ],
                [
                  -123.711686,
                  45.565185,
                  368.39546080001156,
                  0
                ],
                [
                  -123.710618,
                  45.565128,
                  385.41076351998754,
                  0
                ],
                [
                  -123.709488,
                  45.565017,
                  391.0227884801421,
                  0
                ],
                [
                  -123.70784,
                  45.56496,
                  402.38374399999566,
                  0
                ],
                [
                  -123.7072,
                  45.564765,
                  432.8886399998845,
                  0
                ],
                [
                  -123.705971,
                  45.564826,
                  449.4212000000068,
                  0
                ]
              ]
            ]
          }
        }
    ]
}
      },
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#c20ed5",
            "line-width": 1.5
        }
    });
  });

    map.on('click', 'places', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = `<div class="popups"><h3>${e.features[0].properties.name}</h3> <h4>Drive time from Portland: ${e.features[0].properties.driveTime}</h4><a href=${e.features[0].properties.url}>Oregon Hikers</a></div>`;
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    map.on('mouseenter', 'route', function (e) {
        var coordinates = e.features[0].geometry.coordinates[0].slice();
        var description = `<div class="popups"><h3>${e.features[0].properties.title}</h4><a href=https://gaiagps.com${e.features[0].properties.preferred_link}>Gaia Maps Route</a></div>`;
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    // 2018-11-21 TODONE: ok good job good effort! Don't forget to load in your API key when you start again. Figure out a plan for process.env stuff later for deployment. The map is loading adhoc geojson features and mapping them! The popups are working and building small HTML snippets with template strings for features.props. Math.abs code around line 48 came from Mapbox's docs.
    //
    // You need to work on cleaning and normalizing the data from combo.js. It's close but not a perfect match for the GeoJSON data used here. Once you have that data outputting how you want, expect to just dump it in here. New trailheads don't spring up everyday and right now you're working on something resembling 'MVP' so have fun with it and don't get too hung up on that part. Once you have that data, you have that data.
    //
    // Next big steps are adding in all of the trailheads after readying the data, editing Mapbox map to highlight trails and FS roads, getting launch data from state's website, standing it up?
    //
    // 2018-11-22 TODO: You got the URL and Info scrapers working in separate files. Using request-promise-native now. Constructor makes the data GeoJSON compliant. The trailheads are all loading to the map! API key removed again.
    //
    //  Next steps: editing Mapbox map to highlight trails and FS roads, getting launch data from state's website, ~getting GAIA routes geoJSON (are they lines?) and adding for interesting hikes/fishing in the area, standing it up?
