const fs = require('fs');
const request = require('request');
const rp = require('request-promise-native');

// Unfinished. Working on grabbing boat launch data from the state, building GeoJSON objects for Clatsop and Tillamook counties launches, eventually adding them to map with other points.

// rp('https://data.oregon.gov/resource/dbtp-feta.geojson').then((data) => {
//     fs.writeFileSync('raw-boat.json', data);
//   });

function getNWRamps() {
  var data = JSON.parse(fs.readFileSync('raw-boat.json', 'utf8'));
  var ramps = data.features;
  ramps.forEach((ramp) => {
    if (ramp.properties.county == "Clatsop") {
      var clatsopRamps = []
      clatsopRamps.push(ramp);
    }
  });
};

getNWRamps();
