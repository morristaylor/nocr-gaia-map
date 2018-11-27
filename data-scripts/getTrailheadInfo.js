const fs = require('fs');
const request = require('request');
const rp = require('request-promise-native');
const cheerio = require('cheerio');

// Trailhead object constructor
function Trailhead(name, url, driveTime, lat, lng) {
  this.type = "Feature",
  this.properties = {},
  this.properties.name = name,
  this.properties.url = url,
  this.properties.driveTime = driveTime
  this.properties.icon = 'triangle',
  this.geometry = {},
  this.geometry.type = "Point",
  this.geometry.coordinates = [lng, lat]
}

// Takes trailheads URLs from list made with getTrailheadURL, requests each URL, scrapes data from Oregon Hikers, and builds a new trailhead GeoJSON object
function getTrailheadInfo() {
  var trailheads = [];
  var urls = JSON.parse(fs.readFileSync('trailhead-urls.json', 'utf8'));
  urls.forEach((url) => {
    rp(url).then((html) => {
        const $ = cheerio.load(html);
        const name = $('#mainContent > h1').text().trim();
        const lat = parseFloat($('#mw-content-text > ul > li:nth-child(1)').slice(0,1).text().slice(11).trim());
        const lng = parseFloat($('#mw-content-text > ul > li:nth-child(2)').text().slice(12).trim());
        const driveTime = $('#mw-content-text > ul > li').slice(4, 5).text().slice(29).trim();
        let trailhead = new Trailhead(name, url, driveTime, lat, lng);
        if (trailhead.geometry.coordinates[1] >= 45) {
          trailheads.push(trailhead);
        }
        fs.writeFileSync('trailhead-info2.json', JSON.stringify(trailheads));
      });
  })
}

getTrailheadInfo()
