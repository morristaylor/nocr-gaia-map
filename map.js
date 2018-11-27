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
              {
                "type": "Feature",
                "properties": {
                  "id": "0f1db66a-dc42-42b7-b30b-630f8be1bbe6",
                  "updated_date": "2018-11-27T19:17:58Z",
                  "time_created": "2018-11-27T19:17:58Z",
                  "last_updated_on_server": "2018-11-27T19:17:58.900",
                  "db_insert_date": "2018-11-27T19:17:58Z",
                  "deleted": false,
                  "title": "Elk Creek to Idiot Creek Road Hike",
                  "public": false,
                  "color": "#FF00FF",
                  "hexcolor": "#FF00FF",
                  "is_active": true,
                  "revision": 41,
                  "notes": "https://www.oregonhikers.org/field_guide/Elk_Creek_to_Idiot_Creek_Road_Hike",
                  "track_type": "route",
                  "routing_mode": "pedestrian",
                  "uploaded_gpx_to_osm": null,
                  "flag": null,
                  "source": null,
                  "cover_photo_id": null,
                  "distance": 10504.4681604764,
                  "total_ascent": 763.640221440166,
                  "total_descent": 762.975159680044,
                  "stopped_time": 0,
                  "total_time": 0,
                  "average_speed": 0,
                  "moving_time": 0,
                  "moving_speed": 0,
                  "preferred_link": "/datasummary/track/0f1db66a-dc42-42b7-b30b-630f8be1bbe6/",
                  "user_displayname": "taylor.morris",
                  "username": "taylor.morris@gmail.com",
                  "user_email": "taylor.morris@gmail.com",
                  "user_id": 515547,
                  "favorite_count": 0,
                  "comment_count": 0,
                  "user_photo_count": 0
                },
                "style": {
                  "stroke": "#FF00FF"
                },
                "geometry": {
                  "type": "MultiLineString",
                  "coordinates": [
                    [
                      [
                        -123.466729,
                        45.610172,
                        285.5702969600057,
                        0
                      ],
                      [
                        -123.466614,
                        45.610469,
                        286.2353587201277,
                        0
                      ],
                      [
                        -123.466591,
                        45.610675,
                        287.8108679998881,
                        0
                      ],
                      [
                        -123.46653,
                        45.610923,
                        288.85758240013143,
                        0
                      ],
                      [
                        -123.466576,
                        45.611148,
                        291.5362918400828,
                        0
                      ],
                      [
                        -123.466721,
                        45.611412,
                        292.3793260800846,
                        0
                      ],
                      [
                        -123.467057,
                        45.611774,
                        288.5698307200201,
                        0
                      ],
                      [
                        -123.467324,
                        45.611984,
                        288.07449856012715,
                        0
                      ],
                      [
                        -123.467644,
                        45.612159,
                        286.1503878401895,
                        0
                      ],
                      [
                        -123.467865,
                        45.612304,
                        284.71115840001727,
                        0
                      ],
                      [
                        -123.468079,
                        45.612411,
                        285.9417670400471,
                        0
                      ],
                      [
                        -123.468369,
                        45.612625,
                        287.9028799998337,
                        0
                      ],
                      [
                        -123.468743,
                        45.612895,
                        287.92450320000484,
                        0
                      ],
                      [
                        -123.468941,
                        45.613162,
                        285.39284672001577,
                        0
                      ],
                      [
                        -123.469002,
                        45.613315,
                        286.02390080008445,
                        0
                      ],
                      [
                        -123.469201,
                        45.613754,
                        287.06412095996643,
                        0
                      ],
                      [
                        -123.469292,
                        45.613937,
                        285.80734783996746,
                        0
                      ],
                      [
                        -123.469666,
                        45.614154,
                        293.4535411201125,
                        0
                      ],
                      [
                        -123.469872,
                        45.614288,
                        295.9523225598273,
                        0
                      ],
                      [
                        -123.470101,
                        45.614433,
                        299.17098032003133,
                        0
                      ],
                      [
                        -123.470414,
                        45.614711,
                        301.2668243201963,
                        0
                      ],
                      [
                        -123.470612,
                        45.614902,
                        300.1340889600589,
                        0
                      ],
                      [
                        -123.470727,
                        45.615089,
                        298.2931929599542,
                        0
                      ],
                      [
                        -123.470734,
                        45.61536,
                        297.01655040001134,
                        0
                      ],
                      [
                        -123.470826,
                        45.615558,
                        300.95646464001726,
                        0
                      ],
                      [
                        -123.471039,
                        45.615818,
                        304.24774016005676,
                        0
                      ],
                      [
                        -123.471306,
                        45.616096,
                        302.4913011200113,
                        0
                      ],
                      [
                        -123.471589,
                        45.616737,
                        305.2619735999663,
                        0
                      ],
                      [
                        -123.471673,
                        45.617031,
                        306.3461910398906,
                        0
                      ],
                      [
                        -123.471749,
                        45.617397,
                        311.4508744000298,
                        0
                      ],
                      [
                        -123.471734,
                        45.617778,
                        309.6699878399354,
                        0
                      ],
                      [
                        -123.471734,
                        45.617778,
                        309.6699878399354,
                        0
                      ],
                      [
                        -123.471413,
                        45.617759,
                        307.14106768000306,
                        0
                      ],
                      [
                        -123.471139,
                        45.617794,
                        308.7408000000323,
                        0
                      ],
                      [
                        -123.470635,
                        45.618053,
                        317.77113759988134,
                        0
                      ],
                      [
                        -123.469735,
                        45.618347,
                        324.62411600000036,
                        0
                      ],
                      [
                        -123.469132,
                        45.61848,
                        327.1211776000609,
                        0
                      ],
                      [
                        -123.468483,
                        45.618572,
                        328.1102630399393,
                        0
                      ],
                      [
                        -123.467759,
                        45.618789,
                        327.4092716799874,
                        0
                      ],
                      [
                        -123.467339,
                        45.618915,
                        334.17214080011905,
                        0
                      ],
                      [
                        -123.466729,
                        45.619033,
                        342.2156561598732,
                        0
                      ],
                      [
                        -123.466179,
                        45.619224,
                        343.9395532799292,
                        0
                      ],
                      [
                        -123.46563,
                        45.619277,
                        342.9009456002432,
                        0
                      ],
                      [
                        -123.46634,
                        45.619056,
                        349.11068159990384,
                        0
                      ],
                      [
                        -123.466012,
                        45.619037,
                        357.11132544004425,
                        0
                      ],
                      [
                        -123.465271,
                        45.619194,
                        351.5332067200023,
                        0
                      ],
                      [
                        -123.46473,
                        45.619071,
                        358.70105920021285,
                        0
                      ],
                      [
                        -123.464425,
                        45.619079,
                        356.8937240000642,
                        0
                      ],
                      [
                        -123.464013,
                        45.618896,
                        369.2664857599568,
                        0
                      ],
                      [
                        -123.463578,
                        45.61893,
                        362.67844160005353,
                        0
                      ],
                      [
                        -123.462975,
                        45.618797,
                        372.50793199995843,
                        0
                      ],
                      [
                        -123.46283,
                        45.618808,
                        374.6644543999848,
                        0
                      ],
                      [
                        -123.46241,
                        45.619132,
                        364.1025407998398,
                        0
                      ],
                      [
                        -123.461991,
                        45.619277,
                        371.631253600278,
                        0
                      ],
                      [
                        -123.461815,
                        45.619514,
                        368.48525439982205,
                        0
                      ],
                      [
                        -123.461579,
                        45.619678,
                        371.90137407996303,
                        0
                      ],
                      [
                        -123.461243,
                        45.619724,
                        380.60328384018516,
                        0
                      ],
                      [
                        -123.461525,
                        45.619598,
                        378.7830880000512,
                        0
                      ],
                      [
                        -123.461709,
                        45.6194,
                        380.2572160001302,
                        0
                      ],
                      [
                        -123.461815,
                        45.619178,
                        387.2501872000296,
                        0
                      ],
                      [
                        -123.462067,
                        45.619018,
                        383.33092095999916,
                        0
                      ],
                      [
                        -123.462273,
                        45.618877,
                        384.6276145602219,
                        0
                      ],
                      [
                        -123.462403,
                        45.618675,
                        390.9320439998884,
                        0
                      ],
                      [
                        -123.46241,
                        45.618537,
                        396.0112431998963,
                        0
                      ],
                      [
                        -123.462212,
                        45.61882,
                        388.563494400216,
                        0
                      ],
                      [
                        -123.461731,
                        45.619094,
                        396.04231936010876,
                        0
                      ],
                      [
                        -123.461579,
                        45.619239,
                        396.14011119996763,
                        0
                      ],
                      [
                        -123.46151,
                        45.619426,
                        389.4015519999285,
                        0
                      ],
                      [
                        -123.461358,
                        45.619522,
                        390.99325887963056,
                        0
                      ],
                      [
                        -123.461152,
                        45.619548,
                        395.8638284799166,
                        0
                      ],
                      [
                        -123.461274,
                        45.619396,
                        400.79600895983924,
                        0
                      ],
                      [
                        -123.46135,
                        45.619159,
                        407.8674639999261,
                        0
                      ],
                      [
                        -123.461365,
                        45.618957,
                        415.7117127999194,
                        0
                      ],
                      [
                        -123.461464,
                        45.618804,
                        417.3877657598089,
                        0
                      ],
                      [
                        -123.461739,
                        45.61869,
                        408.7747072002316,
                        0
                      ],
                      [
                        -123.461892,
                        45.618511,
                        406.5619129597954,
                        0
                      ],
                      [
                        -123.46196,
                        45.618194,
                        411.0848895998411,
                        0
                      ],
                      [
                        -123.462067,
                        45.617713,
                        432.7980878396464,
                        0
                      ],
                      [
                        -123.462266,
                        45.61742,
                        445.7351551998177,
                        0
                      ],
                      [
                        -123.462479,
                        45.617378,
                        446.8319859198129,
                        0
                      ],
                      [
                        -123.463318,
                        45.617645,
                        434.24398559981955,
                        0
                      ],
                      [
                        -123.46428,
                        45.617691,
                        445.0676959999023,
                        0
                      ],
                      [
                        -123.465104,
                        45.617458,
                        472.60666496013584,
                        0
                      ],
                      [
                        -123.465752,
                        45.61737,
                        478.59852159989083,
                        0
                      ],
                      [
                        -123.466767,
                        45.617488,
                        479.25918848000936,
                        0
                      ],
                      [
                        -123.466301,
                        45.617324,
                        481.8434393596929,
                        0
                      ],
                      [
                        -123.465737,
                        45.617225,
                        493.4097280002088,
                        0
                      ],
                      [
                        -123.466683,
                        45.617183,
                        494.3099795200393,
                        0
                      ],
                      [
                        -123.467454,
                        45.61716,
                        488.68261119986124,
                        0
                      ],
                      [
                        -123.467652,
                        45.617122,
                        481.5946892800027,
                        0
                      ],
                      [
                        -123.467682,
                        45.617023,
                        478.8373283201616,
                        0
                      ],
                      [
                        -123.467316,
                        45.616985,
                        487.1898208000642,
                        0
                      ],
                      [
                        -123.466599,
                        45.617015,
                        495.828558399931,
                        0
                      ],
                      [
                        -123.466157,
                        45.616905,
                        513.9709416002052,
                        0
                      ],
                      [
                        -123.465668,
                        45.616912,
                        530.9730355201114,
                        0
                      ],
                      [
                        -123.464829,
                        45.617084,
                        515.082232320237,
                        0
                      ],
                      [
                        -123.464325,
                        45.616992,
                        524.890719999693,
                        0
                      ],
                      [
                        -123.463402,
                        45.616718,
                        526.8632000001589,
                        0
                      ],
                      [
                        -123.462472,
                        45.616596,
                        525.9985305599799,
                        0
                      ],
                      [
                        -123.461983,
                        45.61647,
                        532.2667888000311,
                        0
                      ],
                      [
                        -123.461396,
                        45.616527,
                        534.9520716802963,
                        0
                      ],
                      [
                        -123.460785,
                        45.616851,
                        538.6845336000484,
                        0
                      ],
                      [
                        -123.460549,
                        45.617076,
                        543.0648921600506,
                        0
                      ],
                      [
                        -123.460495,
                        45.617286,
                        539.6765584002871,
                        0
                      ],
                      [
                        -123.460343,
                        45.617519,
                        539.7611396802292,
                        0
                      ],
                      [
                        -123.46003,
                        45.617729,
                        549.7369887998743,
                        0
                      ],
                      [
                        -123.460175,
                        45.61737,
                        554.6876799995872,
                        0
                      ],
                      [
                        -123.460206,
                        45.617015,
                        565.4675327999448,
                        0
                      ],
                      [
                        -123.460427,
                        45.616687,
                        564.9541230403368,
                        0
                      ],
                      [
                        -123.460526,
                        45.616477,
                        570.3386003197143,
                        0
                      ],
                      [
                        -123.460694,
                        45.616294,
                        573.4702534396758,
                        0
                      ],
                      [
                        -123.460892,
                        45.616199,
                        571.3639289598668,
                        0
                      ],
                      [
                        -123.460526,
                        45.616245,
                        582.6275391999656,
                        0
                      ],
                      [
                        -123.460244,
                        45.616386,
                        590.683535359911,
                        0
                      ],
                      [
                        -123.460045,
                        45.616695,
                        588.2694760003598,
                        0
                      ],
                      [
                        -123.45961,
                        45.616882,
                        596.426857600228,
                        0
                      ],
                      [
                        -123.459366,
                        45.617218,
                        594.6499699198773,
                        0
                      ],
                      [
                        -123.459237,
                        45.617496,
                        591.3355078398829,
                        0
                      ],
                      [
                        -123.459176,
                        45.617092,
                        605.3225932800394,
                        0
                      ],
                      [
                        -123.459282,
                        45.616806,
                        612.9938713600924,
                        0
                      ],
                      [
                        -123.459603,
                        45.616596,
                        611.137588479883,
                        0
                      ],
                      [
                        -123.459656,
                        45.616424,
                        617.1874662400988,
                        0
                      ],
                      [
                        -123.459595,
                        45.616207,
                        624.1702032002241,
                        0
                      ],
                      [
                        -123.459633,
                        45.616027,
                        625.2176593600947,
                        0
                      ],
                      [
                        -123.4599,
                        45.615898,
                        616.4105919998078,
                        0
                      ],
                      [
                        -123.460335,
                        45.615829,
                        601.6532543999376,
                        0
                      ],
                      [
                        -123.459633,
                        45.615749,
                        625.0068836801586,
                        0
                      ],
                      [
                        -123.459412,
                        45.615791,
                        634.7152006400357,
                        0
                      ],
                      [
                        -123.459275,
                        45.615856,
                        640.2631519998195,
                        0
                      ],
                      [
                        -123.459244,
                        45.615715,
                        638.2752032001052,
                        0
                      ],
                      [
                        -123.459282,
                        45.615608,
                        633.9111795199824,
                        0
                      ],
                      [
                        -123.459145,
                        45.615783,
                        643.5257335997685,
                        0
                      ],
                      [
                        -123.459054,
                        45.616043,
                        647.4648406402387,
                        0
                      ],
                      [
                        -123.458977,
                        45.616184,
                        649.9100332798378,
                        0
                      ],
                      [
                        -123.458924,
                        45.616058,
                        653.2381030401795,
                        0
                      ],
                      [
                        -123.458893,
                        45.615913,
                        654.1260660798667,
                        0
                      ],
                      [
                        -123.458893,
                        45.615646,
                        649.7956188798319,
                        0
                      ],
                      [
                        -123.458771,
                        45.615898,
                        659.6511996800624,
                        0
                      ],
                      [
                        -123.458672,
                        45.616161,
                        663.6511999997201,
                        0
                      ],
                      [
                        -123.458642,
                        45.616359,
                        662.0960000000669,
                        0
                      ],
                      [
                        -123.458634,
                        45.616443,
                        660.9248393598945,
                        0
                      ],
                      [
                        -123.458489,
                        45.616336,
                        671.6955008000109,
                        0
                      ],
                      [
                        -123.458329,
                        45.616096,
                        681.2626540796238,
                        0
                      ],
                      [
                        -123.458275,
                        45.61584,
                        683.9551199999748,
                        0
                      ],
                      [
                        -123.458184,
                        45.615657,
                        684.3763315198362,
                        0
                      ],
                      [
                        -123.457726,
                        45.615425,
                        697.8671920001808,
                        0
                      ],
                      [
                        -123.457406,
                        45.615097,
                        696.4174921599551,
                        0
                      ],
                      [
                        -123.457261,
                        45.614738,
                        696.7956707199795,
                        0
                      ],
                      [
                        -123.457154,
                        45.614612,
                        699.1251622399612,
                        0
                      ],
                      [
                        -123.457284,
                        45.614437,
                        700.7249190399357,
                        0
                      ],
                      [
                        -123.457306,
                        45.614162,
                        706.5775993599465,
                        0
                      ],
                      [
                        -123.457161,
                        45.614017,
                        712.7756000000857,
                        0
                      ],
                      [
                        -123.457169,
                        45.613739,
                        708.4524505602325,
                        0
                      ],
                      [
                        -123.457085,
                        45.613529,
                        699.3542415999601,
                        0
                      ],
                      [
                        -123.457146,
                        45.613323,
                        689.6392153600048,
                        0
                      ],
                      [
                        -123.457146,
                        45.613323,
                        689.6392153600048,
                        0
                      ],
                      [
                        -123.457085,
                        45.613529,
                        699.3542415999601,
                        0
                      ],
                      [
                        -123.457169,
                        45.613739,
                        708.4524505602325,
                        0
                      ],
                      [
                        -123.457161,
                        45.614017,
                        712.7756000000857,
                        0
                      ],
                      [
                        -123.457306,
                        45.614162,
                        706.5775993599465,
                        0
                      ],
                      [
                        -123.457284,
                        45.614437,
                        700.7249190399357,
                        0
                      ],
                      [
                        -123.457154,
                        45.614612,
                        699.1251622399612,
                        0
                      ],
                      [
                        -123.457261,
                        45.614738,
                        696.7956707199795,
                        0
                      ],
                      [
                        -123.457406,
                        45.615097,
                        696.4174921599551,
                        0
                      ],
                      [
                        -123.457726,
                        45.615425,
                        697.8671920001808,
                        0
                      ],
                      [
                        -123.458184,
                        45.615657,
                        684.3763315198362,
                        0
                      ],
                      [
                        -123.458275,
                        45.61584,
                        683.9551199999748,
                        0
                      ],
                      [
                        -123.458329,
                        45.616096,
                        681.2626540796238,
                        0
                      ],
                      [
                        -123.458489,
                        45.616336,
                        671.6955008000109,
                        0
                      ],
                      [
                        -123.458634,
                        45.616443,
                        660.9248393598945,
                        0
                      ],
                      [
                        -123.458642,
                        45.616359,
                        662.0960000000669,
                        0
                      ],
                      [
                        -123.458672,
                        45.616161,
                        663.6511999997201,
                        0
                      ],
                      [
                        -123.458771,
                        45.615898,
                        659.6511996800624,
                        0
                      ],
                      [
                        -123.458893,
                        45.615646,
                        649.7956188798319,
                        0
                      ],
                      [
                        -123.458893,
                        45.615913,
                        654.1260660798667,
                        0
                      ],
                      [
                        -123.458924,
                        45.616058,
                        653.2381030401795,
                        0
                      ],
                      [
                        -123.458977,
                        45.616184,
                        649.9100332798378,
                        0
                      ],
                      [
                        -123.459054,
                        45.616043,
                        647.4648406402387,
                        0
                      ],
                      [
                        -123.459145,
                        45.615783,
                        643.5257335997685,
                        0
                      ],
                      [
                        -123.459282,
                        45.615608,
                        633.9111795199824,
                        0
                      ],
                      [
                        -123.459244,
                        45.615715,
                        638.2752032001052,
                        0
                      ],
                      [
                        -123.459275,
                        45.615856,
                        640.2631519998195,
                        0
                      ],
                      [
                        -123.459412,
                        45.615791,
                        634.7152006400357,
                        0
                      ],
                      [
                        -123.459633,
                        45.615749,
                        625.0068836801586,
                        0
                      ],
                      [
                        -123.460335,
                        45.615829,
                        601.6532543999376,
                        0
                      ],
                      [
                        -123.4599,
                        45.615898,
                        616.4105919998078,
                        0
                      ],
                      [
                        -123.459633,
                        45.616027,
                        625.2176593600947,
                        0
                      ],
                      [
                        -123.459595,
                        45.616207,
                        624.1702032002241,
                        0
                      ],
                      [
                        -123.459656,
                        45.616424,
                        617.1874662400988,
                        0
                      ],
                      [
                        -123.459603,
                        45.616596,
                        611.137588479883,
                        0
                      ],
                      [
                        -123.459282,
                        45.616806,
                        612.9938713600924,
                        0
                      ],
                      [
                        -123.459176,
                        45.617092,
                        605.3225932800394,
                        0
                      ],
                      [
                        -123.459237,
                        45.617496,
                        591.3355078398829,
                        0
                      ],
                      [
                        -123.459366,
                        45.617218,
                        594.6499699198773,
                        0
                      ],
                      [
                        -123.45961,
                        45.616882,
                        596.426857600228,
                        0
                      ],
                      [
                        -123.460045,
                        45.616695,
                        588.2694760003598,
                        0
                      ],
                      [
                        -123.460244,
                        45.616386,
                        590.683535359911,
                        0
                      ],
                      [
                        -123.460526,
                        45.616245,
                        582.6275391999656,
                        0
                      ],
                      [
                        -123.460892,
                        45.616199,
                        571.3639289598668,
                        0
                      ],
                      [
                        -123.460694,
                        45.616294,
                        573.4702534396758,
                        0
                      ],
                      [
                        -123.460526,
                        45.616477,
                        570.3386003197143,
                        0
                      ],
                      [
                        -123.460427,
                        45.616687,
                        564.9541230403368,
                        0
                      ],
                      [
                        -123.460206,
                        45.617015,
                        565.4675327999448,
                        0
                      ],
                      [
                        -123.460175,
                        45.61737,
                        554.6876799995872,
                        0
                      ],
                      [
                        -123.46003,
                        45.617729,
                        549.7369887998743,
                        0
                      ],
                      [
                        -123.460343,
                        45.617519,
                        539.7611396802292,
                        0
                      ],
                      [
                        -123.460495,
                        45.617286,
                        539.6765584002871,
                        0
                      ],
                      [
                        -123.460549,
                        45.617076,
                        543.0648921600506,
                        0
                      ],
                      [
                        -123.460785,
                        45.616851,
                        538.6845336000484,
                        0
                      ],
                      [
                        -123.461396,
                        45.616527,
                        534.9520716802963,
                        0
                      ],
                      [
                        -123.461983,
                        45.61647,
                        532.2667888000311,
                        0
                      ],
                      [
                        -123.462472,
                        45.616596,
                        525.9985305599799,
                        0
                      ],
                      [
                        -123.463402,
                        45.616718,
                        526.8632000001589,
                        0
                      ],
                      [
                        -123.464325,
                        45.616992,
                        524.890719999693,
                        0
                      ],
                      [
                        -123.464829,
                        45.617084,
                        515.082232320237,
                        0
                      ],
                      [
                        -123.465668,
                        45.616912,
                        530.9730355201114,
                        0
                      ],
                      [
                        -123.466157,
                        45.616905,
                        513.9709416002052,
                        0
                      ],
                      [
                        -123.466599,
                        45.617015,
                        495.828558399931,
                        0
                      ],
                      [
                        -123.467316,
                        45.616985,
                        487.1898208000642,
                        0
                      ],
                      [
                        -123.467682,
                        45.617023,
                        478.8373283201616,
                        0
                      ],
                      [
                        -123.467652,
                        45.617122,
                        481.5946892800027,
                        0
                      ],
                      [
                        -123.467454,
                        45.61716,
                        488.68261119986124,
                        0
                      ],
                      [
                        -123.466683,
                        45.617183,
                        494.3099795200393,
                        0
                      ],
                      [
                        -123.465737,
                        45.617225,
                        493.4097280002088,
                        0
                      ],
                      [
                        -123.466301,
                        45.617324,
                        481.8434393596929,
                        0
                      ],
                      [
                        -123.466767,
                        45.617488,
                        479.25918848000936,
                        0
                      ],
                      [
                        -123.465752,
                        45.61737,
                        478.59852159989083,
                        0
                      ],
                      [
                        -123.465104,
                        45.617458,
                        472.60666496013584,
                        0
                      ],
                      [
                        -123.46428,
                        45.617691,
                        445.0676959999023,
                        0
                      ],
                      [
                        -123.463318,
                        45.617645,
                        434.24398559981955,
                        0
                      ],
                      [
                        -123.462479,
                        45.617378,
                        446.8319859198129,
                        0
                      ],
                      [
                        -123.462266,
                        45.61742,
                        445.7351551998177,
                        0
                      ],
                      [
                        -123.462067,
                        45.617713,
                        432.7980878396464,
                        0
                      ],
                      [
                        -123.46196,
                        45.618194,
                        411.0848895998411,
                        0
                      ],
                      [
                        -123.461892,
                        45.618511,
                        406.5619129597954,
                        0
                      ],
                      [
                        -123.461739,
                        45.61869,
                        408.7747072002316,
                        0
                      ],
                      [
                        -123.461464,
                        45.618804,
                        417.3877657598089,
                        0
                      ],
                      [
                        -123.461365,
                        45.618957,
                        415.7117127999194,
                        0
                      ],
                      [
                        -123.46135,
                        45.619159,
                        407.8674639999261,
                        0
                      ],
                      [
                        -123.461274,
                        45.619396,
                        400.79600895983924,
                        0
                      ],
                      [
                        -123.461152,
                        45.619548,
                        395.8638284799166,
                        0
                      ],
                      [
                        -123.461358,
                        45.619522,
                        390.99325887963056,
                        0
                      ],
                      [
                        -123.46151,
                        45.619426,
                        389.4015519999285,
                        0
                      ],
                      [
                        -123.461579,
                        45.619239,
                        396.14011119996763,
                        0
                      ],
                      [
                        -123.461731,
                        45.619094,
                        396.04231936010876,
                        0
                      ],
                      [
                        -123.462212,
                        45.61882,
                        388.563494400216,
                        0
                      ],
                      [
                        -123.46241,
                        45.618537,
                        396.0112431998963,
                        0
                      ],
                      [
                        -123.462403,
                        45.618675,
                        390.9320439998884,
                        0
                      ],
                      [
                        -123.462273,
                        45.618877,
                        384.6276145602219,
                        0
                      ],
                      [
                        -123.462067,
                        45.619018,
                        383.33092095999916,
                        0
                      ],
                      [
                        -123.461815,
                        45.619178,
                        387.2501872000296,
                        0
                      ],
                      [
                        -123.461709,
                        45.6194,
                        380.2572160001302,
                        0
                      ],
                      [
                        -123.461525,
                        45.619598,
                        378.7830880000512,
                        0
                      ],
                      [
                        -123.461243,
                        45.619724,
                        380.60328384018516,
                        0
                      ],
                      [
                        -123.461579,
                        45.619678,
                        371.90137407996303,
                        0
                      ],
                      [
                        -123.461815,
                        45.619514,
                        368.48525439982205,
                        0
                      ],
                      [
                        -123.461991,
                        45.619277,
                        371.631253600278,
                        0
                      ],
                      [
                        -123.46241,
                        45.619132,
                        364.1025407998398,
                        0
                      ],
                      [
                        -123.46283,
                        45.618808,
                        374.6644543999848,
                        0
                      ],
                      [
                        -123.462975,
                        45.618797,
                        372.50793199995843,
                        0
                      ],
                      [
                        -123.463578,
                        45.61893,
                        362.67844160005353,
                        0
                      ],
                      [
                        -123.464013,
                        45.618896,
                        369.2664857599568,
                        0
                      ],
                      [
                        -123.464425,
                        45.619079,
                        356.8937240000642,
                        0
                      ],
                      [
                        -123.46473,
                        45.619071,
                        358.70105920021285,
                        0
                      ],
                      [
                        -123.465271,
                        45.619194,
                        351.5332067200023,
                        0
                      ],
                      [
                        -123.466012,
                        45.619037,
                        357.11132544004425,
                        0
                      ],
                      [
                        -123.46634,
                        45.619056,
                        349.11068159990384,
                        0
                      ],
                      [
                        -123.46563,
                        45.619277,
                        342.9009456002432,
                        0
                      ],
                      [
                        -123.466179,
                        45.619224,
                        343.9395532799292,
                        0
                      ],
                      [
                        -123.466729,
                        45.619033,
                        342.2156561598732,
                        0
                      ],
                      [
                        -123.467339,
                        45.618915,
                        334.17214080011905,
                        0
                      ],
                      [
                        -123.467759,
                        45.618789,
                        327.4092716799874,
                        0
                      ],
                      [
                        -123.468483,
                        45.618572,
                        328.1102630399393,
                        0
                      ],
                      [
                        -123.469132,
                        45.61848,
                        327.1211776000609,
                        0
                      ],
                      [
                        -123.469735,
                        45.618347,
                        324.62411600000036,
                        0
                      ],
                      [
                        -123.470635,
                        45.618053,
                        317.77113759988134,
                        0
                      ],
                      [
                        -123.471139,
                        45.617794,
                        308.7408000000323,
                        0
                      ],
                      [
                        -123.471413,
                        45.617759,
                        307.14106768000306,
                        0
                      ],
                      [
                        -123.471734,
                        45.617778,
                        309.6699878399354,
                        0
                      ],
                      [
                        -123.471734,
                        45.617778,
                        309.6699878399354,
                        0
                      ],
                      [
                        -123.471749,
                        45.617397,
                        311.4508744000298,
                        0
                      ],
                      [
                        -123.471673,
                        45.617031,
                        306.3461910398906,
                        0
                      ],
                      [
                        -123.471589,
                        45.616737,
                        305.2619735999663,
                        0
                      ],
                      [
                        -123.471306,
                        45.616096,
                        302.4913011200113,
                        0
                      ],
                      [
                        -123.471039,
                        45.615818,
                        304.24774016005676,
                        0
                      ],
                      [
                        -123.470826,
                        45.615558,
                        300.95646464001726,
                        0
                      ],
                      [
                        -123.470734,
                        45.61536,
                        297.01655040001134,
                        0
                      ],
                      [
                        -123.470727,
                        45.615089,
                        298.2931929599542,
                        0
                      ],
                      [
                        -123.470612,
                        45.614902,
                        300.1340889600589,
                        0
                      ],
                      [
                        -123.470414,
                        45.614711,
                        301.2668243201963,
                        0
                      ],
                      [
                        -123.470101,
                        45.614433,
                        299.17098032003133,
                        0
                      ],
                      [
                        -123.469872,
                        45.614288,
                        295.9523225598273,
                        0
                      ],
                      [
                        -123.469666,
                        45.614154,
                        293.4535411201125,
                        0
                      ],
                      [
                        -123.469292,
                        45.613937,
                        285.80734783996746,
                        0
                      ],
                      [
                        -123.469201,
                        45.613754,
                        287.06412095996643,
                        0
                      ],
                      [
                        -123.469002,
                        45.613315,
                        286.02390080008445,
                        0
                      ],
                      [
                        -123.468941,
                        45.613162,
                        285.39284672001577,
                        0
                      ],
                      [
                        -123.468743,
                        45.612895,
                        287.92450320000484,
                        0
                      ],
                      [
                        -123.468369,
                        45.612625,
                        287.9028799998337,
                        0
                      ],
                      [
                        -123.468079,
                        45.612411,
                        285.9417670400471,
                        0
                      ],
                      [
                        -123.467865,
                        45.612304,
                        284.71115840001727,
                        0
                      ],
                      [
                        -123.467644,
                        45.612159,
                        286.1503878401895,
                        0
                      ],
                      [
                        -123.467324,
                        45.611984,
                        288.07449856012715,
                        0
                      ],
                      [
                        -123.467057,
                        45.611774,
                        288.5698307200201,
                        0
                      ],
                      [
                        -123.466721,
                        45.611412,
                        292.3793260800846,
                        0
                      ],
                      [
                        -123.466576,
                        45.611148,
                        291.5362918400828,
                        0
                      ],
                      [
                        -123.46653,
                        45.610923,
                        288.85758240013143,
                        0
                      ],
                      [
                        -123.466591,
                        45.610675,
                        287.8108679998881,
                        0
                      ],
                      [
                        -123.466614,
                        45.610469,
                        286.2353587201277,
                        0
                      ],
                      [
                        -123.466729,
                        45.610172,
                        285.5702969600057,
                        0
                      ]
                    ]
                  ]
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "id": "695475c5-5730-49e4-9e07-e4693038f122",
                  "updated_date": "2018-11-27T19:55:37Z",
                  "time_created": "2018-11-27T19:55:31Z",
                  "last_updated_on_server": "2018-11-27T19:55:37.303",
                  "db_insert_date": "2018-11-27T19:55:31Z",
                  "deleted": false,
                  "title": "Little South Fork Kilchis River Hike",
                  "public": true,
                  "color": "#FF00FF",
                  "hexcolor": "#FF00FF",
                  "is_active": true,
                  "revision": 52,
                  "notes": "https://www.oregonhikers.org/field_guide/Little_South_Fork_Kilchis_River_Hike",
                  "track_type": "route",
                  "routing_mode": "pedestrian",
                  "uploaded_gpx_to_osm": null,
                  "flag": null,
                  "source": null,
                  "cover_photo_id": null,
                  "distance": 14512.8766601141,
                  "total_ascent": 841.977355519477,
                  "total_descent": 842.184132319405,
                  "stopped_time": 0,
                  "total_time": 0,
                  "average_speed": 0,
                  "moving_time": 0,
                  "moving_speed": 0,
                  "preferred_link": "/datasummary/track/695475c5-5730-49e4-9e07-e4693038f122/",
                  "user_displayname": "taylor.morris",
                  "username": "taylor.morris@gmail.com",
                  "user_email": "taylor.morris@gmail.com",
                  "user_id": 515547,
                  "favorite_count": 0,
                  "comment_count": 0,
                  "user_photo_count": 0,
                  "latitude": 45.56279484266147,
                  "longitude": -123.73414304603678
                },
                "style": {
                  "stroke": "#FF00FF"
                },
                "geometry": {
                  "type": "MultiLineString",
                  "coordinates": [
                    [
                      [
                        -123.751961,
                        45.548454,
                        88.6727999999166,
                        0
                      ],
                      [
                        -123.751915,
                        45.548477,
                        88.46602319998762,
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
                        -123.746232,
                        45.562145,
                        188.3583999999762,
                        0
                      ],
                      [
                        -123.746232,
                        45.562145,
                        188.3583999999762,
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
                        -123.70591,
                        45.56483,
                        450.7999999999022,
                        0
                      ],
                      [
                        -123.70591,
                        45.56483,
                        450.7999999999022,
                        0
                      ],
                      [
                        -123.7072,
                        45.564765,
                        432.8886399998845,
                        0
                      ],
                      [
                        -123.70784,
                        45.56496,
                        402.38374399999566,
                        0
                      ],
                      [
                        -123.709488,
                        45.565017,
                        391.0227884801421,
                        0
                      ],
                      [
                        -123.710618,
                        45.565128,
                        385.41076351998754,
                        0
                      ],
                      [
                        -123.711686,
                        45.565185,
                        368.39546080001156,
                        0
                      ],
                      [
                        -123.712403,
                        45.565128,
                        351.12742272016783,
                        0
                      ],
                      [
                        -123.712945,
                        45.56491,
                        337.571999999896,
                        0
                      ],
                      [
                        -123.713341,
                        45.564632,
                        332.38985791984544,
                        0
                      ],
                      [
                        -123.714013,
                        45.564567,
                        334.2016718401654,
                        0
                      ],
                      [
                        -123.715165,
                        45.564647,
                        326.5563447999435,
                        0
                      ],
                      [
                        -123.717156,
                        45.565032,
                        304.20931839996103,
                        0
                      ],
                      [
                        -123.717934,
                        45.565483,
                        295.9967910399693,
                        0
                      ],
                      [
                        -123.71888,
                        45.565773,
                        307.2164479999537,
                        0
                      ],
                      [
                        -123.719712,
                        45.567562,
                        291.92384128007376,
                        0
                      ],
                      [
                        -123.720589,
                        45.568191,
                        297.85113519977176,
                        0
                      ],
                      [
                        -123.721215,
                        45.56855,
                        284.3331200000051,
                        0
                      ],
                      [
                        -123.721543,
                        45.568622,
                        276.0692147199889,
                        0
                      ],
                      [
                        -123.722069,
                        45.568367,
                        272.3452539200994,
                        0
                      ],
                      [
                        -123.722756,
                        45.567573,
                        262.8741964801862,
                        0
                      ],
                      [
                        -123.724167,
                        45.566268,
                        240.09191103987888,
                        0
                      ],
                      [
                        -123.72519,
                        45.565677,
                        253.63386879995898,
                        0
                      ],
                      [
                        -123.726784,
                        45.564922,
                        246.64180992018885,
                        0
                      ],
                      [
                        -123.727089,
                        45.564952,
                        247.201450239855,
                        0
                      ],
                      [
                        -123.729691,
                        45.565578,
                        241.7473180800283,
                        0
                      ],
                      [
                        -123.729989,
                        45.566116,
                        262.4633939199118,
                        0
                      ],
                      [
                        -123.730179,
                        45.566848,
                        268.3306572796767,
                        0
                      ],
                      [
                        -123.731003,
                        45.567741,
                        261.1204503998577,
                        0
                      ],
                      [
                        -123.730965,
                        45.567989,
                        271.13068160000154,
                        0
                      ],
                      [
                        -123.73124,
                        45.568367,
                        271.5565472000505,
                        0
                      ],
                      [
                        -123.731904,
                        45.568519,
                        250.04788096009008,
                        0
                      ],
                      [
                        -123.73333,
                        45.569187,
                        248.13839200002857,
                        0
                      ],
                      [
                        -123.733689,
                        45.569717,
                        269.717599999869,
                        0
                      ],
                      [
                        -123.734055,
                        45.569869,
                        270.89451759988464,
                        0
                      ],
                      [
                        -123.734192,
                        45.569717,
                        259.4198873599791,
                        0
                      ],
                      [
                        -123.734101,
                        45.569011,
                        245.22720719986586,
                        0
                      ],
                      [
                        -123.733498,
                        45.567981,
                        253.27809247972908,
                        0
                      ],
                      [
                        -123.732529,
                        45.567588,
                        218.4207564799772,
                        0
                      ],
                      [
                        -123.73211,
                        45.56697,
                        214.3840000000837,
                        0
                      ],
                      [
                        -123.731858,
                        45.565971,
                        216.77664576013333,
                        0
                      ],
                      [
                        -123.732346,
                        45.565483,
                        239.42443712012866,
                        0
                      ],
                      [
                        -123.732857,
                        45.565162,
                        248.7627286397704,
                        0
                      ],
                      [
                        -123.733162,
                        45.564678,
                        239.49234559942565,
                        0
                      ],
                      [
                        -123.734101,
                        45.564613,
                        279.0554099199981,
                        0
                      ],
                      [
                        -123.734841,
                        45.56483,
                        289.61449120001936,
                        0
                      ],
                      [
                        -123.735413,
                        45.564735,
                        285.65922879981156,
                        0
                      ],
                      [
                        -123.735817,
                        45.563724,
                        263.280696319921,
                        0
                      ],
                      [
                        -123.7361,
                        45.563385,
                        258.4414399997525,
                        0
                      ],
                      [
                        -123.736527,
                        45.563304,
                        261.4305913599993,
                        0
                      ],
                      [
                        -123.73671,
                        45.563159,
                        258.6407775999797,
                        0
                      ],
                      [
                        -123.737137,
                        45.563232,
                        265.46256191995485,
                        0
                      ],
                      [
                        -123.738472,
                        45.56406,
                        286.7020927998855,
                        0
                      ],
                      [
                        -123.738717,
                        45.564132,
                        289.26479999998946,
                        0
                      ],
                      [
                        -123.73909,
                        45.56377,
                        277.61412799998413,
                        0
                      ],
                      [
                        -123.739228,
                        45.562847,
                        258.6190700798455,
                        0
                      ],
                      [
                        -123.738961,
                        45.562389,
                        245.24133616014262,
                        0
                      ],
                      [
                        -123.739098,
                        45.561981,
                        243.31760000000895,
                        0
                      ],
                      [
                        -123.740754,
                        45.561145,
                        257.87728640006145,
                        0
                      ],
                      [
                        -123.741051,
                        45.560661,
                        239.39589088011252,
                        0
                      ],
                      [
                        -123.741517,
                        45.560245,
                        234.2628000001671,
                        0
                      ],
                      [
                        -123.742119,
                        45.559997,
                        229.3028531202293,
                        0
                      ],
                      [
                        -123.743538,
                        45.56018,
                        222.15196800012004,
                        0
                      ],
                      [
                        -123.743905,
                        45.560527,
                        224.313049600086,
                        0
                      ],
                      [
                        -123.744416,
                        45.561183,
                        224.42810111994174,
                        0
                      ],
                      [
                        -123.745476,
                        45.562164,
                        210.5504000002411,
                        0
                      ],
                      [
                        -123.746026,
                        45.562164,
                        192.69382144010183,
                        0
                      ],
                      [
                        -123.746392,
                        45.562129,
                        185.9579174399461,
                        0
                      ],
                      [
                        -123.746178,
                        45.561828,
                        177.24225663995296,
                        0
                      ],
                      [
                        -123.74614,
                        45.561416,
                        169.07200000006742,
                        0
                      ],
                      [
                        -123.74556,
                        45.560569,
                        155.4032256000797,
                        0
                      ],
                      [
                        -123.745492,
                        45.560089,
                        150.90370752003685,
                        0
                      ],
                      [
                        -123.745621,
                        45.559909,
                        145.86045231994393,
                        0
                      ],
                      [
                        -123.748482,
                        45.558765,
                        141.445804800024,
                        0
                      ],
                      [
                        -123.749848,
                        45.558624,
                        146.10400000007826,
                        0
                      ],
                      [
                        -123.751236,
                        45.558315,
                        143.50447360018637,
                        0
                      ],
                      [
                        -123.752099,
                        45.557964,
                        141.19484223995752,
                        0
                      ],
                      [
                        -123.752945,
                        45.55746,
                        135.88862399988867,
                        0
                      ],
                      [
                        -123.753792,
                        45.557323,
                        137.79654463988078,
                        0
                      ],
                      [
                        -123.754509,
                        45.556911,
                        130.37001903999092,
                        0
                      ],
                      [
                        -123.75454,
                        45.556388,
                        120.98830079997806,
                        0
                      ],
                      [
                        -123.754181,
                        45.555839,
                        118.95920000000842,
                        0
                      ],
                      [
                        -123.75396,
                        45.555198,
                        114.23447679991664,
                        0
                      ],
                      [
                        -123.75396,
                        45.554397,
                        110.25190080000743,
                        0
                      ],
                      [
                        -123.753701,
                        45.553642,
                        103.40878431998681,
                        0
                      ],
                      [
                        -123.752854,
                        45.552318,
                        107.98597376000157,
                        0
                      ],
                      [
                        -123.752656,
                        45.551792,
                        103.83158783993873,
                        0
                      ],
                      [
                        -123.752755,
                        45.550556,
                        97.16439360004786,
                        0
                      ],
                      [
                        -123.752175,
                        45.549732,
                        96.96480000000429,
                        0
                      ],
                      [
                        -123.752007,
                        45.549228,
                        92.66680000001747,
                        0
                      ],
                      [
                        -123.751915,
                        45.548477,
                        88.46602319998762,
                        0
                      ],
                      [
                        -123.751954,
                        45.548458,
                        88.5863999999558,
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
        var distanceMiles = parseFloat(e.features[0].properties.distance * .000621371).toFixed(2);
        var description = `<div class="popups"><h3>${e.features[0].properties.title}</h3><a href=https://gaiagps.com${e.features[0].properties.preferred_link}>Gaia Maps Route</a>
        <h4>Distance: ${distanceMiles} miles</div>`;
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
