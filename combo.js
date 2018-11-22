const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');

const nocUrl = 'https://www.oregonhikers.org/field_guide/Category:Coast_Range'

function Trailhead(name, url, driveTime, lat, lng) {
  this.type = "Feature",
  this.properties = {},
  this.properties.name = name,
  this.properties.url = url,
  this.properties.driveTime = driveTime
  this.geometry = {},
  this.geometry.type = "Point",
  this.geometry.coordinates = `[${lng}, ${lat}]`
}

function getLinks() {
  let trailheadURLs = [];
  var trailheads = [];
  request(nocUrl, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      Array.from($('a[title~="Trailhead"]')).forEach((trailhead) => {
        trailheadURLs.push('https://www.oregonhikers.org' + trailhead.attribs.href);
      })
    };
    trailheadURLs.forEach((url) => {
      request(url, (error, response, html) => {
          if (!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
            const name = $('#mainContent > h1').text().trim();
            const lat = parseFloat($('#mw-content-text > ul > li:nth-child(1)').slice(0,1).text().slice(11).trim());
            const lng = parseFloat($('#mw-content-text > ul > li:nth-child(2)').text().slice(12).trim());
            const driveTime = $('#mw-content-text > ul > li').slice(4, 5).text().slice(29).trim();
            let trailhead = new Trailhead(name, url, driveTime, lat, lng);
            trailheads.push(trailhead);
            console.log(JSON.stringify(trailhead))
            }
          });
        })
    });
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all promise the functions to write to json?

  getLinks();