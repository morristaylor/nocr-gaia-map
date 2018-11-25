const fs = require('fs');
const request = require('request');
const rp = require('request-promise-native');

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
    } else if (ramp.properties.county == "Tillamook") {
      var tillamookRamps = []
      tillamookRamps.push(ramp);
    } else if (ramp.properties.county == "Lincoln") {
      var lincolnRamps = []
      lincolnRamps.push(ramp);
    }
  });
};

getNWRamps();
