const request = require('request');
const cheerio = require('cheerio');

const url = 'https://www.oregonhikers.org/field_guide/Category:Coast_Range'

request(url, (error, response, html) => {
  let trailheadURLs = []
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    Array.from($('a[title~="Trailhead"]')).forEach((trailhead) => {
      trailheadURLs.push('https://www.oregonhikers.org' + trailhead.attribs.href);
    })
    console.log(trailheadURLs);
  }
    // TODONE build array of trailhead-only URLs
    // What's RETURNED? Promise.all?
  }
);
