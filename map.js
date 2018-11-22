mapboxgl.accessToken = '';

var map = new mapboxgl.Map({
  container: 'map',
  center: [-122.9929, 45.5970],
  style: 'mapbox://styles/mapbox/outdoors-v10',
  zoom: 9.25,
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
              "features": [
                {
              "type":"Feature",
              "properties": {
                "name":"Gnat Creek Hatchery Trailhead",
                "url":"https://www.oregonhikers.org/field_guide/Gnat_Creek_Hatchery_Trailhead",
                "driveTime":"90 minutes",
                "icon": "campsite"
                },
              "geometry": {
                "type":"Point",
                "coordinates":[-123.48801, 46.16918]
              },
            },{
            "type":"Feature",
            "properties": {
              "name":"Gnat Creek Hatchery Trailhead",
              "url":"https://www.oregonhikers.org/field_guide/Gnat_Creek_Hatchery_Trailhead",
              "driveTime":"90 minutes",
              "icon": "campsite"
              },
            "geometry": {
              "type":"Point",
              "coordinates":[-123.5801, 46.16918]
              }
            },{
            "type":"Feature",
            "properties": {
              "name":"Gnat Creek Hatchery Trailhead",
              "url":"https://www.oregonhikers.org/field_guide/Gnat_Creek_Hatchery_Trailhead",
              "driveTime":"90 minutes",
              "icon": "campsite"
              },
            "geometry": {
              "type":"Point",
              "coordinates":[-123.8801, 46.16918]
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
    });

    map.on('click', 'places', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = `<h3>${e.features[0].properties.name}</h3> <h4>Drive time from Portland: ${e.features[0].properties.driveTime}</h4><a href=${e.features[0].properties.url}>Oregon Hikers</a>`;
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    // TODO: ok good job good effort! Don't forget to load in your API key when you start again. Figure out a plan for process.env stuff later for deployment. The map is loading adhoc geojson features and mapping them! The popups are working and building small HTML snippets with template strings for features.props. Math.abs code around line 48 came from Mapbox's docs.
    //
    // You need to work on cleaning and normalizing the data from combo.js. It's close but not a perfect match for the GeoJSON data used here. Once you have that data outputting how you want, expect to just dump it in here. New trailheads don't spring up everyday and right now you're working on something resembling 'MVP' so have fun with it and don't get too hung up on that part. Once you have that data, you have that data.
    //
    // Next big steps are adding in all of the trailheads after readying the data, editing Mapbox map to highlight trails and FS roads, getting launch data from state's website, standing it up?
