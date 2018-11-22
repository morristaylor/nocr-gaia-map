const request = require('request');
const cheerio = require('cheerio');

const urlScraper = require('./urlScraper.js');

function Trailhead(name, url, driveTime, lat, lng) {
    this.name = name;
    this.url =  url;
    this.driveTime = driveTime;
    this.lat = lat;
    this.lng = lng;
  }

var trailheads = [];

urlScraper.getLinks();


// var urls = [
//   'https://www.oregonhikers.org/field_guide/Beaver_Falls_Trailhead',
//   'https://www.oregonhikers.org/field_guide/Northrup_Creek_Trailhead',
//   'https://www.oregonhikers.org/field_guide/Ape_Canyon_Trailhead'
// ];

// urls.forEach((url) => {
//   request(url, (error, response, html) => {
//     if (!error && response.statusCode == 200) {
//       const $ = cheerio.load(html);
//       const name = $('#mainContent > h1').text().trim();
//       const lat = parseFloat($('#mw-content-text > ul > li:nth-child(1)').slice(0,1).text().slice(11).trim());
//       const lng = parseFloat($('#mw-content-text > ul > li:nth-child(2)').text().slice(12).trim());
//       const driveTime = $('#mw-content-text > ul > li').slice(4, 5).text().slice(29).trim();
//
//       console.log(name, url, driveTime, lat, lng);
//
//       let trailhead = new Trailhead(name, url, driveTime, lat, lng);
//       trailheads.push(trailhead);
//
//       // TODONE object creation
//       // TODONE build array of trailhead URLs
//       // TODO load in new array from urlScraper.js and run it through the function above
//       // Consider Promise.all for RETURNED forEach array?
//     }
//   });
// });